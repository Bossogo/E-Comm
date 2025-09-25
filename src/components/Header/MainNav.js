import React from 'react'

function MainNav() {
  return (
    <nav className="p-4 border-b border-gray-200 flex items-center justify-between">
        <h1 className="text-lg font-bold font-poppins">E-comm</h1>
        <ul className="flex space-x-4">
          <li className="text-gray-600 hover:text-gray-800 cursor-pointer">Home</li>
          <li className="text-gray-600 hover:text-gray-800 cursor-pointer">Bags</li>
          <li className="text-gray-600 hover:text-gray-800 cursor-pointer">Sneakers</li>
          <li className="text-gray-600 hover:text-gray-800 cursor-pointer">Belts</li>
          <li className="text-gray-600 hover:text-gray-800 cursor-pointer">Contact</li>
        </ul>
      </nav>
  )
}

export default MainNav