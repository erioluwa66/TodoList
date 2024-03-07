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
    const toggleComplete = id => {
        setTodos(todos.map(todo => todo.id ===id ? 
            {...todo, completed: !todo.completed} : todo))};

    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !==id))
    }

    const editTodo = id => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: todo.isEditing} : todo))
    }
    return (
        <div className="TodoWrapper">
            <h1>Be Productive! </h1>
            <TodoForm addTodo={addTodo} />
            {todos.map((todo, index) => (
                <Todo task={todo} key={index} 
                toggleComplete={toggleComplete} deleteTodo={deleteTodo}
                editTodo={editTodo}/>
            ))}
            
        </div>
    );
}
export default TodoWrapper;