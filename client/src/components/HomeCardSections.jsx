import React from 'react';
import Container from './Container';
import { Link } from "react-router-dom";
import img1 from "../assets/Selection_141.png";
import img2 from "../assets/agent.png";
import img3 from "../assets/velki-live-site-768x244.png";
import img4 from "../assets/rules-and-regulations-300x121.png";
import img5 from "../assets/MONEY-TRANSFER-300x111.png";
import img6 from "../assets/REGISTER-300x85.png";
import img7 from "../assets/site-admin-list.jpg";
import ImageBoxDesigner from './ImageBoxDesigner';

const HomeCardSections = () => {
     const arr1 = [
    {
      id: 1,
      title: "এজেন্ট কে ফোন নাম্বার দিয়ে খুঁজুন",
      link: "/suchagent",
      imgSrc: img1,
    },
    {
      id: 2,
      title: "কিভাবে আমি ভেল্কি তে এজেন্ট হতে পারি?",
      link: "/velki",
      imgSrc: img2,
    },
    {
      id: 3,
      title: "ভেল্কি সাইট",
      link: "/velki",
      imgSrc: img3,
    }
  ]
  const arr2 = [
    {
      id: 1,
      title: "একাউন্ট খোলার নিয়ম বা শর্ত গুলো কি কি?",
      link: "/questionanswer",
      imgSrc: img4,
    },
    {
      id: 2,
      title: "WINPBU তে কিভাবে লেনদেন করবেন?",
      link: "/",
      imgSrc: img5,
    },
    {
      id: 3,
      title: "কিভাবে একাউন্ট খুলবেন?",
      link: "/",
      imgSrc: img6,
    },
    {
      id: 3,
      title: "Site Admin List",
      link: "/siteadminlist",
      imgSrc: img7,
    },
  ]
    return (
        <div>
            <div className="border-b border-dotted border-white my-10"> </div>
      <Container>
        <p className="text-5xl text-white font-semibold">You May Also Like:</p>
        <div className="border border-dotted border-white my-2"> </div>

        {/* grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10">
          {
            arr1?.map((item) => (
              <div className="relative w-full overflow-hidden cursor-pointer">
      
                <ImageBoxDesigner
                  imgSrc={item.imgSrc}
                  alt="Sub admin list"
                  className="h-30 opacity-60"
                  height="h-[250px]"
                  overlayEnabled={false}
                />

                {/* Title on top of image */}
                <div className="inset-0 flex items-center ">
                  <Link
                    to={item.link}
                    className="text-2xl hover:text-[#ff7c7c] font-bold text-white px-4 -mt-3 rounded"
                  >
                    {item.title}
                  </Link>
                </div>
              </div>

            ))
          }
        </div>

        {/* grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
          {
            arr2?.map((item) => (
              <div className="relative w-full overflow-hidden cursor-pointer">
      
                <ImageBoxDesigner
                  imgSrc={item.imgSrc}
                  alt="Sub admin list"
                  className="h-30 opacity-60"
                  height="h-[220px]"
                  overlayEnabled={false}
                />

                {/* Title on top of image */}
                <div className="inset-0 flex items-center ">
                  <Link
                    to={item.link}
                    className="text-2xl hover:text-[#ff7c7c] font-bold text-white px-4 -mt-3 rounded"
                  >
                    {item.title}
                  </Link>
                </div>
              </div>

            ))
          }
        </div>

         <p className="text-3xl text-white  pt-10">Archives</p>
        <div className="border border-dotted border-white my-2 p-[1px]"> </div>
        <p className="text-md text-white  hover:text-[#ff7c7c]">January 2025</p>


         <p className="text-3xl text-white  pt-20">Categories</p>
        <div className="border border-dotted border-white my-2 p-[1px]"> </div>
        <p className="text-2xl pb-2 text-white  hover:text-[#ff7c7c] border-b border-dotted"><Link to={"/questionanswer"}>FAQ</Link></p>
        <p className="text-2xl pb-2 text-white  hover:text-[#ff7c7c] border-b border-dotted">Uncategorized</p>
        <p className="text-2xl pb-2 text-white  hover:text-[#ff7c7c] border-b border-dotted"><Link to="/velki">VELKI</Link></p>
        <p className="text-2xl pb-2 text-white  hover:text-[#ff7c7c] border-b border-dotted mb-20"><Link to="/">Winpbu</Link></p>



      </Container>
            
        </div>
    );
};

export default HomeCardSections;