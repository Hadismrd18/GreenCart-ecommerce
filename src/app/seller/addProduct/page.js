"use client";
export const dynamic = "force-dynamic";
import { assets } from "@/assets/assets";
import { findCurrentUser } from "@/redux/slices/user.slice";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
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

function page() {
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
      description: [],
      inStock: true,
    },
  });

  // Called when file input changes (user selected a file)
  const onFileChange = (e, imgIndex) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      // reader.result is a data URL (base64)
      if (imgIndex === 1) {
        setPreview({ ...preview, img1: reader.result });
      } else if (imgIndex === 2) {
        setPreview({ ...preview, img2: reader.result });
      } else if (imgIndex === 3) {
        setPreview({ ...preview, img3: reader.result });
      } else if (imgIndex === 4) {
        setPreview({ ...preview, img4: reader.result });
      }
    };
    reader.readAsDataURL(file);
  };

  // find seller id:
  const dispatch = useDispatch();

  // submit data
  const onSubmit = async (data) => {
    const {
      category,
      description,
      img1,
      img2,
      img3,
      inStock,
      name,
      offerPrice,
      price,
    } = data;

    let sellerId; // declare outside

    if (typeof window !== "undefined") {
      const sellerToken = sessionStorage.getItem("accessToken");
      const seller = jwtDecode(sellerToken);
      console.log(seller);
      const res1 = await fetch(`/api/users/${seller.email}`);
      const data1 = await res1.json();
      console.log(data1);
      sellerId = data1[0]._id;
      console.log(sellerId);
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
      console.log(changedData);
      const res = await fetch("/api/products", {
        method: "POST",
        body: JSON.stringify(changedData),
      });
      reset();
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
          <div className="grid grid-cols-2 lg:grid-cols-4  gap-4">
            {/* image 1 */}
            <div className="w-[138px] h-[81px] relative my-10">
              <img
                className="absolute left-0 right-0 bottom-0 top-0"
                src={preview.img1 || assets.upload_area.src}
              />
              <input
                {...register(`img1`)}
                className="w-full h-full opacity-0 absolute left-0 right-0 bottom-0 top-0"
                type="file"
                accept="image/*"
                onChange={(e) => onFileChange(e, 1)}
              />
            </div>
            {/* img 2 */}
            <div className="w-[138px] h-[81px] relative my-10">
              <img
                className="absolute left-0 right-0 bottom-0 top-0"
                src={preview.img2 || assets.upload_area.src}
              />
              <input
                {...register(`img2`)}
                className="w-full h-full opacity-0 absolute left-0 right-0 bottom-0 top-0"
                type="file"
                accept="image/*"
                onChange={(e) => onFileChange(e, 2)}
              />
            </div>
            {/* img 3 */}
            <div className="w-[138px] h-[81px] relative my-10">
              <img
                className="absolute left-0 right-0 bottom-0 top-0"
                src={preview.img3 || assets.upload_area.src}
              />
              <input
                {...register(`img3`)}
                className="w-full h-full opacity-0 absolute left-0 right-0 bottom-0 top-0"
                type="file"
                accept="image/*"
                onChange={(e) => onFileChange(e, 3)}
              />
            </div>
            {/* img 4 */}
            <div className="w-[138px] h-[81px] relative my-10">
              <img
                className="absolute left-0 right-0 bottom-0 top-0"
                src={preview.img4 || assets.upload_area.src}
              />
              <input
                {...register(`img4`)}
                className="w-full h-full opacity-0 absolute left-0 right-0 bottom-0 top-0"
                type="file"
                accept="image/*"
                onChange={(e) => onFileChange(e, 4)}
              />
            </div>
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
        <button className="bg-[#4fbf8b] text-white px-8 py-3 rounded-md font-semibold">
          ADD
        </button>
      </form>
    </main>
  );
}

export default page;
