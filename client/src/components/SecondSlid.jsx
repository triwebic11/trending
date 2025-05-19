import React from "react";
import siteamdin from "../assets/site-admin-list.jpg";
import subadmin from "../assets/sub-admin.jpg";
import superadmin from "../assets/super-agent.jpg";
import masteragent from "../assets/master-agent.jpg";
import customer from "../assets/customer.jpeg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SubBoxOfSecondSlid from "./SubBoxOfSecondSlid";
import ImageBoxDesigner from "./ImageBoxDesigner";
const SecondSlid = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
  };
  return (
    <div>
      <div className="slider-container relative mb-4 rounded-lg">
        <Slider {...settings}>
          <div className="w-full h-52 relative">
            <ImageBoxDesigner
              imgSrc={masteragent}
              alt="Master agent list"
              className="h-52 opacity-60"
            />
            <SubBoxOfSecondSlid
              link={"/masteragentlist"}
              title="Master Agent List"
            />
          </div>
          <div className="w-full h-52 relative">
            <ImageBoxDesigner
              imgSrc={superadmin}
              alt="Super admin list"
              className="h-52 opacity-60"
            />
            <SubBoxOfSecondSlid
              link={"/superagentlist"}
              title="Super Admin List"
            />
          </div>
          <div className="w-full h-52 relative">
            <ImageBoxDesigner
              imgSrc={subadmin}
              alt="Sub admin list"
              className="h-52 opacity-60"
            />
            <SubBoxOfSecondSlid link={"/subadminlist"} title="Sub Admin List" />
          </div>
          <div className="w-full h-52 relative">
            <ImageBoxDesigner
              imgSrc={siteamdin}
              alt="Site admin list"
              className="h-52 opacity-60"
            />
            <SubBoxOfSecondSlid
              link={"/siteadminlist"}
              title="Site Admin List"
            />
          </div>
          <div className="w-full h-52 relative">
            <ImageBoxDesigner
              imgSrc={customer}
              alt="Customer Servics"
              className="h-52 opacity-60"
            />
            <SubBoxOfSecondSlid
              link={"/customerservics"}
              title="Customer Service"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default SecondSlid;
