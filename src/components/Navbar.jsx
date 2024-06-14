import Image from "next/image";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";

function Navbar() {
  const [open, setOpen] = useState(false);

  const handleclcik = () => {
    setOpen(!open);
  };
  return (
    <div className="flex mt-4 justify-between px-10">
      <ul className=" flex gap-3 items-center ">
        <li className="border-2 border-black rounded-[30px] text-[14px] font-bold leading-[14px] px-5 py-2 cursor-pointer hover:bg-black hover:text-white">
          SHOP
        </li>
        <li className="border-2 border-black rounded-[30px] text-[14px] font-bold leading-[14px] px-5 py-2 cursor-pointer hover:bg-black hover:text-white">
          ABOUT
        </li>
        <li className="flex justify-center items-center">
          <FaSearch />
        </li>
      </ul>
      <div className=" flex justify-center text-center ">
        <Image
          src={"/logo-full.static.svg"}
          width={200}
          height={100}
          className="cursor-pointer"
        />
      </div>
      <div className="flex gap-4 justify-center items-center">
        <div
          className="border-2 border-black rounded-[30px] text-[14px] font-bold cursor-pointer flex justify-center items-center gap-8 px-4 py-1 relative  hover:bg-black hover:text-white"
          onClick={handleclcik}
        >
          UNITED STATES
          <span className="text-[30px]">
            <RiArrowDropDownLine />
          </span>
          {open && (
            <div className="bg-black w-full h-32 absolute top-10 right-0">
              <ul className="px-3 ">
                <li className="text-[14px] text-white ">CANDA</li>
                <li className="text-[14px] text-white ">JAPAN</li>
                <li className="text-[14px] text-white ">UNITED KINDOM</li>
                <li className="text-[14px] text-white ">UNITED STATE</li>
                <li className="text-[14px] text-white ">EUROPEAN UNION</li>
                <li className="text-[14px] text-white ">I'M JUST BROWSING</li>
              </ul>
            </div>
          )}
        </div>
        <ul>
          <li className="border-2 border-black rounded-[30px] text-[14px] font-bold leading-[14px] px-5 py-2 cursor-pointer hover:bg-black hover:text-white ">
            CART 0
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
