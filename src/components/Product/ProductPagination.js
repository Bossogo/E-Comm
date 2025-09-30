import React from 'react'

function ProductPagination({ currentPage, totalPages, onPrev, onNext }) {
  return (
    <div className="flex justify-center items-center gap-4 mt-6">
        <button
          onClick={onPrev}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Prev
        </button>
        <span className="text-gray-700 font-medium">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={onNext}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
  )
}

export default ProductPagination