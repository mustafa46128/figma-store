import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <div className="w-full">
      <Image
        src={".images/image.svg"}
        alt=""
        width={0}
        height={0}
        className="w-full h-full"
      />
      <p>Hello</p>
      <Image src={"/image2.svg"} width={100} height={100} />
    </div>
  );
}

export default Hero;
