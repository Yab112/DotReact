import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useTodoContext } from "../context/TodoContext";
const TodoPage = () => {
    const { todos, addTodo, toggleTodo, deleteTodo, deleteAllTodos } = useTodoContext();
    const [task, setTask] = useState("");
    const [showDialog, setShowDialog] = useState(false);
    const handleAddTodo = () => {
        if (task.trim()) {
            addTodo(task);
            setTask("");
        }
    };
    const handleToggleTodo = (id) => {
        toggleTodo(id);
    };
    const handleDeleteTodo = (id) => {
        deleteTodo(id);
    };
    const handleDeleteAllTodos = () => {
        deleteAllTodos();
        setShowDialog(false);
    };
    return (_jsx("div", { className: "min-h-80 bg-gray-100 flex justify-center items-center p-4", children: _jsxs("div", { className: "bg-white shadow-lg rounded-lg p-6 w-full max-w-md", children: [_jsxs("div", { className: "flex mb-4", children: [_jsx("input", { type: "text", placeholder: "Add a new task", className: "flex-grow border border-gray-300 rounded-l-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500", value: task, onChange: (e) => setTask(e.target.value) }), _jsx("button", { className: "bg-blue-500 text-white px-4 rounded-r-lg hover:bg-blue-600", onClick: handleAddTodo, children: "Add" })] }), _jsx("ul", { className: "divide-y divide-gray-200", children: todos.map((todo) => (_jsxs("li", { className: "flex items-center justify-between py-2", children: [_jsx("input", { type: "checkbox", checked: todo.completed, onChange: () => handleToggleTodo(todo.id), className: "mr-3" }), _jsx("span", { onClick: () => handleToggleTodo(todo.id), className: `cursor-pointer ${todo.completed ? "line-through text-gray-500" : "text-gray-800"}`, children: todo.text }), _jsx("button", { className: "text-red-500 hover:text-red-700", onClick: () => handleDeleteTodo(todo.id), children: "Delete" })] }, todo.id))) }), todos.length > 0 && (_jsx("button", { onClick: () => setShowDialog(true), className: "w-full mt-4 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600", children: "Delete All Tasks" })), showDialog && (_jsx("div", { className: "fixed inset-0 flex items-center justify-center bg-black bg-opacity-50", children: _jsxs("div", { className: "bg-white p-6 rounded-md shadow-lg text-center", children: [_jsx("h2", { className: "text-lg font-bold mb-4", children: "Are you sure you want to delete all tasks?" }), _jsxs("div", { className: "flex justify-center gap-4", children: [_jsx("button", { onClick: handleDeleteAllTodos, className: "bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition outline-none ring-0", children: "Yes, Delete All" }), _jsx("button", { onClick: () => setShowDialog(false), className: "bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 transition", children: "Cancel" })] })] }) })), todos.length === 0 && (_jsx("p", { className: "text-center text-gray-500 mt-4", children: "No tasks yet!" }))] }) }));
};
export default TodoPage;
