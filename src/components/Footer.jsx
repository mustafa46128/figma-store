import React from "react";

function Footer() {
  return (
    <div className="w-full bg-[#f24e1e] px-20  pt-8">
      <div className="flex justify-between">
        <div className="w-1/5 h-64 bg-[#ffc700] rounded-tl-full rounded-tr-full relative">
          <h1 className="text-center text-[2rem] font-semibold absolute left-[50%] transform -translate-x-[50%] top-5">
            THE
          </h1>
          <h1 className="text-center text-[2rem] font-semibold absolute bottom-20 -left-5 -rotate-90">
            FIGMA
          </h1>
          <h1 className="text-center text-[2rem] font-semibold absolute bottom-20 -right-5 rotate-90">
            STORE
          </h1>
        </div>
        <div className="flex justify-end w-[33%]">
          <div className="w-full flex justify-end">
            <h1 className="font-bold text-[2rem]">
              OBJECTS <br />
              THAT <br /> INSPIRE.
            </h1>
          </div>
          <div className="w-full flex justify-end">
            <ul className="leading-10">
              <li className="text-[15px] font-medium hover:cursor-pointer hover:underline">
                FAQ
              </li>
              <li className="text-[15px] font-medium hover:cursor-pointer hover:underline">
                Contact Us
              </li>
              <li className="text-[15px] font-medium hover:cursor-pointer hover:underline">
                Privacy Policy
              </li>
              <li className="text-[15px] font-medium hover:cursor-pointer hover:underline">
                Terms of Service
              </li>
            </ul>
          </div>
        </div>
        <div className="w-[40%] flex justify-end">
          <h5 className="textbase font-medium w-[300px]">
            This site is powered by{" "}
            <span className="text-[1rem] font-bold hover:cursor-pointer hover:text-[blue]">
              Harper + Scott,
            </span>{" "}
            a{" "}
            <span className="text-[1rem] font-bold hover:cursor-pointer hover:text-[blue]">
              Certified B-Corporation.
            </span>{" "}
            For more information read Harper + Scott's{" "}
            <span className="text-[1rem] font-bold hover:cursor-pointer hover:text-[blue]">
              CSR policy.
            </span>
          </h5>
        </div>
      </div>
      <div className="">
        <ul className="flex gap-6 pl-48  ">
          <li className="font-[400] text-[1.6rem] hover:cursor-pointer uppercase hover:underline">
            Figma ↗
          </li>
          <li className="font-[400] text-[1.6rem] hover:cursor-pointer uppercase hover:underline">
            Twitter
          </li>
          <li className="font-[400] text-[1.6rem] hover:cursor-pointer uppercase hover:underline">
            Instagram
          </li>
          <li className="font-[400] text-[1.6rem] hover:cursor-pointer uppercase hover:underline">
            YouTube
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
