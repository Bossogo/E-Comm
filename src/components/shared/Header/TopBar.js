import { FaUser, FaShoppingCart, FaSearch } from 'react-icons/fa';

export default function Topbar() {
  return (
    <div className="w-full bg-white text-xs sm:text-sm py-2 px-4 flex justify-between items-center">
      <div className="flex items-center space-x-3 sm:space-x-4">
        <select className="border border-gray-300 rounded-md p-1">
          <option value="en">EN</option>
          <option value="es">ES</option>
          <option value="fr">FR</option>
        </select>
        <select className="cursor-pointer border border-gray-300 rounded-md p-1">
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="gbp">GBP</option>
        </select>
      </div>

      <div className="flex items-center space-x-4 sm:space-x-6">
        <button className="hover:text-blue-500 hidden sm:flex items-center">
          <FaUser className="mr-1" />
          <span>My profile</span>
        </button>

        <div className="relative cursor-pointer">
          <FaShoppingCart className="text-lg" />
          <span className="absolute -top-1 -right-2 bg-red-500 text-white text-[10px] rounded-full px-1">
            0
          </span>
        </div>

        <span className="hidden sm:inline text-gray-600">$0.00</span>

        <button className="hover:text-blue-500">
          <FaSearch className="text-lg" />
        </button>
      </div>
    </div>
  );
}
