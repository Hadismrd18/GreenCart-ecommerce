"use client";
import React from "react";
import { usePathname } from "next/navigation";
import RelatedProducts from "@/components/RelatedProducts";

import { Button } from "@/components/ui/button";
import Link from "next/link";
function page() {
  const path = usePathname();
  const category = path.split("/")[2];
  return (
    <div className="px-10 lg:px-20 pt-20 flex flex-col items-center justify-center gap-3">
      <span className=" font-semibold pb-2 border-b-2 border-b-[#4fbf8b] text-2xl lg:text-4xl my-10">
        {category.toUpperCase()}
      </span>
      <RelatedProducts category={category} />
      <Link href="/" >
        {" "}
        <Button className="hover:text-gray-300 bg-[#4fbf8b] w-full  text-gray-800">
          Return to Homepage
        </Button>
      </Link>
    </div>
  );
}

export default page;
