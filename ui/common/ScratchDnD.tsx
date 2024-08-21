'use client'

import { Fragment, useState, useEffect } from 'react'
import { DragDropContext, Draggable, Droppable } from '@hello-pangea/dnd'
import { v4 as uuid } from 'uuid'

type ItemType = {
  id: string
  content: string
}

type StateType = {
  [key: string]: ItemType[]
}

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

const ScratchDnD = ({ items, onItemsUpdate }) => {
  const [state, setState] = useState<StateType>({
    [uuid()]: [],
  })

  const ITEMS = items.map((item) => ({
    id: uuid(),
    content: item,
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

  const addList = (e) => {
    setState({ [uuid()]: [] })
  }

  useEffect(() => {
    const updatedItems = Object.values(state).flatMap((arr) =>
      arr.map((item) => item.content)
    )
    if (onItemsUpdate) {
      onItemsUpdate(updatedItems) // Pass data to parent component
    }
  }, [state, onItemsUpdate])

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="mb-14">
        {Object.keys(state).map((list, i) => {
          return (
            <Droppable key={list} droppableId={list} direction="horizontal">
              {(provided, snapshot) => (
                <ul
                  className="flex flex-row font-space-mono text-lg"
                  ref={provided.innerRef}
                >
                  {state[list].length ? (
                    state[list].map((item, index) => (
                      <Draggable
                        key={item.id}
                        draggableId={item.id}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <div
                            className="arrow-box relative mx-2.5 flex h-[58px] items-center bg-gray-500 p-1"
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={provided.draggableProps.style}
                          >
                            {item.content}
                          </div>
                        )}
                      </Draggable>
                    ))
                  ) : (
                    <div className="arrow-box-25 relative mx-2.5 flex h-[58px] items-center bg-gray-500/25 p-1 text-white/25">
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
            className="flex flex-row font-space-mono text-lg"
            ref={provided.innerRef}
          >
            {ITEMS.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided, snapshot) => (
                  <Fragment>
                    <div
                      className="arrow-box relative mx-2.5 flex h-[58px] items-center bg-gray-500 p-1"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={provided.draggableProps.style}
                    >
                      {item.content}
                    </div>
                    {snapshot.isDragging && (
                      <span className="arrow-box relative mx-2.5 flex h-[58px] items-center bg-gray-500 p-1">
                        {item.content}
                      </span>
                    )}
                  </Fragment>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default ScratchDnD
