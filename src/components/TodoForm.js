import { useState } from "react";


function TodoForm ({ addTodo }) {
    const [value, setValue] = useState("")
    const handleSubmit = e => {
        e.preventDefault();

        addTodo(value);
        setValue("")
    }
    
    return (
        <form onSubmit={handleSubmit} className="TodoForm" >
            <input  type="text" className="todo-input" value={value} placeholder="what is the task today ?" onChange={(e) => setValue(e.target.value)}/>
            <button type="submit" className="todo-btn">Add Task </button>
        </form>
    )
}
export default TodoForm;