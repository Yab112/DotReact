import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import HeroSection from "../components/HeroSection";
import OurTeam from "../components/OurTeam";
import image from "../../public/data";
import AddItemForm from "../components/AddItemForm";
import ItemList from "../components/ItemList";
import { TodoProvider } from "../context/TodoContext";
import TodoPage from "../components/TodoPage";
import { UserProvider } from "../context/UserContext";
import UserList from "../components/UserList";
const Home = ({ onLogout }) => {
    const [items, setItems] = useState(["Item 1", "Item 2", "Item 3"]);
    const addItem = (newItem) => {
        if (newItem.trim()) {
            setItems([...items, newItem]);
        }
    };
    const removeItem = (index) => {
        setItems(items.filter((_, i) => i !== index));
    };
    return (_jsxs("div", { className: "w-full", children: [_jsx(HeroSection, {}), _jsx(UserProvider, { children: _jsx("div", { className: "flex justify-center items-center min-h-[40rem] bg-gray-200", children: _jsx(UserList, {}) }) }), _jsxs("div", { className: "bg-gray-50 py-12 border-b border-gray-300", children: [_jsxs("div", { className: "max-w-5xl mx-auto text-center mb-8", children: [_jsx("h1", { className: "font-extrabold text-3xl text-blue-600", children: "Dynamic List" }), _jsx("p", { className: "text-gray-600 mt-2", children: "Easily manage your list by adding and removing items below." })] }), _jsxs("div", { className: "flex flex-col lg:flex-row items-start justify-center gap-8 px-4", children: [_jsx("div", { className: "lg:w-1/3", children: _jsx(AddItemForm, { addItem: addItem }) }), _jsx("div", { className: "lg:w-2/3", children: _jsx(ItemList, { items: items, removeItem: removeItem }) })] })] }), _jsxs("div", { className: "bg-gray-100 py-16", children: [_jsxs("div", { className: "text-center", children: [_jsx("h2", { className: "text-4xl font-bold text-gray-800", children: "Our Services" }), _jsx("p", { className: "text-gray-500 mt-2", children: "Explore the amazing services we provide to help you." })] }), _jsx("div", { className: "mt-12", children: _jsx(OurTeam, { images: image }) })] }), _jsxs("div", { className: "bg-white py-16", children: [_jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [_jsx("h1", { className: "text-4xl font-extrabold text-gray-800", children: "Track Your Weekly Todos" }), _jsx("p", { className: "text-gray-600 mt-4", children: "Stay organized with our todo tracker tool and achieve your goals." })] }), _jsx("div", { className: "mt-8", children: _jsx(TodoProvider, { children: _jsx(TodoPage, {}) }) })] })] }));
};
export default Home;
