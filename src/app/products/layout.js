// 'use client';

// import Header from '@/components/shared/Header';
// import { products } from '../data/products';
// import { FiltersProvider, useFilters } from '@/context/FiltersContext';
// import { useRouter } from 'next/navigation';

// function Sidebar() {
//   const { filters, setFilters } = useFilters();
//   const router = useRouter();

//   const colors = [
//     { name: 'Black', color: 'bg-black', count: 12 },
//     { name: 'Red', color: 'bg-red-500', count: 7 },
//     { name: 'Blue', color: 'bg-blue-500', count: 9 },
//     { name: 'Green', color: 'bg-green-500', count: 4 },
//   ];

//   const hotDeals = [
//     { name: 'Nike', count: 99 },
//     { name: 'Airmax', count: 48 },
//     { name: 'Adidas', count: 15 },
//     { name: 'Vans', count: 23 },
//     { name: 'All Stars', count: 1 },
//   ];

//   const brands = [
//     { name: 'Nike', count: 99 },
//     { name: 'Adidas', count: 88 },
//     { name: 'Siemens', count: 12 },
//   ];
//   const brandCounts = products.reduce((acc, p) => {
//     acc[p.brand] = (acc[p.brand] || 0) + 1;
//     return acc;
//   }, {});

//   const colorCounts = products.reduce((acc, p) => {
//     acc[p.color] = (acc[p.color] || 0) + 1;
//     return acc;
//   }, {});

//   const handleClearFilters = () => {
//     setFilters({
//       hotDeal: null,
//       brand: null,
//       color: null,
//       priceRange: [0, 200],
//     });
//     router.push('/products');
//   };

//   return (
//     <aside className="w-64 bg-white p-6 border-r border-gray-200 overflow-y-auto flex flex-col">
//       <div className="mb-6">
//         <h2 className="text-xl font-semibold mb-4">Hot Deals</h2>
//         <ul className="space-y-1">
//           <li
//             onClick={() => setFilters({ ...filters, hotDeal: true })}
//             className={`flex justify-between cursor-pointer hover:text-blue-500 ${
//               filters.hotDeal ? 'text-blue-600 font-semibold' : ''
//             }`}
//           >
//             <span>Hot Deals</span>
//             <span className="text-gray-500">
//               {products.filter((p) => p.isHot).length}
//             </span>
//           </li>
//         </ul>
//       </div>

//       <div className="mb-6">
//         <h2 className="text-xl font-semibold mb-2">Prices</h2>
//         <div className="flex justify-between text-gray-700 text-sm mb-2">
//           <span>${filters.priceRange[0].toFixed(2)}</span>
//           <span>${filters.priceRange[1].toFixed(2)}</span>
//         </div>
//         <input
//           type="range"
//           min={0}
//           max={200}
//           value={filters.priceRange[1]}
//           onChange={(e) =>
//             setFilters({
//               ...filters,
//               priceRange: [filters.priceRange[0], Number(e.target.value)],
//             })
//           }
//           className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
//         />
//       </div>

//       <div className="mb-6">
//         <h2 className="text-xl font-semibold mb-2">Color</h2>
//         <div className="flex flex-wrap gap-2">
//           {Object.entries(colorCounts).map(([color, count]) => (
//             <div
//               key={color}
//               onClick={() => setFilters({ ...filters, color })}
//               className={`flex items-center gap-2 cursor-pointer hover:scale-105 transition ${
//                 filters.color === color ? 'ring-2 ring-blue-500 rounded' : ''
//               }`}
//             >
//               <span
//                 className="w-6 h-6 rounded-full border border-gray-300"
//                 style={{ backgroundColor: color.toLowerCase() }}
//                 title={color}
//               ></span>
//               <span className="text-gray-500 text-sm">{count}</span>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="mb-6">
//         <h2 className="text-xl font-semibold mb-2">Brand</h2>
//         <ul className="space-y-1">
//           {Object.entries(brandCounts).map(([brand, count]) => (
//             <li
//               key={brand}
//               onClick={() => setFilters({ ...filters, brand })}
//               className={`flex justify-between cursor-pointer hover:text-blue-500 ${
//                 filters.brand === brand ? 'text-blue-600 font-semibold' : ''
//               }`}
//             >
//               <span>{brand}</span>
//               <span className="text-gray-500">{count}</span>
//             </li>
//           ))}
//         </ul>
//       </div>

//       <button
//         onClick={handleClearFilters}
//         className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded transition"
//       >
//         Clear Filters
//       </button>
//     </aside>
//   );
// }

// export default function AppLayout({ children }) {
//   return (
//     <FiltersProvider>
//       <Header />
//       <div className="min-h-screen bg-gray-50 flex">
//         <Sidebar />
//         <main className="flex-1 p-6">{children}</main>
//       </div>
//     </FiltersProvider>
//   );
// }

'use client';

import { useState } from 'react';
import Header from '@/components/shared/Header';
import { products } from '../data/products';
import { FiltersProvider, useFilters } from '@/context/FiltersContext';
import { useRouter } from 'next/navigation';

function Sidebar() {
  const { filters, setFilters } = useFilters();
  const router = useRouter();

  const brandCounts = products.reduce((acc, p) => {
    acc[p.brand] = (acc[p.brand] || 0) + 1;
    return acc;
  }, {});

  const colorCounts = products.reduce((acc, p) => {
    acc[p.color] = (acc[p.color] || 0) + 1;
    return acc;
  }, {});

  const handleClearFilters = () => {
    setFilters({
      hotDeal: null,
      brand: null,
      color: null,
      priceRange: [0, 200],
    });
    router.push('/products');
  };

  return (
    <aside className="flex flex-col p-6 w-64 md:w-64 bg-white border-r border-gray-200 overflow-y-auto">
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Hot Deals</h2>
        <ul className="space-y-1">
          <li
            onClick={() => setFilters({ ...filters, hotDeal: true })}
            className={`flex justify-between cursor-pointer hover:text-blue-500 ${
              filters.hotDeal ? 'text-blue-600 font-semibold' : ''
            }`}
          >
            <span>Hot Deals</span>
            <span className="text-gray-500">
              {products.filter((p) => p.isHot).length}
            </span>
          </li>
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Prices</h2>
        <div className="flex justify-between text-gray-700 text-sm mb-2">
          <span>${filters.priceRange[0].toFixed(2)}</span>
          <span>${filters.priceRange[1].toFixed(2)}</span>
        </div>
        <input
          type="range"
          min={0}
          max={200}
          value={filters.priceRange[1]}
          onChange={(e) =>
            setFilters({
              ...filters,
              priceRange: [filters.priceRange[0], Number(e.target.value)],
            })
          }
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
        />
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Color</h2>
        <div className="flex flex-wrap gap-2">
          {Object.entries(colorCounts).map(([color, count]) => (
            <div
              key={color}
              onClick={() => setFilters({ ...filters, color })}
              className={`flex items-center gap-2 cursor-pointer hover:scale-105 transition ${
                filters.color === color ? 'ring-2 ring-blue-500 rounded' : ''
              }`}
            >
              <span
                className="w-6 h-6 rounded-full border border-gray-300"
                style={{ backgroundColor: color.toLowerCase() }}
                title={color}
              ></span>
              <span className="text-gray-500 text-sm">{count}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Brand</h2>
        <ul className="space-y-1">
          {Object.entries(brandCounts).map(([brand, count]) => (
            <li
              key={brand}
              onClick={() => setFilters({ ...filters, brand })}
              className={`flex justify-between cursor-pointer hover:text-blue-500 ${
                filters.brand === brand ? 'text-blue-600 font-semibold' : ''
              }`}
            >
              <span>{brand}</span>
              <span className="text-gray-500">{count}</span>
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={handleClearFilters}
        className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded transition"
      >
        Clear Filters
      </button>
    </aside>
  );
}

export default function AppLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <FiltersProvider>
      <Header onMenuClick={() => setSidebarOpen(true)} />
      <div className="flex min-h-screen bg-gray-50">
        <div
          className={`fixed inset-0 z-50 transform transition-transform duration-300 md:relative md:translate-x-0 ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <Sidebar />
          <button
            onClick={() => setSidebarOpen(false)}
            className="absolute top-4 right-4 md:hidden text-gray-700 font-bold"
          >
            ✕
          </button>
        </div>

        <main className="flex-1 p-4 md:p-6">{children}</main>
      </div>
    </FiltersProvider>
  );
}
