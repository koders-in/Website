import React from "react";

import { blogs } from "../../../helper/constant";

const WithList = ({ id, showMore }: { id: number; showMore: boolean }) => {
  return (
    <div className="">
      <p>{blogs[id].mainPara}</p>
      <ul className="list-disc ml-5 sm:ml-10">
        {blogs[id].all.content?.map((item, i) => {
          if (i > blogs[id].all.content.length - 4) return;
          return (
            <li key={i} className="mt-3">
              {item}
            </li>
          );
        })}
      </ul>
      <div
        className={`text-main-light_white font-miligramTextBook overflow-hidden max-h-0 transition-all duration-500 ${
          showMore ? "max-h-[280px] md:max-h-[230px]" : ""
        }`}
      >
        <ul className="list-disc ml-5 sm:ml-10">
          {[
            ...blogs[id]?.all.content?.slice(
              blogs[id].all.content.length - 3,
              blogs[id].all.content?.length
            ),
          ].map((item, i) => {
            return (
              <li className="mt-3" key={i}>
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default WithList;
