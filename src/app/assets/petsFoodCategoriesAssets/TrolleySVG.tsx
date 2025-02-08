import { IIcon } from "@/app/types/Icon";
import React from "react";

const TrolleySVG = ({
  width = "53",
  height = "54",
  color = "white",
}: IIcon) => {
  return (
    <svg width={width} height={height} viewBox="0 0 25 25" fill={color}>
      <path
        d="M8 17.5L5.81763 6.26772C5.71013 5.81757 5.30779 5.5 4.84498 5.5H3M8 17.5H17M8 17.5C8.82843 17.5 9.5 18.1716 9.5 19C9.5 19.8284 8.82843 20.5 8 20.5C7.17157 20.5 6.5 19.8284 6.5 19C6.5 18.1716 7.17157 17.5 8 17.5ZM17 17.5C17.8284 17.5 18.5 18.1716 18.5 19C18.5 19.8284 17.8284 20.5 17 20.5C16.1716 20.5 15.5 19.8284 15.5 19C15.5 18.1716 16.1716 17.5 17 17.5ZM7.78357 14.5H17.5L19 7.5H6"
        stroke="#121923"
        strokeWidth="1.2"
      />
    </svg>
  );
};

export default TrolleySVG;
