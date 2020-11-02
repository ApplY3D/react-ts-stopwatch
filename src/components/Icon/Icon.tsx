import React from "react";
import "./icons-defs.svg";

interface IIcon {
  id: TIcon;
}

type TIcon = "icon-play" | "icon-pause" | "icon-flag" | "icon-cross";

export const Icon: React.FC<IIcon> = ({ id }) => {
  return (
    <svg className={`icon ${id}`}>
      <use href={`#${id}`}></use>
    </svg>
  );
};
