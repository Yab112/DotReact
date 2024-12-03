import React from "react";
import Item from "./Item";

interface ItemListProps {
  items: string[];
  removeItem: (index: number) => void;
}

const ItemList: React.FC<ItemListProps> = ({ items, removeItem }) => {
  return (
    <ul className="w-full mx-auto mt-6 space-y-2 flex flex-wrap gap-4">
      {items.length > 0 ? (
        items.map((item, index) => (
          <Item
            key={index}
            item={item}
            removeItem={() => removeItem(index)}
          />
        ))
      ) : (
        <li className="text-center text-gray-500">No items available</li>
      )}
    </ul>
  );
};

export default ItemList;
