'use client';

import { useState } from 'react';

export default function AppLayout({ children }) {
  const [priceRange, setPriceRange] = useState([13.99, 25.99]);
  const colors = [
    { name: 'Black', color: 'bg-black', count: 12 },
    { name: 'Red', color: 'bg-red-500', count: 7 },
    { name: 'Blue', color: 'bg-blue-500', count: 9 },
    { name: 'Green', color: 'bg-green-500', count: 4 },
  ];

  const hotDeals = [
    { name: 'Nike', count: 99 },
    { name: 'Airmax', count: 48 },
    { name: 'Nike', count: 14 },
    { name: 'Adidas', count: 15 },
    { name: 'Vans', count: 23 },
    { name: 'All Stars', count: 1 },
    { name: 'Adidas', count: 95 },
  ];

  const brands = [
    { name: 'Nike', count: 99 },
    { name: 'Nike', count: 99 },
    { name: 'Adidas', count: 99 },
    { name: 'Siemens', count: 99 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <aside className="w-64 bg-white p-6 border-r border-gray-200 overflow-y-auto">
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Hot Deals</h2>
          <ul className="space-y-1">
            {hotDeals.map((item, idx) => (
              <li
                key={idx}
                className="flex justify-between cursor-pointer hover:text-blue-500"
              >
                <span>{item.name}</span>
                <span className="text-gray-500">{item.count}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Prices</h2>
          <div className="flex justify-between text-gray-700 text-sm mb-2">
            <span>${priceRange[0].toFixed(2)}</span>
            <span>${priceRange[1].toFixed(2)}</span>
          </div>
          <input
            type="range"
            min={0}
            max={100}
            value={priceRange[1]}
            onChange={(e) =>
              setPriceRange([priceRange[0], Number(e.target.value)])
            }
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
          />
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Color</h2>
          <div className="flex flex-wrap gap-2">
            {colors.map((c, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 cursor-pointer hover:scale-105 transition"
              >
                <span
                  className={`w-6 h-6 rounded-full ${c.color} border border-gray-300`}
                  title={c.name}
                ></span>
                <span className="text-gray-500 text-sm">{c.count}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Brand</h2>
          <ul className="space-y-1">
            {brands.map((b, idx) => (
              <li
                key={idx}
                className="flex justify-between cursor-pointer hover:text-blue-500"
              >
                <span>{b.name}</span>
                <span className="text-gray-500">{b.count}</span>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
