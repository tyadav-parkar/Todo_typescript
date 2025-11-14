import React, { useState } from "react";

function Todo() {
  const [todos, setTodos] = useState<string[]>([]);
  const [text, setText] = useState<string>("");

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (text !== "") {
      setTodos([...todos, text]);
      setText("");
    }
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((h, index) => index !== id));
  };

  return (
    <>
      <h1>Todo Application</h1>
      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleClick}>Enter</button>
      </div>
      <div>
        {todos.map((item, index) => (
          <p key={index}>
            {item}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </p>
        ))}
      </div>
    </>
  );
}

export default Todo;