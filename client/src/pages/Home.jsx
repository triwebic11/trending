import React from "react";
import Container from "../components/Container";
import SecondSlid from "../components/SecondSlid";
import AgentSearchForm from "../components/AgentSearchForm";
import { Link } from "react-router-dom";
import img1 from "../assets/Selection_141.png";
import img2 from "../assets/agent.png";
import img3 from "../assets/velki-live-site-768x244.png";
import img4 from "../assets/rules-and-regulations-300x121.png";
import img5 from "../assets/MONEY-TRANSFER-300x111.png";
import img6 from "../assets/REGISTER-300x85.png";
import img7 from "../assets/site-admin-list.jpg";
import ImageBoxDesigner from "../components/ImageBoxDesigner";


const Home = () => {
  const arr1 = [
    {
      id: 1,
      title: "এজেন্ট কে ফোন নাম্বার দিয়ে খুঁজুন",
      link: "/masteragentlist",
      imgSrc: img1,
    },
    {
      id: 2,
      title: "কিভাবে আমি ভেল্কি তে এজেন্ট হতে পারি?",
      link: "/superadminlist",
      imgSrc: img2,
    },
    {
      id: 3,
      title: "ভেল্কি সাইট",
      link: "/subadminlist",
      imgSrc: img3,
    }
  ]
  const arr2 = [
    {
      id: 1,
      title: "একাউন্ট খোলার নিয়ম বা শর্ত গুলো কি কি?",
      link: "/masteragentlist",
      imgSrc: img4,
    },
    {
      id: 2,
      title: "WINPBU তে কিভাবে লেনদেন করবেন?",
      link: "/superadminlist",
      imgSrc: img5,
    },
    {
      id: 3,
      title: "কিভাবে একাউন্ট খুলবেন?",
      link: "/subadminlist",
      imgSrc: img6,
    },
    {
      id: 3,
      title: "Site Admin List",
      link: "/subadminlist",
      imgSrc: img7,
    },
  ]
  return (
    <div>
      <Container className="my-6 px-7  text-center text-white text-8xl">
        <div className="relative">
          <SecondSlid />
          <div className="text-left my-5">
            <div>
              <h1 className="text-7xl font-bold">WINPBU তে স্বাগতম</h1>
            </div>
            <div className="text-base font-semibold my-4">
              <AgentSearchForm></AgentSearchForm>
            </div>
            <div className=" text-lg ">
              <p>
                WINPBU বাংলাদেশ – বাংলাদেশের শীর্ষস্থানীয় অনলাইন গেমিং এবং
                বেটিং প্ল্যাটফর্ম পরিচালনা প্রতিষ্টান। আমদের সাইট গুলো হচ্ছে
                এজেন্ট বেইজড সাইট। এই খানে এজেন্ট এর মাধ্যমে লেনদেন করতে হবে।
                এজেন্ট আপনাকে একাউন্ট খুলে দিবে এবং এজেন্টই আপনাকে ডিপোজিট বা
                উইথড্র করে দিবে। আমাদের সাইট গুলোর মধ্যে আছে – ভেল্কি ///
                বাজিওয়ালা /// বাজি৩৬৫। উপরে আপনি আপনার এজেন্ট সার্চ করে বের
                করুন। আমাদের লিষ্টের এজেন্ট ছাড়া আপনি যদি লেনদেন করেন তার দায়ভার
                আপনাকেই নিতে হবে।
              </p>
              <br />
              <p className="font-bold">কিভাবে একাউন্ট খুলবেনঃ</p>
              <p>
                আমাদের সাইটে একাউন্ট করতে হলে আপনার
                এজেন্ট এর মাধ্যমে একাউন্ট খুলতে হবে। এজেন্ট এর মাধ্যমেই টাকা
                ডিপোজিট এবং উইথড্র করতে হবে। আপনি যে এজেন্ট এর কাছ থেকে একাউন্ট
                খুলবেন তার সাথেই সব সময় লেনদেন করতে হবে। ঠিক কোন এজেন্ট কে টাকা
                দিবেন এবং কিভাবে তার সাথে লেনদেন করবেন তার বুঝতে হলে আপনার
                নিম্বের তথ্য গুলো পড়া জরুরী।
              </p>
              <br />
              <p className="font-bold">এজেন্ট লিস্টঃ </p>
              <p>
                একাউন্ট খুলতে নিম্বের অনলাইন এজেন্ট লিস্ট এ ক্লিক
                করুন। এজেন্ট লিষ্ট এর এজেন্ট দের সাথে ইউজার দের শুধু মাত্র
                হোয়াটসাপ এর মাধ্যমে যোগাযোগ করতে হবে। হোয়াটসাপ ছাড়া অন্য কোন
                মাধ্যমে যোগাযোগ করলে বা লেনদেন করলে তা গ্রহনযোগ্য হবে না।
                হোয়াটসাপ এ যোগাযোগ করতে হলে এজেন্ট লিস্টে হোয়াটসাপ আইকন উপরে
                ক্লিক করুন অথবা ফোন নাম্বার টি মোবাইলে সেভ করে তাকে হোয়াটসাপ এ
                মসেজ পাঠাতে পারবেন। হোয়াটসাপ এপ টি আপনার মোবাইলে আগে থেকেই
                থাকতে হবে। না থাকলে গুগুল প্লে থেকে ইন্সটল করে নিন।
              </p>
            </div>
          </div>
        </div>
      </Container>
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
                    className="text-2xl font-bold text-white px-4 -mt-3 rounded"
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
                    className="text-2xl font-bold text-white px-4 -mt-3 rounded"
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

export default Home;
