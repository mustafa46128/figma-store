import React from "react";

const SvgCutout = ({ url }) => {
  const id = React.useId();

  return (
    <svg
      className="svg-cutout"
      width="550"
      height="650"
      viewBox="0 0 650 650"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <pattern
          id={`stroke-${id}`}
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
        d="M647.629 324.502L649.477 323.737L647.629 324.502L553.485 97.2187C553.353 96.9001 553.1 96.6469 552.781 96.5148L325.498 2.37091C325.179 2.23889 324.821 2.23895 324.502 2.37091L323.737 0.523193L324.502 2.37097L97.2187 96.515C96.9 96.6469 96.6469 96.9001 96.5149 97.2188L2.37092 324.502C2.23893 324.821 2.23893 325.179 2.37093 325.498L96.5149 552.781C96.6469 553.1 96.9 553.353 97.2187 553.485L324.502 647.629C324.821 647.761 325.179 647.761 325.498 647.629L552.781 553.485C553.1 553.353 553.353 553.1 553.485 552.781L647.629 325.498C647.761 325.179 647.761 324.821 647.629 324.502Z"
        fill={`url(#stroke-${id})`}
      />
    </svg>
  );
};

export default SvgCutout;
