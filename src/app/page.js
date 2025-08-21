import Image from "next/image";
import styles from "./page.module.css";
import Header2 from "@/components/Header";
import Banner from "@/components/Banner";
import Category from "@/components/Category";
import { categories, assets } from "../assets/assets";
import Product from "@/components/Product";
import Banner2 from "@/components/Banner2";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Footer4Col from "@/components/Footer";
import { dummyProducts } from "../assets/assets";
export default function Home() {
  const bestSellers = dummyProducts.splice(0, 5);
  console.log(bestSellers);
  return (
    <div className="flex flex-col items-center gap-16">
      <Banner />
      {/* categories */}
      <div className="w-[80%]">
        <h1 className="text-start font-semibold mb-4 text-2xl">Categories</h1>
        <div className="w-full gap-5 grid grid-cols-1 sm:grid-cols-2 grid-rows-4 md:grid-cols-5 md:grid-rows-2 lg:grid-cols-7 lg:grid-rows-1">
          {categories.map((item, index) => (
            <Category
              key={index}
              path={item.path}
              image={item.image}
              bgColor={item.bgColor}
              text={item.text}
            />
          ))}
        </div>
      </div>
      {/* best sellers */}
      <div className="w-[80%]">
        <h1 className="text-start font-semibold mb-4 text-2xl">Best sellers</h1>
        <div className="w-full gap-5 grid grid-cols-1 sm:grid-cols-2 grid-rows-3 md:grid-cols-4 md:grid-rows-2 lg:grid-cols-5 lg:grid-rows-1">
          {bestSellers.map((item, index) => (
            <Product
              key={index}
              id={item._id}
              offerPrice={item.offerPrice}
              src={item.image[0].src}
              text={item.name}
              category={item.category}
              price={item.price}
            />
          ))}
        </div>
      </div>
      {/* bottom banner */}
      <Banner2 />
      {/* never miss a deal */}
      <div className="w-full flex flex-col items-center gap-10 px-3 ">
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-2xl lg:text-5xl text-center font-semibold text-gray-700">
            Never Miss a Deal!
          </h1>
          <span className="text-sm text-center text-gray-500">
            Subscribe to get the latest offers, new arrivals, and exclusive
            discounts
          </span>
        </div>
        <div className="flex w-full max-w-sm items-center justify-between gap-2">
          <Input type="email" placeholder="Email" />
          <Button type="submit" variant="outline" className="bg-[#4fbf8b]">
            Subscribe
          </Button>
        </div>
      </div>
      {/* footer */}
    </div>
  );
}
