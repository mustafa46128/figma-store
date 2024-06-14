import Cards from "@/components/Cards";
import Cards1 from "@/components/Cards1";
import Cricle from "@/components/Circle";
import Footer from "@/components/Footer";

import SvgCutout1 from "@/components/Heroimage";

import {
  Comet,
  Hourglass,
  Snake,
  SymbolDots,
  SymbolSun,
  SymbolTri,
  Wordsymbol,
  Zag,
} from "@/components/Icons";

import Navbar from "@/components/Navbar";

import Wave from "@/components/Waves";
import Image from "next/image";
import React from "react";
import Heroimages2 from "@/components/Heroimages2";
import Shapertimer from "@/components/Shapetimer";
import Sliding from "@/components/Swiper";

const cards = [
  {
    image: "/image1.png",
    txt: "New!",
    title: "Design in Bloom T-shirts (Puff Ink)",
    price: "¥3,400",
  },
  {
    image: "/image2.png",
    txt: "New!",
    title: "Gridlock Washi Tape",
    price: "¥135",
  },
  {
    image: "/image5.png",
    txt: "New!",
    title: "Version History Coach Jacket",
    price: "¥6,200",
  },
  {
    image: "/image3.png",
    txt: "New!",
    title: "Best Buddy Pin",
    price: "¥270",
  },
];
const carddata = [
  {
    image: "/image1.png",
    txt: "New!",
    title: "Design in Bloom T-shirts (Puff Ink)",
    price: "¥3,400",
  },
  {
    image: "/image2.png",
    txt: "New!",
    title: "Gridlock Washi Tape",
    price: "¥135",
  },
  {
    image: "/image5.png",
    txt: "New!",
    title: "Version History Coach Jacket",
    price: "¥6,200",
  },
  {
    image: "/image3.png",
    txt: "New!",
    title: "Best Buddy Pin",
    price: "¥270",
  },
  {
    image: "/image1.png",
    txt: "New!",
    title: "Design in Bloom T-shirts (Puff Ink)",
    price: "¥3,400",
  },
  {
    image: "/image2.png",
    txt: "New!",
    title: "Gridlock Washi Tape",
    price: "¥135",
  },
  {
    image: "/image5.png",
    txt: "New!",
    title: "Version History Coach Jacket",
    price: "¥6,200",
  },
  {
    image: "/image3.png",
    txt: "New!",
    title: "Best Buddy Pin",
    price: "¥270",
  },
  {
    image: "/image1.png",
    txt: "New!",
    title: "Design in Bloom T-shirts (Puff Ink)",
    price: "¥3,400",
  },
  {
    image: "/image2.png",
    txt: "New!",
    title: "Gridlock Washi Tape",
    price: "¥135",
  },
  {
    image: "/image5.png",
    txt: "New!",
    title: "Version History Coach Jacket",
    price: "¥6,200",
  },
  {
    image: "/image3.png",
    txt: "New!",
    title: "Best Buddy Pin",
    price: "¥270",
  },
  {
    image: "/image1.png",
    txt: "New!",
    title: "Design in Bloom T-shirts (Puff Ink)",
    price: "¥3,400",
  },
  {
    image: "/image2.png",
    txt: "New!",
    title: "Gridlock Washi Tape",
    price: "¥135",
  },
  {
    image: "/image5.png",
    txt: "New!",
    title: "Version History Coach Jacket",
    price: "¥6,200",
  },
  {
    image: "/image3.png",
    txt: "New!",
    title: "Best Buddy Pin",
    price: "¥270",
  },
  {
    image: "/image1.png",
    txt: "New!",
    title: "Design in Bloom T-shirts (Puff Ink)",
    price: "¥3,400",
  },
  {
    image: "/image2.png",
    txt: "New!",
    title: "Gridlock Washi Tape",
    price: "¥135",
  },
  {
    image: "/image5.png",
    txt: "New!",
    title: "Version History Coach Jacket",
    price: "¥6,200",
  },
  {
    image: "/image3.png",
    txt: "New!",
    title: "Best Buddy Pin",
    price: "¥270",
  },
];

function index() {
  return (
    <>
      <div className="w-full">
        <Navbar />
        <div className=" bg-[#ffc700]">
          {/* <SvgCutout1 url="/image1.png" />
          <Heroimages2 url="image1.webp" />
          <Shapertimer url="image2.webp" />
          <Cricle url="/Cricle.webp" />
          <Wave url="/Wave.webp" /> */}
          <Sliding />
        </div>
        <div className="px-10">
          <div className="w-full flex flex-wrap justify-center">
            <h1 className="flex justify-center items-center text-[50px] font-bold  gap-x-5">
              FIGMA'S{" "}
              <span>
                <Wordsymbol />
              </span>{" "}
              COLLECTION{" "}
              <span>
                <Hourglass />
              </span>{" "}
              OF
            </h1>
            <h1 className="flex  justify-center items-center text-[50px] font-bold  gap-x-5">
              LAYERS{" "}
              <span>
                <Zag />
              </span>
              AND
              <span>
                <SymbolDots />
              </span>{" "}
              COMPONENTS{" "}
              <span>
                <SymbolSun />
              </span>{" "}
              FOR
            </h1>
            <h1 className="flex  justify-center items-center text-[50px] font-bold w-[910px] gap-x-5">
              YOU{" "}
              <span>
                <Comet />
              </span>{" "}
              AND
              <span>
                <Snake />
              </span>
              YOUR{" "}
              <span>
                <SymbolTri />
              </span>{" "}
              FRIENDS
            </h1>
          </div>
          <div className="grid grid-cols-4 gap-8 mt-10">
            {cards?.map((e, index) => (
              <Cards
                key={index}
                image={e?.image}
                price={e?.price}
                title={e?.title}
                txt={e?.txt}
              />
            ))}
          </div>
          <div className="w-full grid grid-cols-2 gap-5 mt-10">
            <div className="w-full gap-5">
              <div className="flex gap-8">
                <div className="">
                  <Cards
                    image={"/image3.png"}
                    price={"300"}
                    title={"Gridlock washi tape"}
                    txt={"NEW!"}
                  />
                </div>
                <div className="">
                  <Cards
                    image={"/image3.png"}
                    price={"Rs.7,100"}
                    title={"Design in bloom tee"}
                    txt={"New!"}
                  />
                </div>
              </div>
              <div className="mt-5">
                <Cards1
                  image={"/image3.png"}
                  price={"Rs.7,100"}
                  title={"On brand hat"}
                  txt={"New!"}
                />
              </div>
            </div>
            <div className="w-full">
              <div className="">
                <Cards1
                  image={"/image3.png"}
                  price={"Rs.5,700"}
                  title={"Shape up tee"}
                  txt={"New!"}
                />
              </div>
              <div className="flex gap-8 mt-5">
                <div className="">
                  <Cards
                    image={"/image3.png"}
                    price={"Rs.2,900"}
                    title={"Band together socks"}
                    txt={"New!"}
                  />
                </div>
                <div className="">
                  <Cards
                    image={"/image3.png"}
                    price={"Rs.5,700"}
                    title={"Dress code hat"}
                    txt={"New!"}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-8 mt-10">
            {cards?.map((e, index) => (
              <Cards
                key={index}
                image={e?.image}
                price={e?.price}
                title={e?.title}
                txt={e?.txt}
              />
            ))}
          </div>
          <div className="w-full grid grid-cols-2 gap-5 mt-10">
            <div className="w-full gap-5">
              <div className="flex gap-8">
                <div className="">
                  <Cards
                    image={"/image3.png"}
                    price={"Rs.600"}
                    title={"Power points pin"}
                    txt={"New!"}
                  />
                </div>
                <div className="">
                  <Cards
                    image={"/image3.png"}
                    price={"Rs.5,700"}
                    title={"Framework tee"}
                    txt={"New!"}
                  />
                </div>
              </div>
              <div className="mt-5">
                <Cards1
                  image={"/image3.png"}
                  price={"Rs.5,700"}
                  title={"Rainbow logo tee"}
                />
              </div>
            </div>
            <div className="w-full">
              <div className="mb-12">
                <Cards1
                  image={"/image3.png"}
                  price={"Rs.2,900"}
                  title={"Comments notebook"}
                />
              </div>
              <div className="flex gap-8">
                <div className="">
                  <Cards
                    image={"/image3.png"}
                    price={"Rs.5,700"}
                    title={"Figma logo hat"}
                  />
                </div>
                <div className="">
                  <Cards
                    image={"/image3.png"}
                    price={"Rs.600"}
                    title={"Multicursor pin"}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-8 mt-10">
            {carddata?.map((e, index) => (
              <Cards
                key={index}
                image={e?.image}
                price={e?.price}
                title={e?.title}
                txt={e?.txt}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default index;
