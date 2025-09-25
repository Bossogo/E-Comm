import React from 'react'

function TopBar() {
  return (
    <nav className="bg-gray-50 border-b border-gray-200 px-4 py-2">
      <div className="flex justify-end items-center space-x-4">
        <select className="text-sm border-none bg-transparent">
          <option>EN</option>
          <option>ES</option>
          <option>FR</option>
        </select>
        
        <button className="text-sm text-gray-600 hover:text-gray-800">
          Account
        </button>
        
        <button className="text-sm text-gray-600 hover:text-gray-800 relative">
          Cart (0)
        </button>
      </div>
    </nav>
  )
}

export default TopBar