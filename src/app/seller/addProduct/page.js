"use client";
export const dynamic = "force-dynamic";

import React, { useState } from "react";
import { assets } from "@/assets/assets";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { jwtDecode } from "jwt-decode";

const categories = [
  "vegetables",
  "fruits",
  "drinks",
  "instant",
  "dairy",
  "bakery",
  "grains",
];

export default function Page() {
  const [preview, setPreview] = useState({
    img1: null,
    img2: null,
    img3: null,
    img4: null,
  });

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      sellerId: "",
      name: "",
      category: "",
      price: 0,
      offerPrice: 0,
      description: "",
      inStock: true,
    },
  });

  const dispatch = useDispatch();

  const onFileChange = (e, imgIndex) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setPreview((prev) => {
        if (imgIndex === 1) return { ...prev, img1: reader.result };
        if (imgIndex === 2) return { ...prev, img2: reader.result };
        if (imgIndex === 3) return { ...prev, img3: reader.result };
        if (imgIndex === 4) return { ...prev, img4: reader.result };
        return prev;
      });
    };
    reader.readAsDataURL(file);
  };

  const onSubmit = async (data) => {
    const { category, description, inStock, name, offerPrice, price } = data;

    // sellerId declared outside the guard so it doesn't create a render-time reference error
    let sellerId = null;

    // Only access sessionStorage in the browser
    if (typeof window !== "undefined") {
      try {
        const sellerToken = sessionStorage.getItem("accessToken");
        if (sellerToken) {
          const seller = jwtDecode(sellerToken);
          if (seller?.email) {
            // encode the email for safety
            const res1 = await fetch(
              `/api/users/${seller.email}`
            );
            if (res1.ok) {
              const data1 = await res1.json();
              sellerId = data1?.[0]?._id ?? null;
            } else {
              console.error("Failed fetching user by email", res1.status);
            }
          } else {
            console.warn("decoded token has no email");
          }
        } else {
          console.warn("no seller token in sessionStorage");
        }
      } catch (err) {
        console.error("Error decoding token or fetching user:", err);
      }
    }

    if (sellerId) {
      const changedData = {
        category,
        description: [description],
        inStock,
        name,
        offerPrice,
        price,
        sellerId,
        image: [
          preview.img1 || "",
          preview.img2 || "",
          preview.img3 || "",
          preview.img4 || "",
        ],
      };

      try {
        const res = await fetch("/api/products", {
          method: "POST",
          body: JSON.stringify(changedData),
          headers: { "Content-Type": "application/json" },
        });

        if (!res.ok) {
          console.error("Failed to add product", res.status);
        } else {
          reset();
        }
      } catch (err) {
        console.error("Network or server error posting product:", err);
      }
    } else {
      console.log("who are you seller?");
    }
  };

  return (
    <main className="md:w-1/2 w-full min-h-screen bg-white flex items-center justify-center p-2">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-2xl bg-white rounded-l"
      >
        {/* Product Images */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">Product Image</label>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((idx) => (
              <div key={idx} className="w-[138px] h-[81px] relative my-10">
                <img
                  className="absolute left-0 right-0 bottom-0 top-0"
                  src={preview[`img${idx}`] || assets.upload_area.src}
                  alt={`preview-${idx}`}
                />
                <input
                  {...register(`img${idx}`)}
                  className="w-full h-full opacity-0 absolute left-0 right-0 bottom-0 top-0"
                  type="file"
                  accept="image/*"
                  onChange={(e) => onFileChange(e, idx)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Name */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">Product Name</label>
          <input
            {...register("name", { required: "product name is required" })}
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
            {...register("description", {
              required: "description is required",
            })}
            placeholder="Type here"
            className="w-full border border-gray-300 rounded-md p-3 h-28 resize-none focus:outline-none"
          />
        </div>

        {/* Category */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">Category</label>
          <select
            {...register("category", { required: "category is required" })}
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none"
          >
            <option value="">Select Category</option>
            {categories.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        {/* Prices */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block font-semibold mb-2">Product Price</label>
            <input
              {...register("price", { required: "Product Price is required" })}
              type="number"
              placeholder="0"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none"
            />
          </div>
          <div>
            <label className="block font-semibold mb-2">Offer Price</label>
            <input
              {...register("offerPrice", {
                required: "Offer Price is required",
              })}
              type="number"
              placeholder="0"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-[#4fbf8b] text-white px-8 py-3 rounded-md font-semibold"
        >
          ADD
        </button>
      </form>
    </main>
  );
}
