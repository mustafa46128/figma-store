import AboutCustom1 from "@/components/AboutCustom1";
import Aboutprocced from "@/components/Aboutprocced";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SvgCutout from "@/components/SvgCutout";
import React from "react";

function index() {
  return (
    <div className="px-10">
      <Navbar />
      <div className="flex gap-10">
        <div className="w-1/2">
          <SvgCutout url={"/AD1A2554-3_1000x.webp"} />
        </div>
        <span className="w-1/2 py-52">
          <h1 className="text-[48px] font-bold">About</h1>
          <p className="text-[1.87rem] font-[400] leading-[1.3]">
            Welcome to the Figma Store, a collection of Figma apparel (layers)
            and accessories (components) designed for our community.
          </p>
        </span>
      </div>
      <Aboutprocced />
      <FAQ />
      <AboutCustom1 />
    </div>
  );
}

export default index;
