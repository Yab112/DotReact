import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white py-10 px-5 flex justify-around items-start text-gray-700">
      <div>
        <h2 className="text-xl font-bold mb-4 text-gray-800">Features</h2>
        <ul className="space-y-2 cursor-pointer">
          <li className="hover:text-blue-500 transition">papu-lazagna</li>
          <li className="hover:text-blue-500 transition">papu-kbstsyo</li>
          <li className="hover:text-blue-500 transition">papu-woooo</li>
        </ul>
      </div>
      <div>
        <h2 className="text-xl font-bold mb-4 text-gray-800">Support</h2>
        <ul className="space-y-2 cursor-pointer">
          <li className="hover:text-blue-500 transition">Help Center</li>
          <li className="hover:text-blue-500 transition">Contact Us</li>
          <li className="hover:text-blue-500 transition">FAQs</li>
        </ul>
      </div>
      <div>
        <h2 className="text-xl font-bold mb-4 text-gray-800">Follow Us</h2>
        <ul className="space-y-2 cursor-pointer">
          <li className="hover:text-blue-500 transition">Twitter</li>
          <li className="hover:text-blue-500 transition">LinkedIn</li>
          <li className="hover:text-blue-500 transition">Instagram</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
