'use client';

import { useState } from 'react';
import { useFilters } from '@/context/FiltersContext';
import { HiMenu, HiX } from 'react-icons/hi';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function MainNav() {
  const [isOpen, setIsOpen] = useState(false);
  const { setFilters } = useFilters();
  const router = useRouter();

  const menuItems = [
    {
      label: 'HOME',
      href: '/',
      dropdown: [
        { label: 'All Products', type: 'all' },
        { label: 'HOT DEAL', type: 'hot' },
        { label: 'Sunglasses', href: '/products?category=sunglasses' },
        { label: 'Belts', href: '/products?category=belts' },
        { label: 'Handbags', href: '/products?category=handbags' },
        { label: 'Sneakers', href: '/products?category=sneakers' },
      ],
    },
    { label: 'BAGS', href: '/products?category=bags' },
    { label: 'SNEAKERS', href: '/products?category=sneakers' },
    { label: 'BELT', href: '/products?category=belt' },
    { label: 'CONTACT', href: '/contact' },
  ];

  const handleAllProductsClick = (e) => {
    e.preventDefault();
    setFilters({
      hotOnly: false,
      brand: null,
      color: null,
      priceRange: [0, 200],
    });
    router.push('/products');
  };

  const handleHotDealsClick = (e) => {
    e.preventDefault();
    setFilters((prev) => ({ ...prev, hotOnly: true }));
    router.push('/products');
  };

  return (
    <nav className="w-full bg-white py-4 px-6 flex justify-between items-center relative">
      <Link href="/" className="flex items-center space-x-2">
        <img src="/images/icon.png" alt="E-Comm Logo" className="w-8 h-8" />
        <span className="text-xl font-bold font-poppins">E-comm</span>
      </Link>

      <ul className="hidden md:flex space-x-8 font-medium">
        {menuItems.map((item) => (
          <li key={item.label} className="relative group cursor-pointer">
            {item.href ? (
              <Link
                href={item.href}
                className="transition-colors duration-300 group-hover:text-blue-500"
              >
                {item.label}
              </Link>
            ) : (
              <span className="cursor-default">{item.label}</span>
            )}
            <span className="absolute left-0 -bottom-1.5 w-0 h-[2px] bg-blue-500 transition-all duration-300 ease-in-out group-hover:w-full"></span>

            {item.label === 'HOME' && item.dropdown && (
              <div
                className="absolute left-0 top-full mt-0 group-hover:block hidden
               bg-white shadow-lg p-6 rounded-lg z-40 min-w-[250px]"
              >
                <div className="grid grid-cols-1 gap-4">
                  {item.dropdown.map((sub) =>
                    sub.type === 'hot' ? (
                      <a
                        key={sub.label}
                        href="/products"
                        onClick={handleHotDealsClick}
                        className="block text-gray-700 hover:text-blue-500 transition-colors"
                      >
                        {sub.label}
                      </a>
                    ) : sub.type === 'all' ? (
                      <a
                        key={sub.label}
                        href="/products"
                        onClick={handleAllProductsClick}
                        className="block text-gray-700 hover:text-blue-500 transition-colors"
                      >
                        {sub.label}
                      </a>
                    ) : (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        className="block text-gray-700 hover:text-blue-500 transition-colors"
                      >
                        {sub.label}
                      </Link>
                    )
                  )}
                </div>
              </div>
            )}
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
                key={item.label}
                className="relative group w-full text-center"
              >
                {item.href ? (
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="transition-colors duration-300 group-hover:text-blue-500 block py-2"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="block py-2">{item.label}</span>
                )}

                {item.label === 'HOME' && item.dropdown && (
                  <ul className="flex flex-col space-y-2 bg-gray-50 py-2">
                    {item.dropdown.map((sub) =>
                      sub.type === 'hot' ? (
                        <li key={sub.label}>
                          <a
                            href="/products"
                            onClick={(e) => {
                              handleHotDealsClick(e);
                              setIsOpen(false);
                            }}
                            className="block py-1 text-sm text-gray-600 hover:text-blue-500"
                          >
                            {sub.label}
                          </a>
                        </li>
                      ) : sub.type === 'all' ? (
                        <li key={sub.label}>
                          <a
                            href="/products"
                            onClick={(e) => {
                              handleAllProductsClick(e);
                              setIsOpen(false);
                            }}
                            className="block py-1 text-sm text-gray-600 hover:text-blue-500"
                          >
                            {sub.label}
                          </a>
                        </li>
                      ) : (
                        <li key={sub.label}>
                          <Link
                            href={sub.href}
                            onClick={() => setIsOpen(false)}
                            className="block py-1 text-sm text-gray-600 hover:text-blue-500"
                          >
                            {sub.label}
                          </Link>
                        </li>
                      )
                    )}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
