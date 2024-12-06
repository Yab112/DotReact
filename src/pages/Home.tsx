import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import OurTeam from "../components/OurTeam";
import image from "../../public/data";
import AddItemForm from "../components/AddItemForm";
import ItemList from "../components/ItemList";
import { TodoProvider } from "../context/TodoContext";
import TodoPage from "../components/TodoPage";
import { UserProvider } from "../context/UserContext";
import UserList from "../components/UserList";

interface UserDashboardProps {
  onLogout: () => void;
}

const Home: React.FC<UserDashboardProps> = ({ onLogout }) => {
  const [items, setItems] = useState<string[]>(["Item 1", "Item 2", "Item 3"]);

  const addItem = (newItem: string) => {
    if (newItem.trim()) {
      setItems([...items, newItem]);
    }
  };

  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <HeroSection />

      {/* Dynamic List Section */}
        <UserProvider>
          <div className="flex justify-center items-center min-h-[40rem] bg-gray-200">
            <UserList />
          </div>
        </UserProvider>
      <div className="bg-gray-50 py-12 border-b border-gray-300">
        <div className="max-w-5xl mx-auto text-center mb-8">
          <h1 className="font-extrabold text-3xl text-blue-600">
            Dynamic List
          </h1>
          <p className="text-gray-600 mt-2">
            Easily manage your list by adding and removing items below.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-start justify-center gap-8 px-4">
          <div className="lg:w-1/3">
            <AddItemForm addItem={addItem} />
          </div>
          <div className="lg:w-2/3">
            <ItemList items={items} removeItem={removeItem} />
          </div>
        </div>
      </div>

      {/* Our Services Section */}
      <div className="bg-gray-100 py-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800">Our Services</h2>
          <p className="text-gray-500 mt-2">
            Explore the amazing services we provide to help you.
          </p>
        </div>

        <div className="mt-12">
          <OurTeam images={image} />
        </div>
      </div>

      {/* Todo Tracker Section */}
      <div className="bg-white py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-gray-800">
            Track Your Weekly Todos
          </h1>
          <p className="text-gray-600 mt-4">
            Stay organized with our todo tracker tool and achieve your goals.
          </p>
        </div>
      
        <div className="mt-8">
          <TodoProvider>
            <TodoPage />
          </TodoProvider>
        </div>
      </div>
    </div>
  );
};

export default Home;
