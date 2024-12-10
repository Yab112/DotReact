import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="flex justify-between items-center p-4 bg-transparent text-white backdrop-blur-sm">
      {/* Logo */}
      <div className="text-2xl font-bold text-yellow-400">Movie Flixer</div>

      {/* Navigation */}
      <nav>
        <ul className="flex gap-6 list-none text-lg font-semibold">
          <li className="hover:text-yellow-400 cursor-pointer">Home</li>
          <li className="hover:text-yellow-400 cursor-pointer">Movies</li>
          <li className="hover:text-yellow-400 cursor-pointer">TV Shows</li>
        </ul>
      </nav>

      {/* Call-to-Action Button */}
      <div>
        <button className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-black rounded-md font-medium">
          Subscribe Now
        </button>
      </div>
    </header>
  );
};

export default Header;
