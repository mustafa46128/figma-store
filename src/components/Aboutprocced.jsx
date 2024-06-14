import React from "react";
import { ImArrowUpRight2 } from "react-icons/im";
function Aboutprocced() {
  return (
    <div>
      <div className="flex">
        <div className="w-1/2">
          <h2 className="text-[3rem] font-bold leading-[1.2]">
            100% OF PROCEEDS ARE DONATED
          </h2>
        </div>
        <div className="w-1/2">
          <p className="text-[1.8rem] font-[400] leading-[1.3]">
            Any and all profits we generate from the store will be used to
            purchase carbon removal credits via reforestation from TIST (The
            International Small Group and Tree Planting Program). TIST is an
            innovative time-tested reforestation program that supports
            subsistence farmers in Kenya, Uganda, and Tanzania to tackle
            sustainable development and climate change through education and
            tree planting.
          </p>
          <h5 className="font-bold text-[1.8rem] flex items-center cursor-pointer mt-16">
            Learn more about TIST{" "}
            <span>
              <ImArrowUpRight2 />
            </span>{" "}
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Aboutprocced;
