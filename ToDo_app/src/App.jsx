import React, { useState, useRef, useEffect } from "react";
import Navbar from "./components/nav";

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [showCompleted, setShowCompleted] = useState(false); // Toggle State

  const task = useRef(null);
  const handleAddBtn = useRef(null);
  const handleEditBtn = useRef(null);

  useEffect(() => {
    let checkTodos = localStorage.getItem("todos");
    if (checkTodos) {
      let todos = JSON.parse(localStorage.getItem("todos"));
      setTodos(todos);
    }
  }, []);

  const saveData = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const handleEdit = () => {
    if (editIndex !== null) {
      const updatedTodos = todos.map((item, i) =>
        i === editIndex ? { ...item, task: todo } : item
      );
      setTodos(updatedTodos);
      setTodo("");
      setEditIndex(null);
      saveData();
      handleAddBtn.current.style.display = "block";
      handleEditBtn.current.style.display = "none";
    }
  };

  const handleChangeEdit = (index) => {
    const selectedTodo = todos[index];
    if (selectedTodo) {
      task.current.value = selectedTodo.task;
      handleAddBtn.current.style.display = "none";
      handleEditBtn.current.style.display = "block";
      setTodo(selectedTodo.task);
      setEditIndex(index);
    } else {
      alert("Something went wrong!");
    }
  };

  const handleDelete = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
    saveData();
  };

  const handleAdd = () => {
    if (todo.trim() !== "") {
      setTodos([...todos, { task: todo, isCompleted: false }]);
      setTodo("");
      saveData();
    }
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleCheck = (index) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
    saveData();
  };

  const filteredTodos = todos.filter((todo) =>
    showCompleted ? todo.isCompleted : !todo.isCompleted
  );

  return (
    <>
      <Navbar />
      <div className="max-w-3xl mx-auto mt-10 p-5 bg-white shadow-lg rounded-md">
        <h1 className="text-3xl text-center mb-5">To-Do List</h1>

        {/* Input Section */}
        <div className="flex mb-5">
          <input
            type="text"
            name="task"
            ref={task}
            value={todo}
            onChange={handleChange}
            className="flex-1 p-2 border border-gray-300 rounded-md"
            placeholder="Enter a new task"
          />
          <button
            ref={handleAddBtn}
            onClick={handleAdd}
            className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Add Task
          </button>
          <button
            ref={handleEditBtn}
            onClick={handleEdit}
            className="ml-2 px-4 py-2 hidden bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Edit Task
          </button>
        </div>

        {/* Toggle Checkbox */}
        <div className="mb-5 flex items-center">
          <input
            type="checkbox"
            id="toggleCompleted"
            checked={showCompleted}
            onChange={() => setShowCompleted(!showCompleted)}
            className="mr-2"
          />
          <label htmlFor="toggleCompleted" className="text-lg">
            Show {showCompleted ? "Non-Completed" : "Completed"} Tasks
          </label>
        </div>

        {/* Task List */}
        {filteredTodos.length > 0 ? (
          <ul className="space-y-4">
            {filteredTodos.map((item, index) => (
              <li
                key={index}
                className="flex items-center justify-between bg-gray-100 p-3 rounded-md"
              >
                <input
                  type="checkbox"
                  checked={item.isCompleted}
                  onChange={() => handleCheck(index)}
                />
                <span
                  className={
                    item.isCompleted ? "text-xl line-through" : "text-xl"
                  }
                >
                  {item.task}
                </span>
                <div className="space-x-2">
                  <button
                    onClick={() => handleChangeEdit(index)}
                    className="px-3 py-1 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-4xl flex justify-center">No task</div>
        )}
      </div>
    </>
  );
}

export default App;
