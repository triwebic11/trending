import React from "react";
import Container from "../../components/Container";
import agent from "../../assets/agent.png"
import velki from '../../assets/velki-live-site.png'

const Velki = () => {
  return (
    <div>
      <Container className=" text-white  px-6 py-10 font-sans">
        <div className="max-w-6xl mx-auto   flex flex-col md:flex-row gap-8 justify-between">
          <div className="">
            {/* Category Title */}
            <h2 className="text-3xl font-bold mb-4">
              Category: <span className="text-white">VELKI</span>
            </h2>
            <div className="">
              <div className="mb-20">
                {/* Header */}
                <div className="mb-6 text-center">
                  <span className="bg-yellow-400 hover:bg-[#ff7c7c] duration-200 text-black text-xs font-semibold px-2 py-1 rounded">
                    VELKI
                  </span>
                  <h1 className="text-3xl font-bold mt-3 hover:text-[#ff7c7c] duration-200">
                    কিভাবে আমি ভেল্কি তে এজেন্ট হতে পারি?
                  </h1>
                  <p className="text-sm  mt-1">
                    👤 By | January 26, 2025
                  </p>
                </div>

                {/* Image */}
                <div className="mb-6">
                  <img
                    src={agent}
                    alt="agent"
                    className="w-full rounded-lg shadow-lg hover:translate-3"
                  />
                </div>
                {/* Main Content */}
                <p className="text-lg leading-relaxed mb-10 text-center">
                  লোকাল মাস্টার এজেন্ট হবার সিস্টেম: এজেন্ট হবার জন্য আমাদের সুপার এজেন্ট দের সাথে যোগাযোগ করতে হবে। সুপার এজেন্ট লিস্ট দেখতে এই লিঙ্ক এ ক্লিক করুন।{' '}
                  <a href="#" className=" underline hover:text-[#ff7c7c] duration-200">
                    [Read More...]
                  </a>
                </p>
              </div>
              <div className="mb-20">
                {/* Header */}
                <div className="mb-6 text-center">
                  <span className="bg-yellow-400 hover:bg-[#ff7c7c] duration-200 text-black text-xs font-semibold px-2 py-1 rounded">
                    VELKI
                  </span>
                  <h1 className="text-3xl font-bold mt-3 hover:text-[#ff7c7c] duration-200">
                    ভেল্কি সাইট
                  </h1>
                  <p className="text-sm  mt-1">
                    👤 By | January 26, 2025
                  </p>
                </div>

                {/* Image */}
                <div className="mb-6">
                  <img
                    src={velki}
                    alt="velki"
                    className="w-full rounded-lg shadow-lg hover:translate-3"
                  />
                </div>
                {/* Main Content */}
                <p className="text-lg leading-relaxed mb-10 text-center">
                  ভেল্কি আমাদের জনপ্রিয় গেমিং সাইট – কিন্তু দুর্ভাগ্য বসত কিছু অসৎ এবং ধান্দাবাজ ব্যক্তি আমাদের সাইটের নকল করে অনেক গুলো সাইট তইরী করেছে। তাই আপনাদের{' '}
                  <a href="#" className=" underline hover:text-[#ff7c7c] duration-200">
                    [Read More...]
                  </a>
                </p>
              </div>
            </div>


          </div>
          <div class="divide-y-3 divide-dashed divide-white"></div>
          <div className="">
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
                <li className="border-b-1 border-dotted border-gray-600 pb-1"> এজেন্ট কে ফেন নাম্বার দিয়ে খুঁজুন</li>
                <li className="border-b-1 border-dotted border-gray-600 pb-1"> কিভাবে আমি ভেরিফাই তে এজেন্ট হতে পারি?</li>
                <li className="border-b-1 border-dotted border-gray-600 pb-1"> ভেরিফাই সাইট</li>
                <li className="border-b-1 border-dotted border-gray-600 pb-1"> একাউন্ট খোলার নিয়ম বা শর্ত গুলো কি কি?</li>
                <li className="border-b-1 border-dotted border-gray-600 pb-1"> WINPBU তে কিভাবে নেনদেন করবেন?</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-6 border-b-2 border-dotted border-gray-600 pb-1">
                Recent Comments
              </h3>
              <p className="text-sm  mt-2">No comments to show.</p>
            </aside>
          </div>


        </div>
      </Container>
    </div>
  );
};

export default Velki;
