import React, { useState } from "react";
import { useTodoContext } from "../context/TodoContext";

const TodoPage: React.FC = () => {
  const { todos, addTodo, toggleTodo, deleteTodo, deleteAllTodos } = useTodoContext();
  const [task, setTask] = useState("");
  const [showDialog, setShowDialog] = useState(false);

  const handleAddTodo = () => {
    if (task.trim()) {
      addTodo(task);
      setTask("");
    }
  };

  const handleToggleTodo = (id: number) => {
    toggleTodo(id);
  };

  const handleDeleteTodo = (id: number) => {
    deleteTodo(id);
  };

  const handleDeleteAllTodos = () => {
    deleteAllTodos();
    setShowDialog(false);
  };

  return (
    <div className="min-h-80 bg-gray-100 flex justify-center items-center p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">

        {/* Task input and add button */}
        <div className="flex mb-4">
          <input
            type="text"
            placeholder="Add a new task"
            className="flex-grow border border-gray-300 rounded-l-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white px-4 rounded-r-lg hover:bg-blue-600"
            onClick={handleAddTodo}
          >
            Add
          </button>
        </div>

        {/* Task List */}
        <ul className="divide-y divide-gray-200">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between py-2"
            >
              {/* Checkbox for marking completion */}
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggleTodo(todo.id)}
                className="mr-3"
              />
              <span
                onClick={() => handleToggleTodo(todo.id)}
                className={`cursor-pointer ${
                  todo.completed ? "line-through text-gray-500" : "text-gray-800"
                }`}
              >
                {todo.text}
              </span>
              
              {/* Delete individual task */}
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => handleDeleteTodo(todo.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>

        {/* Delete All Button */}
        {todos.length > 0 && (
          <button
            onClick={() => setShowDialog(true)}
            className="w-full mt-4 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
          >
            Delete All Tasks
          </button>
        )}

        {/* Confirmation Dialog */}
        {showDialog && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-md shadow-lg text-center">
              <h2 className="text-lg font-bold mb-4">
                Are you sure you want to delete all tasks?
              </h2>
              <div className="flex justify-center gap-4">
                <button
                  onClick={handleDeleteAllTodos}
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition outline-none ring-0"
                >
                  Yes, Delete All
                </button>
                <button
                  onClick={() => setShowDialog(false)}
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 transition"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Message when no tasks are present */}
        {todos.length === 0 && (
          <p className="text-center text-gray-500 mt-4">No tasks yet!</p>
        )}
      </div>
    </div>
  );
};

export default TodoPage;
