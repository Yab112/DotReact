import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useUserContext } from "../context/UserContext";
const UserList = () => {
    const { users, editUser } = useUserContext();
    const [isEditing, setIsEditing] = useState(null);
    const [updatedName, setUpdatedName] = useState("");
    const [updatedAge, setUpdatedAge] = useState("");
    const handleEdit = (user) => {
        setIsEditing(user.id);
        setUpdatedName(user.name);
        setUpdatedAge(user.age);
    };
    const handleSave = (id) => {
        if (updatedName.trim() && updatedAge) {
            editUser(id, { name: updatedName, age: Number(updatedAge) });
            setIsEditing(null); // exit edit mode
        }
    };
    return (_jsxs("div", { className: "p-4 bg-white shadow-md rounded-md w-auto", children: [_jsx("h2", { className: "text-xl font-bold mb-4", children: "User List" }), _jsx("ul", { children: users.map((user) => (_jsx("li", { className: "flex  items-center mb-4 gap-24", children: isEditing === user.id ? (_jsxs("div", { className: "flex gap-8", children: [_jsx("input", { type: "text", value: updatedName, onChange: (e) => setUpdatedName(e.target.value), className: "border px-2 py-1 rounded-md" }), _jsx("input", { type: "number", value: updatedAge, onChange: (e) => setUpdatedAge(e.target.value), className: "border px-2 py-1 rounded-md" }), _jsx("button", { className: "bg-blue-500 text-white px-4 py-1 rounded-md", onClick: () => handleSave(user.id), children: "Save" }), _jsx("button", { className: "bg-gray-300 text-black px-4 py-1 rounded-md", onClick: () => setIsEditing(null), children: "Cancel" })] })) : (_jsxs("div", { className: "flex justify-between items-center w-full gap-12", children: [_jsxs("span", { className: "font-semibold", children: [user.name, " (", user.age, " years old)"] }), _jsx("div", { children: _jsx("button", { className: "bg-green-500 text-white px-4 py-1 rounded-md mr-2", onClick: () => handleEdit(user), children: "Edit" }) })] })) }, user.id))) })] }));
};
export default UserList;
