import React from 'react'
import { BookOpen, Home, User, Settings } from 'lucide-react'
import AddBookDialog from './AddBookDialog'
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  }
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justi fy-between">
        <nav className="flex items-center justify-between w-[60%]">
          <a href="/" className="flex items-center space-x-2 text-gray-900">
            <BookOpen className="h-7 w-7 text-cyan-500" />
            <span className="font-bold text-xl">MonochromeReads</span>
          </a>

          <div className='flex justify-center items-center space-x-4'>
            <a href="/" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              <Home className="h-4 w-4 inline-block mr-1 text-cyan-400" />
              Home
            </a>
            <a href="/profile" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              <User className="h-4 w-4 inline-block mr-1 text-cyan-400" />
              Profile
            </a>
            <a href="/settings" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              <Settings className="h-4 w-4 inline-block mr-1 text-cyan-400" />
              Settings
            </a>
            
          </div>
        </nav>
        <div className='flex justify-end w-[40%] gap-2'>
          <AddBookDialog />
          <div 
            className="bg-cyan-400 text-sm text-slate-200 font-semibold px-4 py-1 text-center rounded-lg cursor-pointer flex justify-center items-center hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-slate-500 transition duration-150"
            role="button"
            aria-label="Logout"
            onClick={handleLogout}
          >
            Logout
          </div>

        </div>
      </div>
    </header>
  )
}

export default Header

