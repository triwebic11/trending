import React from "react";

const ImageBoxDesigner = ({ imgSrc, alt }) => {
  return (
    <div className="w-full h-auto mb-6 overflow-hidden cursor-pointer">
      <img
        src={imgSrc}
        alt={alt}
        className=" w-full h-[430px] rounded-lg shadow-lg hover:scale-120 hover:-rotate-6 duration-300"
      />
    </div>
  );
};

export default ImageBoxDesigner;
