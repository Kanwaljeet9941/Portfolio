import React from "react";

export default function ThemeItem({ color, img, changeColor }) {
  return (
    <img
      src={img}
      className="theme__img"
      alt=""
      onClick={() => changeColor(color)}
    />
  );
}
