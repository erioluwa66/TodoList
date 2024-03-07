import { useState } from "react";

function EditTodoForm({ editTodo, task }) {
    const [value, setValue] = useState(task.task);

    const handleSubmit = (e) => {
        e.preventDefault();
        editTodo(value, task.id); // Update the task value
        setValue(""); // Clear the input value
    };

    return (
        <form onSubmit={handleSubmit} className="TodoForm">
            <input
                type="text"
                className="todo-input"
                value={value}
                placeholder="update task"
                onChange={(e) => setValue(e.target.value)} // Update the input value as it changes
            />
            <button type="submit" className="todo-btn">
                update task
            </button>
        </form>
    );
}

export default EditTodoForm;

