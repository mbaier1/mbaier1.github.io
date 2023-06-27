import { useState } from 'react'
import Todo from './Todo'

const TodoList = ({ items }) => {
  const [isTaskComplete, setIsTaskComplete] = useState(false)

  const completeTaskHandler = (isComplete, task) => {
    task.isComplete = isComplete
    setIsTaskComplete((prevState) => {
      return { ...prevState, task }
    })
  }

  const filterTodos = items.filter((x) => x.isComplete === false)

  return (
    <div>
      <ul>
        {filterTodos.length > 0 &&
          filterTodos.map((item) => (
            <Todo
              key={item.id}
              title={item.title}
              task={item.task}
              isComplete={isTaskComplete}
              onComplete={(completed) => completeTaskHandler(completed, item)}
            />
          ))}
      </ul>
      {filterTodos.length === 0 && <h2>No More Todo's!</h2>}
    </div>
  )
}

export default TodoList
