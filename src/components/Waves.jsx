import React from "react";
import { useId } from "react";

const Wave = ({ url }) => {
  const patternId = useId();

  return (
    <svg
      className="svg-cutout"
      width="1000"
      height="612"
      viewBox="0 0 1124 612"
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
        d="M302.279 498.312L300 493.256L297.721 498.312C266.868 566.765 220.337 609.5 169 609.5C123.66 609.5 82.0782 576.193 51.6874 521.166C21.3451 466.227 2.5 390.159 2.5 306C2.5 221.841 21.3451 145.773 51.6874 90.834C82.0782 35.8068 123.66 2.5 169 2.5C220.337 2.5 266.868 45.2351 297.721 113.688L300 118.744L302.279 113.688C333.132 45.2351 379.663 2.5 431 2.5C482.337 2.5 528.868 45.2351 559.721 113.688L562 118.744L564.279 113.688C595.132 45.2351 641.663 2.5 693 2.5C744.337 2.5 790.868 45.2351 821.721 113.688L824 118.744L826.279 113.688C857.132 45.2351 903.663 2.5 955 2.5C1000.34 2.5 1041.92 35.8068 1072.31 90.834C1102.65 145.773 1121.5 221.841 1121.5 306C1121.5 390.159 1102.65 466.227 1072.31 521.166C1041.92 576.193 1000.34 609.5 955 609.5C903.663 609.5 857.132 566.765 826.279 498.312L824 493.256L821.721 498.312C790.868 566.765 744.337 609.5 693 609.5C641.663 609.5 595.132 566.765 564.279 498.312L562 493.256L559.721 498.312C528.868 566.765 482.337 609.5 431 609.5C379.663 609.5 333.132 566.765 302.279 498.312Z"
        fill={`url(#${patternId})`}
      />
    </svg>
  );
};

export default Wave;
