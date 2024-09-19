'use client'

import { Component, useState, useEffect } from 'react'
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
  DraggableLocation,
} from 'react-beautiful-dnd'
import { uuid } from 'utils'
import clsx from 'clsx'
import Icon from 'shared/Icon'
import { OpCodeTypes } from '../lesson/OpCodeChallenge/OpFunctions'

type ItemType = {
  id: string
  index: number
  content: string
  category: string
}

interface Group {
  heading: string
  items: ItemType[]
}

type StateType = {
  [key: string]: ItemType[]
}

const disabledOpCodes: string[] = ['INITIAL_STACK']

const reorder = (
  list: ItemType[],
  startIndex: number,
  endIndex: number
): ItemType[] => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

const copy = (
  source: ItemType[],
  destination: ItemType[],
  droppableSource: DraggableLocation,
  droppableDestination: DraggableLocation
): ItemType[] => {
  const sourceClone = Array.from(source)
  const destClone = Array.from(destination)
  const item = sourceClone[droppableSource.index]

  destClone.splice(droppableDestination.index, 0, { ...item, id: uuid() })
  return destClone
}

const move = (
  source: ItemType[],
  destination: ItemType[],
  droppableSource: DraggableLocation,
  droppableDestination: DraggableLocation
): StateType => {
  const sourceClone = Array.from(source)
  const destClone = Array.from(destination)
  const [removed] = sourceClone.splice(droppableSource.index, 1)

  destClone.splice(droppableDestination.index, 0, removed)

  const result: StateType = {}
  result[droppableSource.droppableId] = sourceClone
  result[droppableDestination.droppableId] = destClone

  return result
}

const remove = (
  source: ItemType[],
  droppableSource: DraggableLocation
): ItemType[] => {
  const sourceClone = Array.from(source)
  sourceClone.splice(droppableSource.index, 1)
  return sourceClone
}

const ITEMS: ItemType[] = Object.keys(OpCodeTypes)
  .filter((key) => !disabledOpCodes.includes(key))
  .map((item, index) => ({
    id: uuid(),
    index: index,
    content: item,
    category: OpCodeTypes[item],
  }))

const groupedItems: Group[] = ITEMS.reduce(
  (groups: Group[], item: ItemType) => {
    const group = groups.find((g) => g.heading === item.category)
    if (group) {
      group.items.push(item)
    } else {
      groups.push({
        heading: item.category,
        items: [item],
      })
    }
    return groups
  },
  []
)

interface ScratchDndProps {
  items?: string[]
  prePopulate?: boolean
  onItemsUpdate?: (items: string[]) => void
}

interface ScratchDndState {
  dynamicState: StateType
  opPushValues: { [key: string]: string }
}

export default class ScratchDnd extends Component<
  ScratchDndProps,
  ScratchDndState
> {
  constructor(props: ScratchDndProps) {
    super(props)

    let opPushValues: { [key: string]: string } = {}

    const initialStateItems: ItemType[] = []
    if (props.prePopulate && props.items) {
      for (let i = 0; i < props.items.length; i++) {
        const item = props.items[i]
        const id = uuid()

        if (item === 'OP_PUSH' && props.items[i + 1]) {
          // Add the following item to opPushValues and skip it in the state
          opPushValues[id] = props.items[i + 1].toUpperCase()
          i++ // Skip the next item
        }

        initialStateItems.push({
          id,
          index: initialStateItems.length,
          content: item,
          category: '', // Adjust the category if needed
        })
      }
    }

    this.state = {
      dynamicState: {
        [uuid()]: initialStateItems,
      },
      opPushValues,
    }
  }

  handleOpPushChange = (
    id: string,
    value: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const input = event?.target
    const caretPosition = input?.selectionStart

    this.setState(
      (prevState) => ({
        opPushValues: {
          ...prevState.opPushValues,
          [id]: value.toUpperCase(),
        },
      }),
      () => {
        input.setSelectionRange(caretPosition, caretPosition)
      }
    )
  }

  onDragEnd = (result: DropResult) => {
    const { source, destination } = result

    if (!destination) {
      if (source.droppableId !== 'ITEMS') {
        const newState = { ...this.state.dynamicState }
        const newSourceList = remove(newState[source.droppableId], source)

        this.setState({
          dynamicState: {
            ...newState,
            [source.droppableId]: newSourceList,
          },
        })
      }
      return
    }

    switch (source.droppableId) {
      case destination.droppableId:
        this.setState({
          dynamicState: {
            ...this.state.dynamicState,
            [destination.droppableId]: reorder(
              this.state.dynamicState[source.droppableId],
              source.index,
              destination.index
            ),
          },
        })
        break
      case 'ITEMS':
        this.setState({
          dynamicState: {
            ...this.state.dynamicState,
            [destination.droppableId]: copy(
              ITEMS,
              this.state.dynamicState[destination.droppableId],
              source,
              destination
            ),
          },
        })
        break
      default:
        this.setState({
          dynamicState: move(
            this.state.dynamicState[source.droppableId],
            this.state.dynamicState[destination.droppableId],
            source,
            destination
          ),
        })
        break
    }
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.state !== this.state.dynamicState ||
      prevProps.opPushValues !== this.state.opPushValues
    ) {
      const updatedItems = Object.values(this.state.dynamicState).flatMap(
        (arr) => arr.map((item) => item)
      )

      const processedItems = updatedItems.flatMap((item) => {
        if (item.content === 'OP_PUSH') {
          const pushValueContent = this.state.opPushValues[item.id] || ''
          return [item.content, pushValueContent]
        } else {
          return [item.content]
        }
      })

      if (this.props.onItemsUpdate) {
        this.props.onItemsUpdate(processedItems)
      }
    }
  }

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        {Object.keys(this.state.dynamicState).map((list, i) => {
          return (
            <div key={i} className="border-b border-white/25 px-5 pt-[15px]">
              <p className="font-space-mono text-[15px] font-bold">
                Your script
              </p>
              <Droppable key={list} droppableId={list} direction="horizontal">
                {(provided, snapshot) => (
                  <div
                    className={clsx(
                      'flex h-[40px] w-full flex-row whitespace-nowrap font-space-mono',
                      {
                        'overflow-hidden':
                          this.state.dynamicState[list].length === 0,
                        'overflow-x-auto overflow-y-hidden':
                          this.state.dynamicState[list].length > 0,
                      }
                    )}
                    ref={provided.innerRef}
                  >
                    {this.state.dynamicState[list].length ? (
                      this.state.dynamicState[list].map((item, index) => (
                        <Draggable
                          key={item.id}
                          draggableId={item.id.toString()}
                          index={index}
                        >
                          {(provided, snapshot) => (
                            <div
                              id={item.id}
                              className={clsx(
                                'relative mr-0.5 flex h-[25px] select-none items-center rounded-sm bg-black/30 text-[13px] font-normal text-[#3DCFEF]',
                                {
                                  'pointer-events-none': this.props.prePopulate,
                                }
                              )}
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              style={provided.draggableProps.style}
                            >
                              <span
                                className={clsx(
                                  'flex items-center whitespace-nowrap',
                                  {
                                    'px-1.5': item.content !== 'OP_PUSH',
                                    'pl-1.5': item.content === 'OP_PUSH',
                                  }
                                )}
                              >
                                {item.content}
                                {item.content === 'OP_PUSH' && (
                                  <input
                                    key={item.id}
                                    id={item.id}
                                    className="mx-1 h-5 w-auto grow bg-white/20 px-1 text-[#3DCFEF] caret-[#3DCFEF99] placeholder:text-[#3DCFEF99]"
                                    placeholder="PUSH_DATA"
                                    type="text"
                                    value={
                                      this.state.opPushValues[item.id] || ''
                                    }
                                    onChange={(e) =>
                                      this.handleOpPushChange(
                                        item.id,
                                        e.target.value,
                                        e
                                      )
                                    }
                                  />
                                )}
                              </span>
                            </div>
                          )}
                        </Draggable>
                      ))
                    ) : (
                      <div className="relative flex h-[40px] min-w-full select-none content-center items-start justify-start overflow-hidden text-[15px] text-white/50">
                        Drag OP_CODES here to build your script...
                      </div>
                    )}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          )
        })}
        <Droppable
          droppableId="ITEMS"
          isDropDisabled={true}
          direction="horizontal"
        >
          {(provided, snapshot) => (
            <div
              className="flex h-full flex-col gap-y-2 overflow-y-auto bg-black/10 px-5 py-[15px]"
              dir="rtl"
              ref={provided.innerRef}
            >
              {groupedItems.map((group, groupIndex) => (
                <div
                  key={groupIndex}
                  className="flex flex-row-reverse font-space-mono"
                >
                  <h2 className="w-fit min-w-[100px] select-none text-left text-[13px] font-semibold">
                    {group.heading}
                  </h2>
                  <div className="flex w-full flex-row-reverse flex-wrap gap-y-2 overflow-x-auto pl-1">
                    {group.items.map((item, index) => (
                      <Draggable
                        key={item.id}
                        draggableId={item.id.toString()}
                        index={item.index}
                      >
                        {(provided, snapshot) => (
                          <>
                            <div
                              id={item.id}
                              className={clsx(
                                'relative mr-0.5 flex h-[25px] select-none items-center rounded-sm bg-black/30 text-[13px] font-normal text-[#3DCFEF]',
                                {
                                  'pointer-events-none text-white/25':
                                    this.props.prePopulate,
                                }
                              )}
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              style={provided.draggableProps.style}
                            >
                              <span
                                className={clsx('flex items-center', {
                                  'px-1.5': item.content !== 'OP_PUSH',
                                  'pl-1.5': item.content === 'OP_PUSH',
                                })}
                              >
                                {item.content === 'OP_PUSH' && (
                                  <input
                                    key={item.id}
                                    id={item.id}
                                    className={clsx(
                                      'pointer-events-none mx-1 w-auto cursor-text rounded-sm bg-white/20 px-1 text-left placeholder:text-[#3DCFEF99]',
                                      {
                                        'opacity-50 placeholder:text-white/25':
                                          this.props.prePopulate,
                                      }
                                    )}
                                    type="text"
                                    placeholder="PUSH_DATA"
                                  />
                                )}
                                {item.content}
                              </span>
                            </div>
                            {snapshot.isDragging && (
                              <div className="clone">
                                <div
                                  className={clsx(
                                    'relative mr-0.5 flex h-[25px] select-none items-center rounded-sm bg-black/30 text-[13px] font-normal text-[#3DCFEF]',
                                    {
                                      'bg-black30/25 pointer-events-none text-white/25':
                                        this.props.prePopulate,
                                    }
                                  )}
                                >
                                  <span
                                    className={clsx('flex items-center', {
                                      'px-1.5': item.content !== 'OP_PUSH',
                                      'pl-1.5': item.content === 'OP_PUSH',
                                    })}
                                  >
                                    {item.content === 'OP_PUSH' && (
                                      <input
                                        key={item.id}
                                        id={item.id}
                                        className={clsx(
                                          'pointer-events-none mx-1 h-5 w-auto cursor-text rounded-sm bg-white/20 px-1 text-left placeholder:text-[#3DCFEF99]',
                                          {
                                            'opacity-50':
                                              this.props.prePopulate,
                                          }
                                        )}
                                        type="text"
                                        placeholder="PUSH_DATA"
                                      />
                                    )}
                                    {item.content}
                                  </span>
                                </div>
                              </div>
                            )}
                          </>
                        )}
                      </Draggable>
                    ))}
                  </div>
                </div>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    )
  }
}
