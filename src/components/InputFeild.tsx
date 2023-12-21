import {   faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface Props {
  text: string
  setText: React.Dispatch<React.SetStateAction<string>>
  handleAdd: (e: React.FormEvent<HTMLFormElement>) => void
}

const InputFeild = ({ text, setText, handleAdd }: Props) => {
  return (
    <form
      id="input"
      onSubmit={(e)=>{handleAdd(e)}}
      className="flex w-4/5 relative items-center mb-4"
    >
      <input
        type="text"
        placeholder="Enter a task"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full placeholder:text-gray-500 rounded-full py-4 pl-8 pr-20 shadow-inner bg-gray-200 outline-none border-none text-black   transition-shadow focus:bg-white "
      />
      <button
        type="submit"
        className="absolute bg-teal-600 text-white  w-14 py-2 shadow-2xl transition-all  rounded-full right-0 m-3 hover:opacity-75 focus:opacity-75 active:scale-[0.8]"
      >
        <FontAwesomeIcon icon={faPlus} className=" " />
      </button>
    </form>
  )
}

export default InputFeild
