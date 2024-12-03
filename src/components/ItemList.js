import { jsx as _jsx } from "react/jsx-runtime";
import Item from "./Item";
const ItemList = ({ items, removeItem }) => {
    return (_jsx("ul", { className: "w-full mx-auto mt-6 space-y-2 flex flex-wrap gap-4", children: items.length > 0 ? (items.map((item, index) => (_jsx(Item, { item: item, removeItem: () => removeItem(index) }, index)))) : (_jsx("li", { className: "text-center text-gray-500", children: "No items available" })) }));
};
export default ItemList;
