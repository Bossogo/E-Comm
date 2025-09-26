'use client';

import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

export default function MainNav() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ['HOME', 'BAGS', 'SNEAKERS', 'BELT', 'CONTACT'];

  return (
    <nav className="w-full bg-white py-4 px-6 flex justify-between items-center relative">
      <div className="flex items-center space-x-2">
        <img src="/images/icon.png" alt="E-Comm Logo" className="w-8 h-8" />
        <span className="text-xl font-bold font-poppins">E-comm</span>
      </div>

      <ul className="hidden md:flex space-x-8 font-medium">
        {menuItems.map((item) => (
          <li key={item} className="relative group cursor-pointer">
            <span className="transition-colors duration-300 group-hover:text-blue-500">
              {item}
            </span>
            <span className="absolute left-0 -bottom-1.5 w-0 h-[2px] bg-blue-500 transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </li>
        ))}
      </ul>

      <div
        className="md:hidden cursor-pointer text-3xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <HiX /> : <HiMenu />}
      </div>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden z-50">
          <ul className="flex flex-col items-center space-y-4 py-6 font-medium">
            {menuItems.map((item) => (
              <li
                key={item}
                className="relative group cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                <span className="transition-colors duration-300 group-hover:text-blue-500">
                  {item}
                </span>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
