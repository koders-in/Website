import React from "react";
import { blogs } from "../../../helper/constant";

const ListWithHeading = ({
  id,
  showMore,
}: {
  id: number;
  showMore: boolean;
}) => {
  return (
    <div className="">
      <p>{blogs[id].mainPara}</p>
      <ul className="list-disc ml-5 sm:ml-10">
        {blogs[id].all.content?.map((item, i) => (
          <li key={i} className="mt-3">
            <span className="font-miligramTextBold">
              {blogs[id].all.headings[i]}:&nbsp;
            </span>
            {item}
          </li>
        ))}
      </ul>
      <div
        className={`text-main-light_white font-miligramTextBook overflow-hidden mt-3 max-h-0 transition-all duration-500 ${
          showMore ? "max-h-[280px] md:max-h-[230px]" : ""
        }`}
      >
        {/* {[...blogs[id]?.all.content?.slice(blogs[id].all.content.length-3,blogs[id].all.content?.length-1)].map((item, i) => {
          return <p key={i}>{item}</p>;
        })} */}
        {showMore && <p>{blogs[id]?.all?.conclusion}</p>}
      </div>
    </div>
  );
};

export default ListWithHeading;
