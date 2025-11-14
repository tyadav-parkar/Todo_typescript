import React, { useState } from "react";
import "./Todo.css";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const handleClick = () => {
    if (!text.trim()) {
      alert("Please enter a task");
      return;
    }
    const newTodo = {
      text: text.trim(),
      date: new Date().toLocaleString(), 
    };
    setTodos([...todos, newTodo]);
    setText("");
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((h, index) => index !== id));
  };

  return (
    <div className="todo-container">
      <h1 className="todo-title">Todo Application</h1>
      <div className="todo-input-section">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter a task"
          className="todo-input"
        />
        <button onClick={handleClick} className="todo-button">
          Add
        </button>
      </div>
      <div className="todo-list">
        {todos.length === 0 ? (
          <p className="empty-message">No tasks yet</p>
        ) : (
          todos.map((item, index) => (
            <div key={index} className="todo-item">
              <div>
                <span className="task-text">{item.text}</span>
                <span className="task-date">{item.date}</span>
              </div>
              <button
                onClick={() => handleDelete(index)}
                className="delete-button"
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Todo;