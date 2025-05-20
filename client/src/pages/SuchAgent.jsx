import React from "react";
import Container from "../components/Container";
import HomeCardSections from "../components/HomeCardSections";
import telephone from "../assets/telephone.png";
const SuchAgent = () => {
  return (
    <div>
      <Container className=" text-white">
        <div className="flex flex-col md:flex-row gap-8">
          <div>
            <img src={telephone} alt="Such agent by call" />
            <h1 className="text-5xl my-2">এজেন্ট কে ফোন নাম্বার দিয়ে খুঁজুন</h1>
            <h1 className="text-sm">anuary 31, 2025</h1>
            <div className="flex flex-col items-center justify-center p-6">
              <h1 className="my-2">এজেন্ট কে ফোন নাম্বার দিয়ে খুজুনঃ</h1>
              <div className="w-1/2 border border-white rounded-lg flex flex-col gap-4 p-4">
                <h1>PHONE NUMBER</h1>
                <input
                  type="text"
                  className="w-full flex-grow px-2 py-2 bg-black text-white focus:outline-none border border-white"
                />
                <button className="w-20 bg-green-600  hover:text-black font-semibold px-4 cursor-pointer inline-flex ">
                  Submit{" "}
                </button>
              </div>
            </div>
          </div>
          <div>
            {/* Sidebar */}

            <aside>
              <h3 className="text-lg font-semibold mb-2">Search</h3>
              <div className="flex border border-gray-500 mb-16">
                <input
                  type="text"
                  className="flex-grow px-3 py-4 bg-transparent text-white focus:outline-none"
                />
                <button className="bg-yellow-500 hover:bg-[#ff7c7c] text-black font-semibold px-4">
                  Search
                </button>
              </div>
              <h3 className="text-2xl font-semibold mb-4 border-dotted border-b-2 border-gray-600 pb-1">
                Recent Posts
              </h3>
              <ul className="space-y-4 text-sm ">
                <li className="border-b-1 border-dotted border-gray-600 pb-1">
                  {" "}
                  এজেন্ট কে ফেন নাম্বার দিয়ে খুঁজুন
                </li>
                <li className="border-b-1 border-dotted border-gray-600 pb-1">
                  {" "}
                  কিভাবে আমি ভেরিফাই তে এজেন্ট হতে পারি?
                </li>
                <li className="border-b-1 border-dotted border-gray-600 pb-1">
                  {" "}
                  ভেরিফাই সাইট
                </li>
                <li className="border-b-1 border-dotted border-gray-600 pb-1">
                  {" "}
                  একাউন্ট খোলার নিয়ম বা শর্ত গুলো কি কি?
                </li>
                <li className="border-b-1 border-dotted border-gray-600 pb-1">
                  {" "}
                  WINPBU তে কিভাবে নেনদেন করবেন?
                </li>
              </ul>

              <h3 className="text-2xl font-semibold mt-6 border-b-2 border-dotted border-gray-600 pb-1">
                Recent Comments
              </h3>
              <p className="text-sm  mt-2">No comments to show.</p>
            </aside>
          </div>
        </div>
        <HomeCardSections />
      </Container>
    </div>
  );
};

export default SuchAgent;
