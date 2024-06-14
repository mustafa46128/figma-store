import Image from "next/image";
import React from "react";

function FAQ() {
  return (
    <div className="mt-20  flex mb-16">
      <div className="w-1/2">
        <h1 className="text-[3rem] font-bold">FAQ</h1>
      </div>
      <div className="w-1/2 ">
        <span className="flex items-center gap-3">
          <Image src={"/Rectangle.png"} width={30} height={30} />
          <h2 className="text-[1.6rem] font-bold">
            How does your apparel fit?
          </h2>
        </span>

        <p className="text-[1.25rem] font-medium leading-[1.4] mb-14">
          Our sizing is unisex. For a more tailored fit, we recommend that you
          size down.{" "}
        </p>
        <span className="flex items-center gap-3">
          <Image src={"/Rectangle1.png"} width={30} height={30} />
          <h2 className="text-[1.6rem] font-bold">Where do you ship?</h2>
        </span>
        <p className="text-[1.25rem] font-medium">
          We currently ship to all countries except the following:
        </p>
        <ul className="font-medium text-[20px] leading-[1.4] mt-4 mb-4">
          <li>Afghanistan</li>
          <li>Albania</li>
          <li>Andorra</li>
          <li>Angola</li>
          <li>Angola</li>
          <li>Benin</li>
          <li>Bhutan</li>
          <li>British Indian Ocean Terr.</li>
          <li>Brunei</li>
          <li>Central African Republic</li>
          <li>Chad</li>
          <li>Christmas Islands</li>
          <li>Cocos (Keeling) Islds</li>
          <li>Congo – Kinshasa</li>
          <li>Cook Islands</li>
          <li>Cuba</li>
          <li>Curaçao</li>
          <li>Falkland Islands</li>
          <li>Fiji</li>
          <li>French Southern Territories</li>
          <li>Georgia</li>
          <li>Greenland</li>
          <li>Heard Island and McDonald Islands</li>
          <li>Honduras</li>
          <li>Iceland</li>
          <li>Iran</li>
          <li>Libya</li>
          <li>Mayotte</li>
        </ul>
        <p className="text-[1.25rem] font-medium leading-[1.4]">
          We'll be working with our vendors to expand warehousing and shipping
          operations so that we can bring The Figma Store to more countries in
          the future. Stay tuned for updates and thank you for your
          understanding!
        </p>
        <span className="flex gap-3 items-center mt-16">
          <Image src={"/Union.png"} width={30} height={30} />
          <h2 className="text-[1.6rem] font-bold">When will I get my order?</h2>
        </span>
        <p className="text-[1.25rem] font-medium leading-[1.4] mt-2">
          Your order will ship within 10 business days. You’ll get an e-mail
          with the tracking info to follow it along the way. Shipping timelines
          will vary based on location, but you can expect your order to arrive
          2-10 days after shipment.
        </p>
        <span className="flex gap-3 items-center mt-16">
          <Image src={"/Vector.png"} width={30} height={30} />
          <h2 className="text-[1.6rem] font-bold">
            What if my package never came?
          </h2>
        </span>
        <p className="text-[1.25rem] font-medium leading-[1.4] mt-2">
          Reach out to thefigmastore@harperandscott.com if you place an order
          and don’t receive a shipping notice within 5 business days OR if your
          order hasn’t arrived 10 days after it has shipped.{" "}
        </p>
        <span className="flex items-center gap-3 mt-16">
          <Image src={"/Rectangle2.png"} width={30} height={30} />
          <h2 className="text-[1.6rem] font-bold">
            Can I edit or cancel my order once it’s placed?
          </h2>
        </span>
        <p className="text-[1.25rem] font-medium leading-[1.4] mt-2">
          You are unable to edit your order once placed, but if you would like
          to cancel it, please connect with thefigmastore@harperandscott.com.
        </p>
      </div>
    </div>
  );
}

export default FAQ;
