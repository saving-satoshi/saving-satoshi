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

  handleOpPushChange = (id: string, value: string) => {
    this.setState((prevState) => ({
      opPushValues: {
        ...prevState.opPushValues,
        [id]: value.toUpperCase(),
      },
    }))
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
            <Droppable key={list} droppableId={list} direction="horizontal">
              {(provided, snapshot) => (
                <div
                  className={clsx(
                    'flex h-9 w-full flex-row whitespace-nowrap px-1 pb-1 font-space-mono text-sm',
                    {
                      'overflow-hidden':
                        this.state.dynamicState[list].length === 0,
                      'overflow-x-auto':
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
                              'dnd-item relative -mx-[0.125rem] flex h-[28px] select-none items-center text-sm font-normal',
                              {
                                'pointer-events-none': this.props.prePopulate,
                              }
                            )}
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={provided.draggableProps.style}
                          >
                            <Icon
                              icon="scratchCaretFemale"
                              className="h-[28px] object-contain text-gray-500"
                            />
                            <span className="-ml-[0.08rem] -mr-[0.07rem] flex h-[28px] items-center whitespace-nowrap border-x border-gray-500 bg-gray-500 px-1">
                              {item.content}
                              {item.content === 'OP_PUSH' && (
                                <input
                                  key={item.id}
                                  id={item.id}
                                  className="mx-1 h-5 w-auto grow bg-gray-400 px-1 placeholder:text-white/50"
                                  placeholder="PUSH_DATA"
                                  type="text"
                                  value={this.state.opPushValues[item.id] || ''}
                                  onChange={(e) =>
                                    this.handleOpPushChange(
                                      item.id,
                                      e.target.value
                                    )
                                  }
                                />
                              )}
                            </span>
                            <Icon
                              icon="scratchCaretMale"
                              className="h-[28px] object-contain text-gray-500"
                            />
                          </div>
                        )}
                      </Draggable>
                    ))
                  ) : (
                    <div className="relative flex h-[28px] min-w-full select-none content-center items-start justify-start overflow-hidden px-1 text-white/50">
                      Drag OP_CODES here to build your script...
                    </div>
                  )}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          )
        })}
        <Droppable
          droppableId="ITEMS"
          isDropDisabled={true}
          direction="horizontal"
        >
          {(provided, snapshot) => (
            <div
              className="block overflow-y-auto pl-[0.625rem]"
              dir="rtl"
              ref={provided.innerRef}
            >
              {groupedItems.map((group, groupIndex) => (
                <div
                  key={groupIndex}
                  className="mb-2 flex flex-row-reverse font-space-mono"
                >
                  <h2 className="min-w-[160px] text-left text-xl font-semibold">
                    {group.heading}
                  </h2>
                  <div className="flex w-full flex-row-reverse flex-wrap overflow-x-auto pl-1">
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
                                'dnd-item relative mx-0.5 my-0.5 flex h-[28px] select-none items-center text-sm font-normal',
                                {
                                  'pointer-events-none text-white/25':
                                    this.props.prePopulate,
                                  '-mx-[0.125rem]': snapshot.isDragging,
                                }
                              )}
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              style={provided.draggableProps.style}
                            >
                              <Icon
                                icon="scratchCaretMale"
                                className="h-[28px] object-contain text-gray-500"
                              />
                              <span className="-ml-[0.08rem] -mr-[0.07rem] flex h-[28px] items-center bg-gray-500 px-1">
                                {item.content === 'OP_PUSH' && (
                                  <input
                                    key={item.id}
                                    id={item.id}
                                    className={clsx(
                                      'pointer-events-none mx-1 w-auto cursor-text bg-gray-400 px-1 text-left placeholder:text-white/50',
                                      {
                                        'opacity-50': this.props.prePopulate,
                                      }
                                    )}
                                    type="text"
                                    placeholder="PUSH_DATA"
                                  />
                                )}
                                {item.content}
                              </span>
                              <Icon
                                icon="scratchCaretFemale"
                                className="h-[28px] object-contain text-gray-500"
                              />
                            </div>
                            {snapshot.isDragging && (
                              <div className="clone">
                                <div
                                  className={clsx(
                                    'dnd-item relative mx-0.5 my-0.5 flex h-[28px] select-none items-center text-sm font-normal',
                                    {
                                      'pointer-events-none bg-gray-500/25 text-white/25':
                                        this.props.prePopulate,
                                      '': !this.props.prePopulate,
                                    }
                                  )}
                                >
                                  <Icon
                                    icon="scratchCaretMale"
                                    className="h-[28px] object-contain text-gray-500"
                                  />
                                  <span className="-ml-[0.08rem] -mr-[0.07rem] flex h-[28px] items-center bg-gray-500 px-1">
                                    {item.content === 'OP_PUSH' && (
                                      <input
                                        key={item.id}
                                        id={item.id}
                                        className={clsx(
                                          'pointer-events-none mx-1 h-5 w-auto cursor-text bg-gray-400 px-1 text-left placeholder:text-white/50',
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
                                  <Icon
                                    icon="scratchCaretFemale"
                                    className="h-[28px] object-contain text-gray-500"
                                  />
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
