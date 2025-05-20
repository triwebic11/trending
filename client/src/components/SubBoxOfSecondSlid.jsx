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
      <div className="text-6xl font-bold text-white cursor-pointer">
        <Link to={link}>{title}</Link>
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
