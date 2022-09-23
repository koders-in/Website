import React from "react";
import { CheckBox } from "../checkbox/CheckBox";
import "./list-item.css";

export const ListItem = ({ item }) => {
  return (
    <div className="list-item">
      <CheckBox />
      <div dangerouslySetInnerHTML={{ __html: item }}></div>
    </div>
  );
};
