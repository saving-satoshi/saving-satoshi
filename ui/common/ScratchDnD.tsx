'use client'

import { useState, useEffect } from 'react'
import { DragDropContext, Draggable, Droppable } from '@hello-pangea/dnd'
import { v4 as uuid } from 'uuid'
import clsx from 'clsx'
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

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}
/**
 * Moves an item from one list to another list.
 */
const copy = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source)
  const destClone = Array.from(destination)
  const item = sourceClone[droppableSource.index]

  destClone.splice(droppableDestination.index, 0, {
    ...(item as any),
    id: uuid(),
  })
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

const ScratchDnD = ({ items, prePopulate, onItemsUpdate }) => {
  const [opPushValues, setOpPushValues] = useState<{ [key: string]: string }>(
    {}
  )

  const handleOpPushChange = (id: string, value: string) => {
    setOpPushValues((prev) => ({
      ...prev,
      [id]: value.toUpperCase(),
    }))
  }

  const initialState = prePopulate
    ? {
        [uuid()]: items.map((item, index) => ({
          id: uuid(),
          index: index,
          content: item,
        })),
      }
    : {
        [uuid()]: [],
      }

  const [state, setState] = useState<StateType>(initialState)

  const ITEMS = Object.keys(OpCodeTypes)
    .filter((key) => !disabledOpCodes.includes(key))
    .map((item, index) => ({
      id: uuid(),
      index: index,
      content: item,
      category: OpCodeTypes[item],
    }))

  const onDragEnd = (result) => {
    const { source, destination } = result

    if (!destination && source.droppableId in state) {
      // Handle the deletion of the item
      setState((prevState) => {
        const newSourceList = Array.from(prevState[source.droppableId])
        newSourceList.splice(source.index, 1)

        return {
          ...prevState,
          [source.droppableId]: newSourceList,
        }
      })
      return
    } else if (!destination) {
      return
    }

    switch (source.droppableId) {
      case destination.droppableId:
        setState((prevState) => ({
          ...prevState,
          [destination.droppableId]: reorder(
            prevState[source.droppableId],
            source.index,
            destination.index
          ),
        }))
        break
      case 'ITEMS':
        setState((prevState) => ({
          ...prevState,
          [destination.droppableId]: copy(
            ITEMS,
            prevState[destination.droppableId],
            source,
            destination
          ),
        }))
        break
      default:
        setState((prevState) =>
          move(
            prevState[source.droppableId],
            prevState[destination.droppableId],
            source,
            destination
          )
        )
        break
    }
  }

  const groupedItems = ITEMS.reduce<Group[]>((groups, item) => {
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

  useEffect(() => {
    const updatedItems = Object.values(state).flatMap((arr) =>
      arr.map((item) => item)
    )

    const processedItems = updatedItems.flatMap((item) => {
      if (item.content === 'OP_PUSH') {
        const pushValueContent = opPushValues[item.id] || '' // Get the corresponding opPushValue
        return [item.content, pushValueContent] // OP_PUSH followed by its value
      } else {
        return [item.content] // Non-OP_PUSH items
      }
    })

    if (onItemsUpdate) {
      onItemsUpdate(processedItems) // Pass data to parent component
    }
  }, [state, onItemsUpdate, opPushValues])

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="mb-2 pl-2.5">
        {Object.keys(state).map((list, i) => {
          return (
            <Droppable key={list} droppableId={list} direction="horizontal">
              {(provided, snapshot) => (
                <ul
                  className="flex flex-row overflow-auto px-1 pb-4 font-space-mono text-sm"
                  ref={provided.innerRef}
                >
                  {state[list].length ? (
                    state[list].map((item, index) => (
                      <Draggable
                        key={item.id}
                        draggableId={item.id.toString()}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <div
                            id={item.id}
                            className={clsx(
                              'arrow-box relative mx-1.5 flex h-[28px] select-none items-center bg-gray-500 p-1',
                              {
                                'pointer-events-none': prePopulate,
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
                                className="mx-1 w-[150px] rounded bg-gray-400 px-1 text-left placeholder:text-white/50"
                                type="text"
                                value={opPushValues[item.id] || ''}
                                placeholder="PUSH_DATA"
                                onChange={(e) =>
                                  handleOpPushChange(item.id, e.target.value)
                                }
                              />
                            )}
                          </div>
                        )}
                      </Draggable>
                    ))
                  ) : (
                    <div className="arrow-box-25 relative mx-1.5 flex h-[28px] select-none items-center bg-gray-500/25 p-1 text-white/25">
                      OP_CODES...
                    </div>
                  )}
                  {provided.placeholder}
                </ul>
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
          <ul
            dir="rtl"
            className="block overflow-y-auto pl-2.5 font-space-mono text-sm"
            ref={provided.innerRef}
          >
            {/*<div
              className="flex flex-row-reverse flex-wrap pl-1"
            >
            {ITEMS.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={item.index}>
                {(provided, snapshot) => (
                  <>
                    <div
                      id={item.id}
                      className={clsx(
                        'relative mx-1.5 my-0.5 flex h-[28px] w-fit select-none items-center p-1',
                        {
                          'arrow-box-25 pointer-events-none bg-gray-500/25 text-white/25':
                            prePopulate,
                          'arrow-box bg-gray-500': !prePopulate,
                        }
                      )}
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={provided.draggableProps.style}
                    >
                      {item.content}
                    </div>
                    {snapshot.isDragging && (
                      <div className="arrow-box relative mx-1.5 my-0.5 flex h-[28px] w-fit select-none items-center bg-gray-500 p-1">
                        {item.content}
                      </div>
                    )}
                  </>
                )}
              </Draggable>
            ))}
            </div>*/}
            {groupedItems.map((group, groupIndex) => (
              <div key={groupIndex} className="flex flex-row-reverse">
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
                          <div
                            id={item.id}
                            className={clsx(
                              'relative mx-1.5 my-0.5 flex h-[28px] w-fit select-none items-center p-1',
                              {
                                'arrow-box-25 pointer-events-none bg-gray-500/25 text-white/25':
                                  prePopulate,
                                'arrow-box bg-gray-500': !prePopulate,
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
                                className="pointer-events-none mx-1 w-[150px] rounded bg-gray-400 px-1 text-left placeholder:text-white/50"
                                type="text"
                                placeholder="PUSH_DATA"
                              />
                            )}
                            {item.content}
                          </div>
                          {snapshot.isDragging && (
                            <div className="arrow-box relative mx-1.5 my-0.5 flex h-[28px] w-fit select-none items-center bg-gray-500 p-1">
                              {item.content}
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
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default ScratchDnD
