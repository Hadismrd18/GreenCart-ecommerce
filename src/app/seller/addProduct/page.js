import { assets } from "@/assets/assets";
import React from "react";

const categories = [
  "vegetables",
  "fruits",
  "drinks",
  "instant",
  "dairy",
  "bakery",
  "grains",
];
function page() {
  return (
    <main className="md:w-1/2 w-full min-h-screen bg-white flex items-center justify-center p-2">
      <div className="w-full max-w-2xl bg-white rounded-l">
        {/* Product Images */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">Product Image</label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <img key={i} src={assets.upload_area.src} />
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
          <label className="block font-semibold mb-2">
            Product Description
          </label>
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
            {categories.map((item, index) => (
              <option key={index}>{item}</option>
            ))}
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
  );
}

export default page;
