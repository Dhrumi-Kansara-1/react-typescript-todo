import { useState } from "react"
import { faCheck, faPen, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Todo } from "../model"

interface Props {
  todo: Todo
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  const [editMode, setEditMode] = useState<boolean>(false)
  const [editText, setEditText] = useState<string>(todo.text)

  const handleCheck = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    )
  }
  const handleEdit = (id: number) => {
    setEditMode(true)
  }

  const handleDelete = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const handleEditText = (e: React.FormEvent<HTMLFormElement>, id: number) => {
    e.preventDefault()
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, text: editText } : todo))
    )
    console.log(editText)
    setEditMode(false)
  }

  return (
    <form
      className={`flex justify-between gap-6 text-gray-800 items-center rounded shadow-lg bg-gray-200 py-2 px-4`}
      onSubmit={(e) => handleEditText(e, todo.id)}
    > 
      <input 
        type="input"
        className={`outline-none px-1  w-full overflow-scroll
        ${editMode ? "border" : "bg-gray-200  border-none "}
        ${todo.isDone ? "line-through" : ""}
        `}
        onChange={(e) => {
          setEditText(e.target.value)
        }}
        value={editText}
        disabled={!editMode}
      /> 
      {/* {editMode ? (
        <input
          type="text"
          className={``}
          onChange={e=>{
            setEditText(e.target.value)
          }}
          value={editText} 
        />
      ) : (
        <span className={`${todo.isDone ? "line-through" : ""} `}>
          {todo.text}
        </span>
      )} */}
      {/* <input
        type="text"
        className={`bg-transparent outline-none  ${
          editMode ? "border-gray-200" : ""
        } px-2 w-full`}
        value={todo.text}
        disabled={!editMode}
      /> */}
    
      <div className="flex gap-2 items-center">
        <FontAwesomeIcon
          icon={faPen}
          size="sm"
          className="cursor-pointer text-teal-600 hover:opacity-75 focus:opacity-75"
          onClick={() => {
            handleEdit(todo.id)
          }}
        />
        <FontAwesomeIcon
          icon={faTrash}
          size="sm"
          onClick={() => {
            handleDelete(todo.id)
          }}
          className="cursor-pointer text-teal-600 hover:opacity-75 focus:opacity-75"
        />
        <FontAwesomeIcon
          icon={faCheck}
          onClick={() => {
            handleCheck(todo.id)
          }}
          className="cursor-pointer text-teal-600 hover:opacity-75 focus:opacity-75"
        />
      </div>
    </form>
  )
}

export default SingleTodo
