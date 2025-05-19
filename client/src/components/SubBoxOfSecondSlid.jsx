import React from "react";
import { Link } from "react-router-dom";

const SubBoxOfSecondSlid = ({ link, title }) => {
  return (
    <div className=" absolute top-1/3 left-2 flex flex-col gap-1 z-20">
      <div>
        <Link to={link} className="text-black">
          <span className="bg-amber-400 px-2 py-1 rounded-lg text-sm  hover:cursor-pointer hover:bg-orange-500">
            Winpbu
          </span>
        </Link>
      </div>
      <div className="text-4xl text-white cursor-pointer">
        <Link to={link}>{title}</Link>
      </div>
      <div>
        <Link to={link}>
          <span className="bg-amber-400 px-3 py-2 rounded-lg text-sm text-black hover:cursor-pointer hover:bg-orange-500">
            এই খানে ক্লিক করে বিস্তারিত জানুন...
          </span>
        </Link>
      </div>
    </div>
  );
};

export default SubBoxOfSecondSlid;
