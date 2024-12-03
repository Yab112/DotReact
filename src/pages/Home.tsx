import React, { useState } from 'react'
import HeroSection from '../components/HeroSection'
import OurTeam from '../components/OurTeam'
import image from "../../public/data"
import AddItemForm from '../components/AddItemForm';
import ItemList from '../components/ItemList';

interface UserDashboardProps {
  onLogout: () => void;
}
const Home : React.FC<UserDashboardProps> = ({ onLogout }) => {
  const [items, setItems] = useState<string[]>(["Item 1", "Item 2", "Item 3"]);

  const addItem = (newItem: string) => {
    if (newItem.trim()) {
      setItems([...items, newItem]);
    }
  };

  // Function to remove an item by index
  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div className="w-full"> 
      <HeroSection />
      <div className="border-slate-200 border-b m-8 min-h-screen">
        <h1 className="font-bold text-slate-400 text-2xl ml-64 mb-4">Dynamic List</h1>
        <div className="flex justify-center flex-1 items-center gap-4">
          <div className='w-[20%]'>
            <AddItemForm addItem={addItem} />
          </div>
          <div className="w-[80%] flex flex-wrap">
            <ItemList items={items} removeItem={removeItem} />
          </div>
        </div>
      </div>
      <h2 className="text-5xl font-bold text-center    mb-8">Our Services</h2>
      <OurTeam images={image}/>
      
    </div>
  )
}

export default Home
