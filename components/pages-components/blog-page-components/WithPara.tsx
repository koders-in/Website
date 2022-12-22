import React from "react";
import { blogs } from "../../../helper/constant";

const WithPara = ({ id, showMore }: { id: number; showMore: boolean }) => {
  return (
    <div>
      {blogs[id].all.content?.map((item, i) => {
        if (i > blogs[id].all.content.length - 3) return;
        return (
          <p
            className="text-main-light_white font-miligramTextBook mt-3"
            key={i}
          >
            {item}
          </p>
        );
      })}
      <div
        className={`text-main-light_white font-miligramTextBook overflow-hidden mt-3 max-h-0 transition-all duration-500 ${
          showMore ? "max-h-[280px] md:max-h-[230px]" : ""
        }`}
      >
        {[
          ...blogs[id]?.all.content?.slice(
            blogs[id].all.content.length - 3,
            blogs[id].all.content?.length - 1
          ),
        ].map((item, i) => {
          return <p key={i}>{item}</p>;
        })}
      </div>
    </div>
  );
};

export default WithPara;
