import React from "react";
import { dummyProducts } from "@/assets/assets";
export default function page() {
  const products = [
    { name: "Potato 500g", category: "Vegetables", price: 35, inStock: true },
    { name: "Tomato 1 kg", category: "Vegetables", price: 28, inStock: true },
    { name: "Carrot 500g", category: "Vegetables", price: 44, inStock: true },
    { name: "Spinach 500g", category: "Vegetables", price: 15, inStock: true },
    { name: "Onion 500g", category: "Vegetables", price: 45, inStock: true },
    { name: "Apple 1 kg", category: "Fruits", price: 90, inStock: true },
  ];

  return (
    <div className="flex flex-col items-start w-full">
      <h2 className="text-xl font-semibold mb-4 p-6">All Product</h2>
      <div className="w-full border-[1px] rounded-lg">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-lg shadow-sm">
            <thead>
              <tr className="text-left text-gray-600 border-b">
                <th className="p-4">Product</th>
                <th className="p-4">Category</th>
                <th className="p-4">Selling Price</th>
                <th className="p-4">In Stock</th>
              </tr>
            </thead>
            <tbody>
              {dummyProducts.map((product, idx) => (
                <tr key={idx} className="border-b hover:bg-gray-50 transition">
                  <td className="p-4 flex items-center gap-3">
                    {/* Gray placeholder instead of image */}
                    <img src={product.image[0].src} className="size-12"/>
                    <span className="text-gray-700">{product.name}</span>
                  </td>
                  <td className="p-4 text-gray-600">{product.category}</td>
                  <td className="p-4 text-gray-600">${product.price}</td>
                  <td className="p-4">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        defaultChecked={product.inStock}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
                    </label>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
