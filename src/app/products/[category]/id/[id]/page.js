"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { dummyProducts } from "@/assets/assets";
import { RiStarFill, RiStarLine } from "react-icons/ri";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import RelatedProducts from "@/components/RelatedProducts";
import { useSelector, useDispatch } from "react-redux";
import { FetchAllProducts } from "@/redux/slices/product.slice";
import { useRef } from "react";
function page() {
  const isFirstRun = useRef(true);
  const [item, setItem] = useState(null);
  // fetch all products
  const allProducts = useSelector((state) => state.product.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchAllProducts());
  }, [dispatch]);
  const path = usePathname();
  const pathArray = path.split("/");
  const category = pathArray[2];
  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return; // skip effect on initial mount
    }

    if (allProducts) {
      setItem(allProducts.find((item) => item._id === pathArray[4]));
      console.log(item);
      console.log(item?.image[0]);
      const name = item?.name;
    }
  }, [allProducts]);

  if (!allProducts && length(allProducts) === 0) {
    return <div>Loading...</div>;
  }
  return (
    <div className="pt-32 px-10 lg:px-20">
      <div>
        <h1>
          <Link href="/">Home</Link> / <Link href="/products">Products</Link> /{" "}
          <Link href={`/products/${category}`}>{category}</Link> /
          <Link href={`${path}`} className="text-[#4fbf8b] text-bold">
            {name}
          </Link>
        </h1>
        <div className="mt-10 flex flex-col lg:flex-row items-start lg:items-center gap-4 justify-between w-full">
          <div className="w-full lg:w-1/2 grid grid-cols-5 grid-rows-4 gap-4">
            {item?.image[1] ? (
              <img
                className="border-2 border-gray-200 rounded col-span-1 row-span-1"
                src={item?.image[1] || ""}
                alt="alt"
              />
            ) : (
              <div className="rounded col-span-1 row-span-1"></div>
            )}
            <img
              className="border-2 border-gray-200 rounded col-span-4 row-span-4"
              src={item?.image[0]}
              alt="alt"
            />
            {item?.image[2] ? (
              <img
                className="border-2 border-gray-200 rounded col-span-1 row-span-1"
                src={item?.image[2] || ""}
                alt="alt"
              />
            ) : (
              <div className="rounded col-span-1 row-span-1"></div>
            )}
            {item?.image[3] ? (
              <img
                className="border-2 border-gray-200 rounded col-span-1 row-span-1"
                src={item?.image[3] || ""}
                alt="alt"
              />
            ) : (
              <div className="rounded col-span-1 row-span-1"></div>
            )}
            {
              <img
                className="border-2 border-gray-200 rounded col-span-1 row-span-1"
                src={item?.image[0]}
                alt="alt"
              />
            }
          </div>
          <div className="h-full w-1/2 flex flex-col items-start gap-3 lg:gap-7 justify-start">
            <div>
              <h2>{item?.name}</h2>
              <div className="text-sm w-full md:text-lg flex items-center text-[#4fbf8b] justify-start gap-1">
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarLine />
                <span>(4)</span>
              </div>
            </div>
            <div className="flex flex-col items-start justify-center">
              <span className="line-through text-gray-500">
                MRP: {item?.price}
              </span>
              <span className="font-semibold text-xl">
                MRP: {item?.offerPrice}
              </span>
              <span className="text-gray-400">(inclusive of all taxes)</span>
            </div>
            <div className="flex flex-col items-start">
              <span className="font-semibold text-lg">About Product</span>
              <ul className="list-disc pl-5 text-sm">
                {item?.description.map((item, index) => (
                  <li className="text-gray-400" key={index}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between gap-3">
              <div className="w-[200px] flex flex-wrap items-center gap-2 md:flex-row">
                <Button className="hover:text-gray-300 w-full bg-gray-300 text-gray-800">
                  Add to cart
                </Button>
              </div>
              <div className="w-[200px] flex flex-wrap items-center gap-2 md:flex-row">
                <Button className="hover:text-gray-300 bg-[#4fbf8b] w-full  text-gray-800">
                  Buy now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* related products */}
      <div className="flex flex-col items-center justify-center gap-3">
        <span className="flex justify-center font-semibold pb-2 border-b-2 border-b-[#4fbf8b] text-2xl lg:text-4xl my-10 w-full">
          Related Products
        </span>
        <RelatedProducts category={category} />
        <Link
          href="/products"
          className="w-[200px] flex flex-wrap items-center gap-2 md:flex-row"
        >
          <Button className="hover:text-gray-300 w-full  bg-gray-300 text-gray-800">
            Show More Products
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default page;
