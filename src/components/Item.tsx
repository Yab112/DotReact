import React from "react";

interface ItemProps {
  item: string;
  removeItem: () => void;
}

const Item: React.FC<ItemProps> = ({ item, removeItem }) => {
  return (
    <li className="flex justify-between items-center bg-gray-50 border border-gray-200 rounded-md p-2 py-2">
      <span className="text-gray-800 font-medium">{item}</span>
      <button
        onClick={removeItem}
        className="ml-4 px-4 py-2 bg-red-500 text-white text-sm font-semibold rounded-lg hover:bg-red-600 transition duration-200"
      >
        Delete
      </button>
    </li>
  );
};

export default Item;
