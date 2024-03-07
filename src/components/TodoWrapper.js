import TodoForm from "./TodoForm";
import Todo from "./Todo";
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
    
    return (
        <div className="TodoWrapper">
            <h1>Be Productive! </h1>
            <TodoForm addTodo={addTodo} />
            {todos.map((todo, index) => (
                <Todo task={todo} key={index} />
            ))}
            
        </div>
    );
}
export default TodoWrapper;