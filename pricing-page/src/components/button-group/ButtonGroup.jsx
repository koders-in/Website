import React from "react";
import "./button-group.css"

export const ButtonGroup = () => {
  return (
    <div className="button-group">

      <div className="child-one">
        <div>Monthly</div>
        <div>Quaterly</div>
        <div>Yearly</div>
      </div>
      <div className="child-two">
        <div></div>
        <div>(save 10%)</div>
        <div>(save 20%)</div>
      </div>
    </div>
  );
};
