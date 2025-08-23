import React from 'react'

function page() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white rounded-l p-6">
        {/* Product Images */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">Product Image</label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="bg-gray-200 border border-dashed border-gray-400 rounded-lg h-24 flex items-center justify-center text-sm text-gray-500"
              >
                Upload
              </div>
            ))}
          </div>
        </div>

        {/* Product Name */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">Product Name</label>
          <input
            type="text"
            placeholder="Type here"
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none"
          />
        </div>

        {/* Product Description */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">Product Description</label>
          <textarea
            placeholder="Type here"
            className="w-full border border-gray-300 rounded-md p-3 h-28 resize-none focus:outline-none"
          />
        </div>

        {/* Category */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">Category</label>
          <select className="w-full border border-gray-300 rounded-md p-3 focus:outline-none">
            <option>Select Category</option>
          </select>
        </div>

        {/* Prices */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block font-semibold mb-2">Product Price</label>
            <input
              type="number"
              placeholder="0"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none"
            />
          </div>
          <div>
            <label className="block font-semibold mb-2">Offer Price</label>
            <input
              type="number"
              placeholder="0"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button className="bg-[#4fbf8b] text-white px-8 py-3 rounded-md font-semibold">
          ADD
        </button>
      </div>
    </main>
  )
}

export default page