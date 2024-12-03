import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
const AddItemForm = ({ addItem }) => {
    const [inputValue, setInputValue] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        addItem(inputValue);
        setInputValue(""); // Clear the input field
    };
    return (_jsxs("form", { onSubmit: handleSubmit, className: "flex flex-col items-center space-y-4 bg-gray-100 p-4 rounded-lg shadow-md w-full max-w-md mx-auto mt-6 max-h-32  ", children: [_jsx("input", { type: "text", placeholder: "Add a new item", value: inputValue, onChange: (e) => setInputValue(e.target.value), className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" }), _jsx("button", { type: "submit", className: "px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200", children: "Add Item" })] }));
};
export default AddItemForm;
