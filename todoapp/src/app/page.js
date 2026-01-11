"use client";

import React, { useEffect, useState } from "react";

const Page = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const res = await fetch("/api/todos");
    const data = await res.json();
    setTodos(data);
  };

  const addTodo = async () => {
    if (!title.trim()) return;

    await fetch("/api/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    });

    setTitle("");
    fetchTodos();
  };

  const deleteTodo = async (id) => {
    await fetch("/api/todos", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });

    fetchTodos();
  };

  // ✅ FIXED HERE
  const toggleComplete = async (todo) => {
    await fetch("/api/todos", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: todo.id,
        title: todo.title,
        completed: !todo.completed,
      }),
    });

    fetchTodos();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold mb-6">MY TO-DO</h1>

      {/* Input Section */}
      <div className="flex gap-3 mb-6">
        <input
          className="border-2 border-gray-300 px-4 py-2 w-72 rounded-lg focus:outline-none focus:ring-2 focus:ring-black uppercase"
          value={title}
          onChange={(e) => setTitle(e.target.value.toUpperCase())}
          placeholder="NEW TO-DO"
        />

        <button
          onClick={addTodo}
          className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition"
        >
          ADD
        </button>
      </div>

      {/* Todo List */}
      <ul className="w-full max-w-md">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="bg-white px-4 py-2 mb-3 rounded-lg flex items-center justify-between uppercase"
          >
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleComplete(todo)}
              />

              <span
                className={`${
                  todo.completed ? "line-through text-gray-400" : ""
                }`}
              >
                {todo.title}
              </span>
            </div>

            <button
              onClick={() => deleteTodo(todo.id)}
              className="text-red-500 font-bold hover:text-red-700"
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
