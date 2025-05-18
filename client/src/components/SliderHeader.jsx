import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function SliderHeader() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    cssEase: "linear",
  };

  return (
    <div className="flex flex-row justify-start items-center py-4">
      <div className="w-1/6 bg-amber-400 text-center mr-8 ml-3 py-3">
        Breaking News
      </div>
      <div className="slider-container text-white w-5/6">
        <Slider {...settings}>
          <div>
            <Link to="/">হোম পেইজ</Link>
          </div>
          <div>
            <Link to="/">সাইট</Link>
          </div>
          <div>
            <Link to="/">এজেন্ট কে খজুন</Link>
          </div>
          <div>
            <Link to="/">এজেন্ট লিস্ট</Link>
          </div>
          <div>
            <Link to="/">কাস্টমার সার্ভিস</Link>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default SliderHeader;
