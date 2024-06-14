import Image from "next/image";
import React from "react";

function AboutCustom1() {
  return (
    <div className="mt-26 flex">
      <div className="w-1/2">
        <h1 className="text-[3rem] font-bold ">CUSTOMER CARE</h1>
        {/* <Image src={"/about.svg"} alt="" width={400} height={600} /> */}
      </div>
      <div className="w-1/2">
        <span className="flex items-center gap-3 ">
          <Image src={"/red-wave.png"} width={30} height={30} />
          <h2 className="text-[1.6rem] font-bold">Shipping</h2>
        </span>
        <p className="text-[1.25rem] font-medium leading-[1.4] mt-2">
          Once you’ve made a purchase, an e-mail confirmation will be sent to
          the e-mail address you provided. This e-mail acts as an invoice and
          includes your order number.{" "}
        </p>
        <p className="text-[1.2rem] font-medium leading-[1.4] mt-3">
          Once your order is placed, it’ll ship from our warehouse within 2-5
          business days. Orders placed after 11:00 AM(EST) may be processed the
          next business day, and orders placed on weekends and holidays will be
          processed the following business day starting at 8:00 AM(EST). During
          peak periods, processing times may exceed 2 business days.
        </p>
        <p className="text-[1.2rem] font-medium leading-[1.4] mt-4 ">
          Depending on your location, your order will be shipping from the
          United Kingdom, Ireland, or the United States. You will not need to
          pay customs on your orders. Once your order has been shipped, you will
          receive an e-mail with your shipment’s tracking information, allowing
          you to keep tabs on the progress of your delivery.
        </p>
        <span className="flex items-center gap-3 mt-14">
          <Image src={"/Group.png"} width={30} height={30} />
          <h1 className="text-[1.6rem] font-bold ">Returns</h1>
        </span>
        <p className="text-[1.25rem] font-medium leading-[1.4] mt-1 mb-10">
          We currently do not accept returns and are unable to edit your order
          once placed. If you would like to cancel your order and replace it
          with a new one before it has shipped, please connect with
          thefigmastore@harperandscott.com.
        </p>
        <span className="flex items-center gap-3">
          <Image src={"/Rectangle.png"} width={30} height={30} />
          <h2 className="text-[1.6rem] font-bold ">Contact Us</h2>
        </span>
        <p className="text-[1.25rem] font-medium leading-[1.4]">
          You can contact support by emailing <br />
          thefigmastore@harperandscott.com.{" "}
        </p>
      </div>
    </div>
  );
}

export default AboutCustom1;
