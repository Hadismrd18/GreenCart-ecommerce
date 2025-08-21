import React from "react";
import { assets } from "@/assets/assets";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
const Banner2 = () => {
  return (
    <div className="relative w-full">
      <div className="w-full flex items-center justify-center mt-32 relative">
        {/* desktop banner */}
        <img
          src={assets.bottom_banner_image.src}
          className="hidden md:block w-[80%]"
        />
        {/* mobile banner */}
        <img
          src={assets.bottom_banner_image_sm.src}
          className="md:hidden w-[80%]"
        />
        <div className="absolute max-md:left-[10%]  md:right-[20%] top-[5%] lg:top-[10%] flex flex-col items-start gap-3">
          <h1 className="font-semibold text-xl lg:text-3xl text-[#4fbf8b]">
            Why Are We the Best?
          </h1>
          <div className="flex flex-col items-start gap-2 lg:gap-3">
            <div className="flex items-center justify-start gap-3">
              <img className="max-lg:size-4" src={assets.delivery_truck_icon.src} />
              <div className="flex flex-col items-start text-gray-700">
                <span className="font-bold text-sm lg:text-xl">
                  Fastest Delivery
                </span>
                <span className="text-xs">
                  Groceries delivered in under 30 minutes.
                </span>
              </div>
            </div>
            <div className="flex items-center justify-start gap-3">
              <img className="max-lg:size-4" src={assets.leaf_icon.src} />
              <div className="flex flex-col items-start text-gray-700">
                <span className="font-bold text-sm lg:text-xl">
                  Freshness Guaranteed
                </span>
                <span className="text-xs">
                  Fresh produce straight from the source.
                </span>
              </div>
            </div>
            <div className="flex items-center justify-start gap-3">
              <img className="max-lg:size-4" src={assets.coin_icon.src} />
              <div className="flex flex-col items-start text-gray-700">
                <span className="font-bold text-sm lg:text-xl">
                  Affordable Prices
                </span>
                <span className="text-xs">
                  Quality groceries at unbeatable prices.
                </span>
              </div>
            </div>
            <div className="flex items-center justify-start gap-3">
              <img className="max-lg:size-4" src={assets.trust_icon.src} />
              <div className="flex flex-col items-start text-gray-700">
                <span className="font-bold text-sm lg:text-xl">
                  Trusted by Thousands
                </span>
                <span className="text-xs">
                  Loved by 10,000+ happy customers.
                </span>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      {/* mobile banner */}
    </div>
  );
};

export default Banner2;
