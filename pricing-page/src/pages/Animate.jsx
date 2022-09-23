import React from "react";
import "./style.css";

export const Animate = ({ text, className }) => {
  console.log("anim", text);
  return <h1 className={className}>{text}</h1>;
};
