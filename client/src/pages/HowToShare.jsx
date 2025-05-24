import React from "react";
import money from "../assets/MONEY-TRANSFER.png";
import Container from "../components/Container";
import ImageBoxDesigner from "../components/ImageBoxDesigner";
import Sidebar from "../components/Sidebar";
import HomeCardSections from "../components/HomeCardSections";
const HowToShare = () => {
  return (
    <div
      style={{ fontFamily: "arial" }}
      className=" text-white  px-6 py-10 font-sans"
    >
      <Container className=" flex flex-col gap-8 ">
        <div className="flex flex-col md:flex-row gap-8 ">
          {/* Category Title */}

          <div className="">
            <div className="mb-20">
              {/* Image */}

              <ImageBoxDesigner
                imgSrc={money}
                alt="Money Transfer"
                height={"350px"}
              />
              <div className="mb-6 text-center">
                <h1 className="text-3xl font-bold mt-3  ">
                  WINPBU তে কিভাবে লেনদেন করবেন?
                </h1>
                <p className="text-sm  mt-3">👤 By | January 26, 2025</p>
              </div>
              {/* Main Content */}
              <h1 className="text-md mb-3">
                বিকাশ / নগদ / রকেট বা অন্যান্য মোবাইল ব্যাংকিং এ কিভাবে লেনদেন
                করবেন?
              </h1>
              <div>
                <h1 className="text-xs">
                  ইউজার যখন এজেন্ট কে টাকা পাঠাবে এবং এজেন্ট যখন ইউজার কে টাকা
                  পাঠাবেঃ-
                </h1>
                <ul className="text-xs my-6  list-disc ml-20 ">
                  <li>
                    ইউজার যদি এজেন্টর বিকাশ পার্সোনাল এ টাকা পাঠায় ১০ পয়েন্ট
                    এর জন্য ক্যাশ ইন বা সেন্ড ম্যানি করবে ১০২০ টাকা।
                  </li>
                  <li>
                    ইউজার যদি এজেন্টের বিকাশ এজেন্ট এ টাকা পাঠায় ১০ পয়েন্টের
                    জন্য ক্যাশ আউট করবে ১০০০ টাকা।
                  </li>
                  <li>
                    এজেন্ট যদি ইউজার এর বিকাশ পার্সোনাল এ টাকা পাঠায় ১০
                    পয়েন্টের জন্য এজেন্ট ক্যাশ ইন করবে ১০০০ টাকা।
                  </li>
                  <li>
                    এজেন্ট যদি ইউজার এর বিকাশ এজেন্ট এ টাকা পাঠায় ১০ পয়েন্ট এর
                    জন্য ক্যাশ আউট করবে ৯৮০ টাকা।
                  </li>
                </ul>
                <h1 className="text-md my-3">
                  বিকাশ / নগদ / রকেট বা অন্যান্য মোবাইল ব্যাংকিংএর সময় সীমাঃ-
                </h1>
                <ul className="text-xs mb-4 list-disc ml-20">
                  <li>
                    মোবাইল ব্যাংকিং এর সময় সকাল ৯ টা ৪৫ থেকে দুপুর ১ টা
                    পর্যন্ত, তার পরে দুপুর ৩ টা থেকে রাত ৯ টা ৪৫ পর্যন্ত।
                  </li>
                  <li>
                    এই সময়ের বাইরে কোন ভাবেই কোন লেনদেন করা যাবে না। রাত ৯ টা
                    ৪৫ এর পরে কেউ যদি টাকা পাঠায় তার দায় ভার কোম্পানী নিবে না।
                  </li>
                  <li>
                    ডিপোজিট এবং উইথড্র তে ১৫ মিনিট থেকে ১ ঘন্টা সময় পর্যন্ত
                    লাগতে পারে।
                  </li>
                  <li>
                    ইউজার দিনে ১ বার ডিপোজিট এবং ১ বার উইথড্র করতে পারবেন।
                  </li>
                  <li>
                    প্রতিবার টাকা পাঠানোর আগে – এজেন্ট কাছ থেকে বিকাশ নগদ রকেট
                    নাম্বার চেয়ে নিবেন। এটা বাধ্যতামুলক।
                  </li>
                </ul>
                <h1 className="mb-4 mt-10">
                  ব্যাংকে কিভাবে এ কিভাবে লেনদেন করবেন?
                </h1>
                <ul className="mb-4 list-disc text-xs ml-20">
                  <li>
                    ১ লাখ টাকা নিচে কোন এমাউন্ট ব্যাংকে ডিপোজিট বা উইথড্র করা
                    যাবে না।
                  </li>
                  <li>
                    কোন ইউজার ব্যাংকে ডিপোজিট করলে আমাদের ডিপোজিট ভেরিফাই করতে ২
                    দিন পর্যন্ত সময় লাগতে পারে।
                  </li>
                  <li>
                    কোন ইউজার ব্যাংকে উইথড্র চাইলে – পরের দিন উইথড্র পাবেন এবং
                    প্রতিলাখে ১০০০ টাকা উইথড্র চার্জ দিতে হবে।
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Sidebar />
        </div>

        <HomeCardSections />
      </Container>
    </div>
  );
};

export default HowToShare;
