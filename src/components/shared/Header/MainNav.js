'use client';

import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import Link from 'next/link';

export default function MainNav() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'HOME', href: '/' },
    { label: 'BAGS', href: '/bags' },
    { label: 'SNEAKERS', href: '/sneakers' },
    { label: 'BELT', href: '/belt' },
    { label: 'CONTACT', href: '/contact' },
  ];

  return (
    <nav className="w-full bg-white py-4 px-6 flex justify-between items-center relative">
      {/* Logo */}
      <Link href="/" className="flex items-center space-x-2">
        <img src="/images/icon.png" alt="E-Comm Logo" className="w-8 h-8" />
        <span className="text-xl font-bold font-poppins">E-comm</span>
      </Link>

      <ul className="hidden md:flex space-x-8 font-medium">
        {menuItems.map((item) => (
          <li key={item.label} className="relative group cursor-pointer">
            <Link
              href={item.href}
              className="transition-colors duration-300 group-hover:text-blue-500"
            >
              {item.label}
            </Link>
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
              <li key={item.label} className="relative group">
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="transition-colors duration-300 group-hover:text-blue-500"
                >
                  {item.label}
                </Link>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
