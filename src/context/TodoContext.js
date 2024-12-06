import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useState } from "react";
const TodoContext = createContext(undefined);
export const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);
    const addTodo = (text) => {
        setTodos([...todos, { id: Date.now(), text, completed: false }]);
    };
    const toggleTodo = (id) => {
        setTodos((prevTodos) => prevTodos.map((todo) => todo.id === id ? Object.assign(Object.assign({}, todo), { completed: !todo.completed }) : todo));
    };
    const deleteAllTodos = () => {
        setTodos([]);
    };
    const deleteTodo = (id) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };
    return (_jsx(TodoContext.Provider, { value: { todos, addTodo, toggleTodo, deleteTodo, deleteAllTodos }, children: children }));
};
export const useTodoContext = () => {
    const context = useContext(TodoContext);
    if (!context) {
        throw new Error("useTodoContext must be used within a TodoProvider");
    }
    return context;
};
