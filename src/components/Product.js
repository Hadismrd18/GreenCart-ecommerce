"use client";
import React, { useState } from "react";
import { RiStarFill } from "react-icons/ri";
import { RiStarLine } from "react-icons/ri";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { assets } from "@/assets/assets";
import { useDispatch, useSelector } from "react-redux";
import { FetchAllProducts } from "@/redux/slices/product.slice";
import { addItemToCart } from "@/redux/slices/cart.slice";
function Product({
  src,
  text,
  category,
  price,
  offerPrice,
  productId,
  sellerId,
}) {
  console.log(productId, sellerId);
  const [count, setCount] = useState(0);

  const allProducts = useSelector((state) => state.product.data);
  const dispatch = useDispatch();
  const changeOrderCount = async (e, productId, sellerId) => {
    console.log(e);
    console.log(e.target.innerText, productId, sellerId);
    if (e.target.innerText === "-") {
      setCount(count - 1);
    } else {
      setCount(count + 1);
    }
    dispatch(FetchAllProducts());
    console.log(productId);
    console.log(allProducts);
    const currentItem = allProducts?.find((item) => item._id === productId);
    console.log(currentItem);
    dispatch(
      addItemToCart({
        sellerId,
        productDetails: { data: currentItem, quantity: count },
      })
    );
  };
  const cartItems = useSelector((state) => state.cart);
  return (
    <div>
      <div className="py-3 flex flex-col items-center justify-center gap-3 rounded border-2 p-2 border-gray-100">
        <Link
          className="w-full flex items-center justify-center"
          href={`/products/${category}/id/${productId}`}
        >
          {" "}
          <img src={src} className="w-[70%] hover:scale-105" />
        </Link>
        <span className="w-full text-start text-gray-400">{category}</span>
        <span className="w-full text-start font-semibold">{text}</span>
        <div className="text-sm w-full md:text-lg flex items-center justify-start gap-1">
          <RiStarFill />
          <RiStarFill />
          <RiStarFill />
          <RiStarFill />
          <RiStarLine />
          <span>(4)</span>
        </div>
        <div className="w-full flex items-center justify-between">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-1.5">
            <span className="font-bold text-[#4fbf8b]">{offerPrice}$</span>
            <span className="line-through text-gray-600">{price}$</span>
          </div>

          {count === 0 ? (
            <>
              <button
                onClick={(e) => changeOrderCount(e, productId, sellerId)}
                className="hover:cursor-pointer hover:bg-[#4fbf8b] hover:text-[#d1f3e3]  flex items-center justify-center gap-1 bg-[#4fbf8b21] rounded p-1 border-[1px] border-[#4fbf8b] text-[#4fbf8b]"
              >
                <img src={assets.cart_icon.src} />
                Add{" "}
              </button>
            </>
          ) : (
            <div className="hover:cursor-pointer   flex items-center justify-center gap-1 bg-[#4fbf8b21] rounded p-1 border-[1px] border-[#4fbf8b] text-[#4fbf8b]">
              <button
                className="w-5 rounded hover:bg-[#4fbf8b] hover:text-[#d1f3e3]"
                onClick={(e) => changeOrderCount(e, productId, sellerId)}
              >
                -
              </button>
              <span>{count}</span>
              <button
                className="w-5 rounded hover:bg-[#4fbf8b] hover:text-[#d1f3e3]"
                onClick={(e) => changeOrderCount(e, productId, sellerId)}
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Product;
