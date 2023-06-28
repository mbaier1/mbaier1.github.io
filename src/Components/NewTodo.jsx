import { useState } from 'react'
import '../Styles/NewTodo.css'

const NewTodo = ({ onCreateNewTodo, onCompletedNewDoto }) => {
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

    if (createTitle && createTask) {
      let todo = {
        id: Math.random().toString(),
        title: createTitle,
        task: createTask,
        isComplete: false,
      }

      onCreateNewTodo(todo)
      onCompletedNewDoto(false)
    }
  }

  const hideNewTodoHandler = () => {
    onCompletedNewDoto(false)
  }

  return (
    <div className="container px-4 text-center">
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
            <div className="new-todo__cancel">
              <button
                type="button"
                onClick={hideNewTodoHandler}
                className="btn btn-secondary"
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default NewTodo
