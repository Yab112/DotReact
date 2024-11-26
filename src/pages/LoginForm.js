import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
const LoginForm = ({ onLogin }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin(username, password);
    };
    return (_jsx("div", { className: "h-screen w-full fixed top-0 left-0 flex justify-center items-center backdrop-blur-lg bg-black/50 z-50", children: _jsxs("form", { onSubmit: handleSubmit, className: "w-[20%] p-6 bg-white rounded shadow-md border", children: [_jsxs("div", { children: [_jsx("label", { htmlFor: "username", className: "block mb-2 text-gray-700", children: "Username:" }), _jsx("input", { id: "username", type: "text", value: username, onChange: (e) => setUsername(e.target.value), className: "w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500", required: true })] }), _jsxs("div", { className: "mt-4", children: [_jsx("label", { htmlFor: "password", className: "block mb-2 text-gray-700", children: "Password:" }), _jsx("input", { id: "password", type: "password", value: password, onChange: (e) => setPassword(e.target.value), className: "w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500", required: true })] }), _jsx("button", { type: "submit", className: "mt-6 w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200", children: "Login" })] }) }));
};
export default LoginForm;
