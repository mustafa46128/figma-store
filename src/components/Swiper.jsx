import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import "swiper/css/pagination";
import "swiper/css";

// import required modules

import SvgCutout1 from "./Heroimage";
import Heroimages2 from "./Heroimages2";
import Wave from "./Waves";
import Cricle from "./Circle";
import Shapertimer from "./Shapetimer";

function Sliding() {
  return (
    <div className="">
      <Swiper slidesPerView={2} slidesPerGroup={2}>
        <SwiperSlide>
          <SvgCutout1 url="/image1.png" />
        </SwiperSlide>
        <SwiperSlide>
          <Heroimages2 url="image1.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <Shapertimer url="image2.webp" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Cricle url="/Cricle.webp" />
        </SwiperSlide>

        <SwiperSlide>
          <Wave url="/Wave.webp" />{" "}
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Sliding;
