import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      {" "}
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
        <h3 className="text-2xl font-semibold  ">
          Recent Posts
        </h3>
        <div className="border border-dotted border-white my-2 p-[1px]"> </div>
        <ul className="space-y-4 text-sm ">
          <li className="border-b-1 border-dotted border-gray-600 pb-1 cursor-pointer hover:text-[#ff7c7c] hover:underline duration-200">
            {" "}
            <Link to={"/suchagent"}>এজেন্ট কে ফেন নাম্বার দিয়ে খুঁজুন</Link>
          </li>
          <li className="border-b-1 border-dotted border-gray-600 pb-1 cursor-pointer hover:text-[#ff7c7c] hover:underline duration-200">
            {" "}
            <Link to={"/velki"}>কিভাবে আমি ভেল্কি তে এজেন্ট হতে পারি?</Link>
          </li>
          <li className="border-b-1 border-dotted border-gray-600 pb-1 cursor-pointer hover:text-[#ff7c7c] hover:underline duration-200">
            {" "}
            <Link to={"/velki"}> ভেল্কি সাইট</Link>
          </li>
          <li className="border-b-1 border-dotted border-gray-600 pb-1 cursor-pointer hover:text-[#ff7c7c] hover:underline duration-200">
            {" "}
            <Link to={"/questionanswer"}>
              {" "}
              একাউন্ট খোলার নিয়ম বা শর্ত গুলো কি কি?
            </Link>
          </li>
          <li className="border-b-1 border-dotted border-gray-600 pb-1 cursor-pointer hover:text-[#ff7c7c] hover:underline duration-200">
            {" "}
            <Link to={"/howtoshare"}> WINPBU তে কিভাবে নেনদেন করবেন?</Link>
          </li>
        </ul>

        <h3 className="text-2xl font-semibold mt-8  pb-1 ">
          Recent Comments
        </h3>
        <div className="border border-dotted border-white my-2 p-[1px]"> </div>
        <p className="text-sm  mt-2">No comments to show.</p>
      </aside>
    </div>
  );
};

export default Sidebar;
