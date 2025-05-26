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
    <div className="flex flex-row justify-start items-center py-2">
      <div className=""></div>
      <div className="relative w-[380px] mr-4 font-semibold md:px-2 md:w-1/2 bg-amber-400 text-base  text-center md:mr-8  py-2">
        Breaking News
        <span className="absolute -top-[4.5px] -right-3 w-0 h-0 border-t-[30px] border-t-transparent border-l-[20px] border-l-amber-400 rotate-90"></span>
      </div>

      <div className="slider-container text-white text-sm w-4/6 md:w-5/6  ">
        <Slider {...settings}>
          <div>
            <Link
              to="/rulestoopenaccount"
              className="hover:text-[#ff7c7c] duration-200 cursor-pointer"
            >
              একাউন্ট খোলার নিয়ম বা শর্ত গুলো কি কি?
            </Link>
          </div>
          <div>
            <Link
              to="/howtoshare"
              className="hover:text-[#ff7c7c] duration-200 cursor-pointer"
            >
              WINPBU তে কিভাবে লেনদেন করবেন?
            </Link>
          </div>
          <div>
            <Link
              to="/howtoopen"
              className="hover:text-[#ff7c7c] duration-200 cursor-pointer"
            >
              কিভাবে একাউন্ট খুলবেন?
            </Link>
          </div>
          <div>
            <Link
              to="/siteadminlist"
              className="hover:text-[#ff7c7c] duration-200 cursor-pointer"
            >
              Site Admin List
            </Link>
          </div>
          <div>
            <Link
              to="/searchagentbyphone"
              className="hover:text-[#ff7c7c] duration-200 cursor-pointer"
            >
              এজেন্ট কে ফোন নাম্বার দিয়ে খুঁজুন
            </Link>
          </div>
          <div>
            <Link
              to="/howtobeagent"
              className="hover:text-[#ff7c7c] duration-200 cursor-pointer"
            >
              কিভাবে আমি ভেল্কি তে এজেন্ট হতে পারি?
            </Link>
          </div>
          <div>
            <Link
              to="/velkisite"
              className="hover:text-[#ff7c7c] duration-200 cursor-pointer"
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

// { path: "/suchagent", element: <SuchAgent /> },
//     { path: "/search-agentby-phone", element: <SearchAgentByPhone /> },
//     { path: "/how-to-be-a-agent", element: <HowToBeAgent /> },
//     { path: "/velkisite", element: <VelkiAite /> },
//     { path: "/rules-to-open-account", element: <RulesAndRegulationForOpenAccount /> },
//     { path: "/velki-mony-transfer", element: <VelkiMoneyTransection /> },
//     { path: "/howt-open", element: <HowToOpenAccount /> },
