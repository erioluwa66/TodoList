import TodoForm from "./TodoForm";
import Todo from "./Todo";
import EditTodoForm from "./EditTodoForm";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

function TodoWrapper() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
        setTodos(savedTodos);
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]); // Save todos to localStorage whenever it changes

    const addTodo = todo => {
        const newTodos = [
            ...todos, 
            { id: uuidv4(), task: todo, completed: false, isEditing: false }
        ];
        setTodos(newTodos);
    };

    const toggleComplete = id => {
        setTodos(todos.map(todo => 
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const editTodo = (id, updatedTask) => {
        setTodos(todos.map(todo => 
            todo.id === id ? { ...todo, task: updatedTask, isEditing: false } : todo
        ));
    };

    return (
        <div className="TodoWrapper">
            <h1>Be Productive!</h1>
            <TodoForm addTodo={addTodo} />
            {todos.map(todo => (
                todo.isEditing ? (
                    <EditTodoForm 
                        key={todo.id} 
                        editTodo={editTodo} 
                        task={todo} 
                    />
                ) : (
                    <Todo 
                        key={todo.id} 
                        task={todo} 
                        toggleComplete={toggleComplete} 
                        deleteTodo={deleteTodo} 
                        editTodo={() => editTodo(todo.id)} 
                    />
                )
            ))}
        </div>
    );
}

export default TodoWrapper;
