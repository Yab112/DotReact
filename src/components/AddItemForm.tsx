import React, { useState } from "react";

interface AddItemFormProps {
  addItem: (item: string) => void;
}

const AddItemForm: React.FC<AddItemFormProps> = ({ addItem }) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addItem(inputValue);
    setInputValue(""); // Clear the input field
  };

  return (
    <form 
      onSubmit={handleSubmit} 

      onChange={(e: React.ChangeEvent<HTMLFormElement>) => {
        if (e.target instanceof HTMLInputElement) {
          console.log(e.target.value);
        }
      }}
      
      className="flex flex-col items-center space-y-4 bg-gray-100 p-4 rounded-lg shadow-md w-full max-w-md mx-auto mt-6 max-h-32  "
    >
      <input
        type="text"
        placeholder="Add a new item"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
      >
        Add Item
      </button>
    </form>
  );
};

export default AddItemForm;
