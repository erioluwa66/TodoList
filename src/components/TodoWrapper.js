import TodoForm from "./TodoForm";
import { useState,useEffect } from "react";
import { v4 as uuidv4 } from "uuid";


function TodoWrapper ({}) {
    const [todos, setTodos] = useState([])
    
    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
        setTodos(savedTodos)
    }, []);

    const addTodo = todo => {
        const newTodos = [
            ...todos, 
            {id: uuidv4(), task: todo, completed: false, isEditing: false}]
            setTodos(newTodos);
            localStorage.setItem('todos', JSON.stringify(newTodos));
        
    };
     useEffect(() => {
        console.log(todos);
    }, [todos]);
    
    return (
        <div className="TodoWrapper">
            <TodoForm addTodo={addTodo} />
        </div>
    )
}
export default TodoWrapper;