const Todo = ({ title, task, onComplete }) => {
  const removeTodoHandler = () => {
    onComplete(true)
  }

  return (
    <li>
      <h2>{title}</h2>
      <p>{task}</p>
      <button
        onClick={removeTodoHandler}
        className="btn btn-success"
        type="button"
      >
        Complete
      </button>
    </li>
  )
}

export default Todo
