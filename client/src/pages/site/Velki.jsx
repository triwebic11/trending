import React from "react";
import Container from "../../components/Container";
import agent from "../../assets/agent.png";
import velki from "../../assets/velki-live-site.png";
import ImageBoxDesigner from "../../components/ImageBoxDesigner";
import Sidebar from "../../components/Sidebar";
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
                  <p className="text-sm  mt-1">👤 By | January 26, 2025</p>
                </div>

                {/* Image */}
                <ImageBoxDesigner imgSrc={agent} alt="Agent" />
                {/* Main Content */}
                <p className="text-lg leading-relaxed mb-10 text-center">
                  লোকাল মাস্টার এজেন্ট হবার সিস্টেম: এজেন্ট হবার জন্য আমাদের
                  সুপার এজেন্ট দের সাথে যোগাযোগ করতে হবে। সুপার এজেন্ট লিস্ট
                  দেখতে এই লিঙ্ক এ ক্লিক করুন।{" "}
                  <a
                    href="#"
                    className=" underline hover:text-[#ff7c7c] duration-200"
                  >
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
                  <p className="text-sm  mt-1">👤 By | January 26, 2025</p>
                </div>

                {/* Image */}
                <ImageBoxDesigner imgSrc={velki} alt="Velki Site" />
                {/* Main Content */}
                <p className="text-lg leading-relaxed mb-10 text-center">
                  ভেল্কি আমাদের জনপ্রিয় গেমিং সাইট – কিন্তু দুর্ভাগ্য বসত কিছু
                  অসৎ এবং ধান্দাবাজ ব্যক্তি আমাদের সাইটের নকল করে অনেক গুলো সাইট
                  তইরী করেছে। তাই আপনাদের{" "}
                  <a
                    href="#"
                    className=" underline hover:text-[#ff7c7c] duration-200"
                  >
                    [Read More...]
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div class="divide-y-3 divide-dashed divide-white"></div>
          <div className="">
            {/* Sidebar */}

            <Sidebar />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Velki;
