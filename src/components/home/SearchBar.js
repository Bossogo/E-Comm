export default function SearchBar() {
  return (
    <div className="w-full flex justify-center py-8">
      <div className="flex w-full max-w-md">
        <input
          type="text"
          placeholder="Search query..."
          className="flex-grow px-4 py-2 border border-blue-500 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="px-6 bg-blue-500 text-white font-semibold rounded-r-md hover:bg-blue-600 transition">
          Search
        </button>
      </div>
    </div>
  );
}
