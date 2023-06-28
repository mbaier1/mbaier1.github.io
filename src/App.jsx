import { useState } from 'react'
import TodoList from './Components/TodoList'
import NewTodo from './Components/NewTodo'
import './Styles/App.css'

function App() {
  const todoItems = [
    {
      id: Math.random().toString(),
      title: 'Components',
      task: 'Work with Components',
      isComplete: false,
    },
    {
      id: Math.random().toString(),
      title: 'State',
      task: 'Work with State',
      isComplete: false,
    },
    {
      id: Math.random().toString(),
      title: 'Conditionals',
      task: 'Render items conditionally',
      isComplete: false,
    },
    {
      id: Math.random().toString(),
      title: 'Events',
      task: 'Work with built in and custom events',
      isComplete: false,
    },
    {
      id: Math.random().toString(),
      title: 'Rendering Lists',
      task: 'Render Lists dynamically',
      isComplete: false,
    },
  ]

  const [todos, setTodos] = useState(todoItems)

  const [showNewTodo, setShowNewTodo] = useState(false)

  const addNewTodoHandler = (todo) => {
    setTodos((prevState) => {
      return [...prevState, todo]
    })
  }

  const renderNewTodoHandler = () => {
    setShowNewTodo(true)
  }

  const minifyNewTodoHandler = () => {
    setShowNewTodo(false)
  }

  return (
    <div>
      <div>
        {!showNewTodo && (
          <div className="container text-center">
            <div className="row align-items-start">
              <div className="col">
                <button
                  onClick={renderNewTodoHandler}
                  className="btn btn-primary"
                  type="button"
                >
                  Create New Todo
                </button>
              </div>
            </div>
          </div>
        )}
        {showNewTodo && (
          <NewTodo
            onCompletedNewDoto={minifyNewTodoHandler}
            onCreateNewTodo={addNewTodoHandler}
          />
        )}
      </div>
      <TodoList items={todos} />
    </div>
  )
}

export default App
