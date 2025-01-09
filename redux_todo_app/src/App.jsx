import React, { useState } from "react";
import { addTodo, deleteTodo } from "./features/todo/todoSlice";
import { useDispatch, useSelector } from "react-redux";
import { use } from "react";

const App = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleAdd = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  const todos = useSelector((state) => state.todos.todos);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
          To-Do App
        </h1>
        <form onSubmit={handleAdd} className="flex gap-2 mb-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a new task"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition-transform transform hover:scale-105"
          >
            Add
          </button>
        </form>
        <ul className="space-y-3">
          {todos.map((todo) => {
            return (
              <li
                key={todo.id}
                className="flex justify-between items-center bg-gray-50 px-4 py-2 rounded-md shadow-sm hover:bg-gray-100 transition-all"
              >
                <span className="text-gray-700">{todo.task}</span>
                <button className="text-red-500 hover:text-red-600 focus:outline-none">
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default App;
