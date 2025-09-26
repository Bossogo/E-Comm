import { HiOutlineSquares2X2, HiOutlineBars3 } from 'react-icons/hi2';

export default function ProductToolbar({
  totalItems,
  view,
  setView,
  showCount,
  setShowCount,
  sortBy,
  setSortBy,
}) {

  return (
    <div className="flex flex-col md:flex-row items-center justify-between mt-6 mb-6 gap-4">
      <div className="text-gray-700 font-medium">{totalItems} items</div>

      <div className="flex items-center gap-4">
        <div>
          <label className="mr-2 font-medium text-gray-700">Sort by:</label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border border-gray-300 rounded px-2 py-1"
          >
            <option value="default">Default</option>
            <option value="price-low-high">Price: Low to High</option>
            <option value="price-high-low">Price: High to Low</option>
            <option value="rating">Rating</option>
            <option value="newest">Newest</option>
          </select>
        </div>

        <div>
          <label className="mr-2 font-medium text-gray-700">Show:</label>
          <select
            value={showCount}
            onChange={(e) => setShowCount(Number(e.target.value))}
            className="border border-gray-300 rounded px-2 py-1"
          >
            <option value={3}>3</option>
            <option value={6}>6</option>
            <option value={9}>9</option>
            <option value={12}>12</option>
            <option value={15}>15</option>
          </select>
        </div>
      </div>

      <div className="ml-auto flex items-center gap-2">
        <button
          onClick={() => setView('grid')}
          className={`p-2 rounded border ${
            view === 'grid' ? 'bg-blue-500 text-white' : 'border-gray-300'
          }`}
        >
          <HiOutlineSquares2X2 className="w-5 h-5" />
        </button>

        <button
          onClick={() => setView('list')}
          className={`p-2 rounded border ${
            view === 'list' ? 'bg-blue-500 text-white' : 'border-gray-300'
          }`}
        >
          <HiOutlineBars3 className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}