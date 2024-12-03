import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Item = ({ item, removeItem }) => {
    return (_jsxs("li", { className: "flex justify-between items-center bg-gray-50 border border-gray-200 rounded-md p-2 py-2", children: [_jsx("span", { className: "text-gray-800 font-medium", children: item }), _jsx("button", { onClick: removeItem, className: "ml-4 px-4 py-2 bg-red-500 text-white text-sm font-semibold rounded-lg hover:bg-red-600 transition duration-200", children: "Delete" })] }));
};
export default Item;
