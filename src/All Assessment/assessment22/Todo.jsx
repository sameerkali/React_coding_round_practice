import React, { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const addTodo = () => {
    if (todo.trim() !== "") {
      let newTodo = { id: Date.now(), content: todo };
      setTodos((prev) => [...prev, newTodo]);
      setTodo("");
    }
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id, newText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, content: newText } : todo
      )
    );
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  return (
    <div className="flex flex-col h-screen items-center">
      <h1 className="text-5xl font-bold font-sans mt-10">Todo Local Storage</h1>
      <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-10">
        <input
          className="w-[25rem] px-3 py-1 border border-black rounded-sm"
          type="text"
          placeholder="learn todo"
          value={todo}
          onChange={handleChange}
        />
        <button
          className="bg-red-700 px-10 py-2 text-white font-bold"
          onClick={addTodo}
        >
          Add
        </button>
      </div>
      <div className="mt-10">
        {todos.map((todo) => (
          <div key={todo.id} className="flex space-x-4">
            <p>{todo.content}</p>
            <button
              className="bg-blue-500 px-4 py-1 text-white rounded"
              onClick={() => updateTodo(todo.id, prompt("Update todo", todo.content))}
            >
              Update
            </button>
            <button
              className="bg-red-500 px-4 py-1 text-white rounded"
              onClick={() => removeTodo(todo.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;