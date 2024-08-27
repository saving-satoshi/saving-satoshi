'use client'

import { Component, useState, useEffect } from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import { v4 as uuid } from 'uuid'
import clsx from 'clsx'
import styled from 'styled-components'
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

const disabledOpCodes = ['INITIAL_STACK']

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

const copy = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source)
  const destClone = Array.from(destination)
  const item = sourceClone[droppableSource.index]

  destClone.splice(droppableDestination.index, 0, { ...item, id: uuid() })
  return destClone
}

const move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source)
  const destClone = Array.from(destination)
  const [removed] = sourceClone.splice(droppableSource.index, 1)

  destClone.splice(droppableDestination.index, 0, removed)

  const result = {}
  result[droppableSource.droppableId] = sourceClone
  result[droppableDestination.droppableId] = destClone

  return result
}

const remove = (source, droppableSource) => {
  const sourceClone = Array.from(source)
  sourceClone.splice(droppableSource.index, 1)
  return sourceClone
}

const Item = styled.div`
  display: flex;
  user-select: none;
  padding: 0.5rem;
  margin: 0 0.5rem 0.5rem 0.25rem;
  align-items: flex-center;
  align-content: flex-start;
  line-height: 1.5;
`

const Clone = styled(Item)`
  + div {
    display: none !important;
  }
`

const List = styled.div`
  border: 1px
  padding: 0.5rem 0.5rem 0;
  border-radius: 3px;
  flex: 0 0 150px;
  font-family: sans-serif;
`

const Kiosk = styled(List)`
  display: block;
  overflow-y: auto;
  padding-left: 0.625rem;
`

const Notice = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  padding: 0.5rem;
  margin: 0 0.5rem 0.5rem;
  border: 1px solid transparent;
  line-height: 1.5;
  color: #aaa;
`

const ITEMS = Object.keys(OpCodeTypes)
  .filter((key) => !disabledOpCodes.includes(key))
  .map((item, index) => ({
    id: uuid(),
    index: index,
    content: item,
    category: OpCodeTypes[item],
  }))

const groupedItems = ITEMS.reduce((groups, item) => {
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
}, [])

export default class ScratchDnd extends Component {
  state = {
    dynamicState: {
      [uuid()]: [],
    },
    opPushValues: {},
  }

  handleOpPushChange = (id, value) => {
    this.setState((prevState) => ({
      opPushValues: {
        ...prevState.opPushValues,
        [id]: value.toUpperCase(),
      },
    }))
  }

  onDragEnd = (result) => {
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
        <div className="mb-2 pl-2.5">
          {Object.keys(this.state.dynamicState).map((list, i) => {
            return (
              <Droppable key={list} droppableId={list} direction="horizontal">
                {(provided, snapshot) => (
                  <div
                    className="flex flex-row overflow-auto px-1 font-space-mono text-sm"
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
                            <Item
                              id={item.id}
                              className={clsx(
                                'arrow-box relative mx-1.5 flex h-[28px] select-none items-center bg-gray-500 p-1 text-sm font-normal',
                                {
                                  'pointer-events-none': this.props.prePopulate,
                                }
                              )}
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              style={provided.draggableProps.style}
                            >
                              {item.content}
                              {item.content === 'OP_PUSH' && (
                                <input
                                  key={item.id}
                                  id={item.id}
                                  className="mx-1 w-[150px] bg-gray-400 px-1 placeholder:text-white/50"
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
                            </Item>
                          )}
                        </Draggable>
                      ))
                    ) : (
                      <Notice className="arrow-box-25 relative mx-1.5 flex h-[28px] select-none items-center bg-gray-500/25 p-1 text-white/25">
                        OP_CODES...
                      </Notice>
                    )}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            )
          })}
        </div>
        <Droppable
          droppableId="ITEMS"
          isDropDisabled={true}
          direction="horizontal"
        >
          {(provided, snapshot) => (
            <Kiosk dir="rtl" ref={provided.innerRef}>
              {groupedItems.map((group, groupIndex) => (
                <div
                  key={groupIndex}
                  className="flex flex-row-reverse font-space-mono"
                >
                  <h2 className="mb-2 min-w-[160px] text-left text-xl font-semibold">
                    {group.heading}
                  </h2>
                  <div className="flex w-full flex-row-reverse overflow-x-auto pl-1">
                    {group.items.map((item, index) => (
                      <Draggable
                        key={item.id}
                        draggableId={item.id.toString()}
                        index={item.index}
                      >
                        {(provided, snapshot) => (
                          <>
                            <Item
                              id={item.id}
                              className={clsx(
                                'arrow-box relative mx-1.5 flex h-[28px] select-none items-center bg-gray-500 p-1 text-sm font-normal',
                                {
                                  'arrow-box-25 pointer-events-none bg-gray-500/25 text-white/25':
                                    this.props.prePopulate,
                                  'arrow-box bg-gray-500':
                                    !this.props.prePopulate,
                                }
                              )}
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              style={provided.draggableProps.style}
                            >
                              {item.content === 'OP_PUSH' && (
                                <input
                                  key={item.id}
                                  id={item.id}
                                  className="pointer-events-none mx-1 w-[150px] cursor-text bg-gray-400 px-1 text-left placeholder:text-white/50"
                                  type="text"
                                  placeholder="PUSH_DATA"
                                />
                              )}
                              {item.content}
                            </Item>
                            {snapshot.isDragging && (
                              <Clone
                                className={clsx(
                                  'arrow-box relative mx-1.5 flex h-[28px] select-none items-center bg-gray-500 p-1 text-sm font-normal',
                                  {
                                    'arrow-box-25 pointer-events-none bg-gray-500/25 text-white/25':
                                      this.props.prePopulate,
                                    'arrow-box bg-gray-500':
                                      !this.props.prePopulate,
                                  }
                                )}
                              >
                                {item.content === 'OP_PUSH' && (
                                  <input
                                    key={item.id}
                                    id={item.id}
                                    className="pointer-events-none mx-1 w-[150px] cursor-text bg-gray-400 px-1 text-left placeholder:text-white/50"
                                    type="text"
                                    placeholder="PUSH_DATA"
                                  />
                                )}
                                {item.content}
                              </Clone>
                            )}
                          </>
                        )}
                      </Draggable>
                    ))}
                  </div>
                </div>
              ))}
              {provided.placeholder}
            </Kiosk>
          )}
        </Droppable>
      </DragDropContext>
    )
  }
}
