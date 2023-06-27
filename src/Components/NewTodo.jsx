import { useState } from 'react'
import '../Styles/NewTodo.css'

const NewTodo = ({ onCreateNewTodo }) => {
  const [createTitle, setCreateTitle] = useState('')
  const [createTask, setCreateTask] = useState('')

  const createTitleHandler = (typedTitle) => {
    setCreateTitle(typedTitle)
  }

  const createTaskHandler = (typedTask) => {
    setCreateTask(typedTask)
  }

  const CreateNewTodo = (event) => {
    event.preventDefault()

    let todo = {
      id: Math.random().toString(),
      title: createTitle,
      task: createTask,
      isComplete: false,
    }

    console.log(todo)

    onCreateNewTodo(todo)
  }

  return (
    <div className="container text-center">
      <div className="row align-items-start">
        <div className="col">
          <h2>Create New Todo</h2>
        </div>
      </div>
      <div className="row align-items-start">
        <form onSubmit={CreateNewTodo}>
          <div className="col">
            <label>Title</label>
          </div>
          <div className="col">
            <input
              onChange={(event) => createTitleHandler(event.target.value)}
              type="text"
            />
          </div>
          <div className="col">
            <label>Task</label>
          </div>
          <div className="col">
            <input
              onChange={(event) => createTaskHandler(event.target.value)}
              type="text"
            />
          </div>
          <div className="col">
            <button className="btn btn-primary" type="submit">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default NewTodo
