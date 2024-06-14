import React from "react";
import { useId } from "react";

const Cricle = ({ url }) => {
  const patternId = useId();

  return (
    <svg
      className="svg-cutout"
      width="650"
      height="650"
      viewBox="0 0 650 650"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <pattern
          id={patternId}
          patternUnits="objectBoundingBox"
          width="1"
          height="1"
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
        d="M648 325C648 503.388 503.388 648 325 648C146.612 648 2 503.388 2 325C2 146.612 146.612 2 325 2C503.388 2 648 146.612 648 325Z"
        fill={`url(#${patternId})`}
      />
    </svg>
  );
};

export default Cricle;
