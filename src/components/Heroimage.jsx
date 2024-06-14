import React from "react";
import { useId } from "react";

const SvgCutout1 = ({ url }) => {
  const patternId = useId();

  return (
    <svg
      className="svg-cutout"
      width="550"
      height="658"
      viewBox="-2 -2 654 654"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <pattern
          id={patternId}
          className="stroke-4"
          patternUnits="objectBoundingBox"
          width="1"
          height="1"
          stroke="black"
          strokeWidth="20px"
        >
          <image
            href={url}
            x="0"
            y="0"
            width="100%"
            height="100%"
            className="pattern-image"
            preserveAspectRatio="xMidYMid slice"
          />
        </pattern>
      </defs>
      <path
        stroke="black"
        strokeWidth="4px"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M650 0H0V125.496C0 231.179 81.9707 317.718 185.802 325C81.9707 332.282 0 418.821 0 524.504V650H650V524.504C650 418.82 568.029 332.282 464.198 325C568.029 317.718 650 231.179 650 125.496V0Z"
        fill={`url(#${patternId})`}
      />
    </svg>
  );
};

export default SvgCutout1;
