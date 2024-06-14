import Image from "next/image";
import React from "react";

function Cards({ image, title, txt, price }) {
  return (
    <div className="w-full">
      <Image
        src={image}
        alt=""
        width={0}
        height={0}
        className="w-full rounded-[35px]"
      />
      <div className="flex justify-between">
        <span>
          <h3 className="text-[22px] font-medium">{txt}</h3>
          <h1 className="text-[22px] font-bold">{title}</h1>
        </span>
        <p className="text-[22px] font-medium">{price}</p>
      </div>
    </div>
  );
}

export default Cards;
