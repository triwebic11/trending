import React from "react";

const ImageBoxDesigner = ({ imgSrc, alt, overlayEnabled = false, height }) => {
  return (
    <div className="relative w-full h-auto mb-6 overflow-hidden rounded-lg"> {/* rounded here */}
      <img
        src={imgSrc}
        alt={alt}
        className={`w-full transition-transform duration-300 ease-in-out transform-gpu rounded-lg hover:scale-120 hover:-rotate-3 ${height ? height : 'h-[450px]'}`}
      />

      {overlayEnabled && (
        <>
          {/* Left overlay */}
          <div
            className="absolute top-0 left-0 h-full z-10 pointer-events-none"
            style={{
              width: "300px",
              background:
                "linear-gradient(to right, rgba(0,0,0,1) 0px, rgba(0,0,0,0.6) 200px, rgba(0,0,0,0) 300px)",
              borderTopLeftRadius: "12px",
              borderBottomLeftRadius: "12px",
            }}
          />
          {/* Right overlay */}
          <div
            className="absolute top-0 right-0 h-full z-10 pointer-events-none"
            style={{
              width: "300px",
              background:
                "linear-gradient(to left, rgba(0,0,0,1) 0px, rgba(0,0,0,0.6) 200px, rgba(0,0,0,0) 300px)",
              borderTopRightRadius: "12px",
              borderBottomRightRadius: "12px",
            }}
          />
        </>
      )}
    </div>
  );
};

export default ImageBoxDesigner;
