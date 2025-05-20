import React from "react";
import { Link } from "react-router-dom";

const SubBoxOfSecondSlid = ({ link, title }) => {
  return (
    <div className="absolute top-1/3 left-10 flex flex-col items-start gap-3 z-20">
      <div>
        <Link to={link} className="text-black">
          <span className="bg-amber-400 px-2 py-1 rounded-lg text-sm  hover:cursor-pointer hover:bg-orange-500">
            Winpbu
          </span>
        </Link>
      </div>
      <div>
        <Link to={link}>
          <span className="text-5xl font-bold text-white cursor-pointer text-shadow-lg text-shadow-black relative overflow-hidden inline-flex group">
            {title}
            <span className="absolute w-full h-[5px] bg-white left-0 bottom-0 -translate-x-full group-hover:translate-x-0 transform transition-transform duration-500" />
          </span>
        </Link>
      </div>
      <div className="-mt-10">
        <Link to={link}>
          <span className="bg-amber-400 px-3 py-5 rounded-lg text-sm text-black hover:cursor-pointer hover:bg-orange-500">
            এই খানে ক্লিক করে বিস্তারিত জানুন...
          </span>
        </Link>
      </div>
    </div>
  );
};

export default SubBoxOfSecondSlid;
