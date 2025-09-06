import Link from "next/link";
import React from "react";

function Category({ text, path, bgColor, image }) {

  return (
    <Link href={`/products/${path}`}>
      <div
        style={{ backgroundColor: bgColor }}
        className={` rounded-md flex flex-col items-center justify-center gap-3`}
      >
        <img src={image.src} alt={text} />
        <span>{text}</span>
      </div>
    </Link>
  );
}

export default Category;
