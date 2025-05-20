import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function SliderHeader() {
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024, // lg এর নিচে
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 768, // md এর নিচে
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="flex flex-row justify-start items-center py-4">
      <div className="w-1/6 bg-amber-400 text-center mr-8 ml-3 py-3">
        Breaking News
      </div>
      <div className="slider-container text-white w-5/6 ">
        <Slider {...settings}>
          <div>
            <Link
              to="/"
              className="hover:text-orange-700 duration-200 cursor-pointer"
            >
              একাউন্ট খোলার নিয়ম বা শর্ত গুলো কি কি?
            </Link>
          </div>
          <div>
            <Link
              to="/"
              className="hover:text-orange-700 duration-200 cursor-pointer"
            >
              WINPBU তে কিভাবে লেনদেন করবেন?
            </Link>
          </div>
          <div>
            <Link
              to="/"
              className="hover:text-orange-700 duration-200 cursor-pointer"
            >
              কিভাবে একাউন্ট খুলবেন?
            </Link>
          </div>
          <div>
            <Link
              to="/"
              className="hover:text-orange-700 duration-200 cursor-pointer"
            >
              Site Admin List
            </Link>
          </div>
          <div>
            <Link
              to="/"
              className="hover:text-orange-700 duration-200 cursor-pointer"
            >
              এজেন্ট কে ফোন নাম্বার দিয়ে খুঁজুন
            </Link>
          </div>
          <div>
            <Link
              to="/"
              className="hover:text-orange-700 duration-200 cursor-pointer"
            >
              কিভাবে আমি ভেল্কি তে এজেন্ট হতে পারি?
            </Link>
          </div>
          <div>
            <Link
              to="/"
              className="hover:text-orange-700 duration-200 cursor-pointer"
            >
              ভেল্কি সাইট
            </Link>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default SliderHeader;
