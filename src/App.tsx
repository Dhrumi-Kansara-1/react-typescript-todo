import React, { useState } from "react"
import { Todo } from "./model"
import TodoList from "./components/TodoList"
import InputFeild from "./components/InputFeild"

const App: React.FC = () => {
  const [text, setText] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAdd = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
     if(text) {
      setTodos([...todos, {id: Date.now(), text, isDone:false}])
      setText("")
     }
  }     
  return (
    <div
      id="app"
      className="w-screen h-screen flex flex-col text-white items-center    font-['Neucha']"
    >
      <h1
        id="heading"
        className="uppercase    z-1 text-4xl md:text-5xl  my-12 mb-6 "
      >
        Taskify
      </h1>
      <InputFeild text={text} setText={setText} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  )
}

export default App
