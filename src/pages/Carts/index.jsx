import Navbar from "@/components/Navbar";
import React from "react";

function index() {
  return (
    <div className="px-10">
      <Navbar />
      <div className="mt-10">
        <h1 className="text-[1.62rem] font-bold border-b-4 border-black py-5">
          0 items in Cart
        </h1>
      </div>
      <h1 className="text-[3rem] font-bold text-center mt-20">
        EMPTY CART, AAACKKK
      </h1>
      <div className="flex justify-center mt-28">
        <button className="rounded-full uppercase  text-[16px] font-bold px-8 py-2 bg-black text-white hover:bg-white hover:text-black border-2 border-black">
          See all products
        </button>
      </div>
    </div>
  );
}

export default index;
