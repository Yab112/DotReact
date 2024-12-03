import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import HeroSection from '../components/HeroSection';
import OurTeam from '../components/OurTeam';
import image from "../../public/data";
import AddItemForm from '../components/AddItemForm';
import ItemList from '../components/ItemList';
const Home = ({ onLogout }) => {
    const [items, setItems] = useState(["Item 1", "Item 2", "Item 3"]);
    const addItem = (newItem) => {
        if (newItem.trim()) {
            setItems([...items, newItem]);
        }
    };
    // Function to remove an item by index
    const removeItem = (index) => {
        setItems(items.filter((_, i) => i !== index));
    };
    return (_jsxs("div", { className: "w-full", children: [_jsx(HeroSection, {}), _jsxs("div", { className: "border-slate-200 border-b m-8 min-h-screen", children: [_jsx("h1", { className: "font-bold text-slate-400 text-2xl ml-64 mb-4", children: "Dynamic List" }), _jsxs("div", { className: "flex justify-center flex-1 items-center gap-4", children: [_jsx("div", { className: 'w-[20%]', children: _jsx(AddItemForm, { addItem: addItem }) }), _jsx("div", { className: "w-[80%] flex flex-wrap", children: _jsx(ItemList, { items: items, removeItem: removeItem }) })] })] }), _jsx("h2", { className: "text-5xl font-bold text-center    mb-8", children: "Our Services" }), _jsx(OurTeam, { images: image })] }));
};
export default Home;
