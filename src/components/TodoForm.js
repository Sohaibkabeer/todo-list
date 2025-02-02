import React, {useState} from 'react'

const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("")

    const handleSubmit = e =>{
        e.preventDefault(); //Calling preventDefault() during any stage of event flow cancels the event. e.g. Form won't submit so the re-render wont occur.
        addTodo(value);
        setValue("");
    }
   const Capitalize = (str)=>{
        return str.charAt(0).toUpperCase() + str.slice(1);
        }

  return (
    <>
    <form className='TodoForm' onSubmit={handleSubmit}>
<input type="text" className='todo-input' placeholder='What is the task?' value={Capitalize(value)} onChange={(e) => {setValue(e.target.value)}}/>
<button type='submit' className='todo-btn'>Add Task</button>
    </form>
    </>
  )
}

export default TodoForm;