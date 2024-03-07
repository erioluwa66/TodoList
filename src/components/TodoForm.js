import { useState, useRef } from "react";
import axios from "axios";



function TodoForm ({ addTodo }) {
    const [value, setValue] = useState("")
    const [todos, setTodos] = useState([]);
    const formRef = useRef();
    const handleSubmit = e => {
        e.preventDefault();
        const formData = formRef.current;
        console.log(formData);
        const API_URL = 'http://localhost:8080/tasks';
        const postToDoItems = async () => {
          try {
            const response = await axios.post(API_URL, {"task": formData.task.value});
            setTodos([...todos, response.data]);
            console.log(response.data);
          } catch(error) {
            console.log(error);
          }
        };
        postToDoItems();
        if (value === "") {
            alert("Cannot add empty task");
            return;
        }
        addTodo(value);
        setValue("")
    }
    
    return (
        <form onSubmit={handleSubmit} className="TodoForm" ref={formRef}>
            <input name="task" id="task" type="text" className="todo-input" value={value} placeholder="what is the task today ?" onChange={(e) => setValue(e.target.value)}/>
            <button type="submit" className="todo-btn">Add Task </button>
        </form>
    )
}
export default TodoForm;