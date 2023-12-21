import { Todo } from "../model"
import SingleTodo from "./SingleTodo"

interface Props {
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList = ({ todos, setTodos }: Props) => {
  return (
    <div id="todos" className="flex flex-col  sm:flex-row w-4/5  py-4 justify-center gap-2 flex-wrap">
      {todos.map((item, index) => {
        return (
          <SingleTodo
            key={index}
            todo={item}
            todos={todos}
            setTodos={setTodos}
          />
        )
      })}
    </div>
  )
}

export default TodoList
