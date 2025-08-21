import React from "react";
import { assets } from "@/assets/assets";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
const Banner = () => {
  return (
    <div className="relative w-full">
      <div className="w-full flex items-center justify-center mt-32 relative">
        {/* desktop banner */}
        <img src={assets.main_banner_bg.src} className="hidden md:block w-[80%]" />
        {/* mobile banner */}
        <img src={assets.main_banner_bg_sm.src} className="md:hidden w-[80%]" />
        <h1 className="px-3 text-gray-800 max-md:text-center w-[80%] md:w-[45%] xl:w-[30%] absolute left-[10%] md:left-[20%] top-[55%] md:top-[10%] bottom-[20%] text-2xl sm:text-3xl lg:text-5xl font-bold">
          Freshness You Can Trust, Savings You will Love!
        </h1>
        <div className="absolute left-[20%] bottom-10 flex items-center justify-center gap-3">
          <Link href="/products" className="w-full md:w-auto">
            <Button className="w-full md:w-auto group relative inline-flex items-center justify-center overflow-hidden rounded-md bg-[#4fbf8b] px-8 py-2.5 tracking-tighter text-white">
              <span className="absolute h-0 w-0 rounded-full bg-[#44ae7c] transition-all duration-500 ease-out group-hover:h-56 group-hover:w-56"></span>
              <span className="absolute bottom-0 left-0 -ml-2 h-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="object-stretch h-full w-auto opacity-100"
                  viewBox="0 0 487 487"
                >
                  <path
                    fillOpacity=".1"
                    fillRule="nonzero"
                    fill="#FFF"
                    d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"
                  ></path>
                </svg>
              </span>
              <span className="absolute top-0 right-0 -mr-3 h-full w-12">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-full w-full object-cover"
                  viewBox="0 0 487 487"
                >
                  <path
                    fillOpacity=".1"
                    fillRule="nonzero"
                    fill="#FFF"
                    d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"
                  ></path>
                </svg>
              </span>
              <span className="absolute inset-0 -mt-1 h-full w-full rounded-lg bg-gradient-to-b from-transparent via-transparent to-gray-200 opacity-30"></span>
              <span className="relative text-base font-semibold">
                Shop now!
              </span>
            </Button>
          </Link>
          <Link
            href="/deals"
            className="hidden relative gap-2 md:inline-flex items-center justify-center overflow-hidden rounded-md px-8 py-2.5 tracking-tighter "
          >
            <span className="relative text-base font-semibold">
              Explore Deals!
            </span>
            <FaArrowRight />
          </Link>
        </div>
      </div>
      {/* mobile banner */}
    </div>
  );
};

export default Banner;
