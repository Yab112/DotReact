import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => (
  <header className="flex p-3 justify-between items-center px-10 backdrop-blur-2xl ">
    <h2 className="text-4xl font-extrabold tracking-wider hover:text-teal-400 cursor-pointer transition-colors">
      <Link to="./" >PapuCorp.</Link>
    </h2>
    <nav className="flex gap-5 list-none text-lg font-semibold">
      <li className="relative group cursor-pointer">
        <span className="transition-colors group-hover:text-teal-400">
           <Link to="/">Home</Link>
        </span>
        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
      </li>
      <li className="relative group cursor-pointer"   >
        <span className="transition-colors group-hover:text-teal-400">
         <Link to="/About">About</Link>
        </span>
        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
      </li>
      <li className="relative group cursor-pointer">
        <span className="transition-colors group-hover:text-teal-400">
        <Link to="/enterprise">Enterprise</Link>
        </span>
        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
      </li>
      <li className="relative group cursor-pointer">
        <span className="transition-colors group-hover:text-teal-400">
        <Link to="/support">Support</Link>
        </span>
        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
      </li>
    </nav>
  </header>
);

export default Header;
