import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import EditTodoForm from "./EditTodoForm";
import CreateGarden from "./CreateGarden/CreateGarden";
import SetToDoLists from "./SetToDoLists/SetToDoLists";


function TodoWrapper() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  
  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  };


  const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const completedCount = todos.filter((todo) => todo.completed).length;

  return (
    <>
    <div className="TodoWrapper">
      <h1>Tend to Your Tasks ! ✿ </h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo) =>
        todo.isEditing ? (
          <EditTodoForm editTodo={editTodo} task={todo} key={todo.id} />
        ) : (
          <Todo
            key={todo.id}
            task={todo}
            deleteTodo={deleteTodo}
            editTodo={() => editTodo(todo.task, todo.id)}
            toggleComplete={toggleComplete}
          />
        )
      )}
    </div>
    <SetToDoLists setTodos={setTodos}/>
    <CreateGarden completedCount={completedCount} />
     </>
  );
}

export default TodoWrapper;
