import React from "react";
import Container from "../../components/Container";
import HomeCardSections from "../../components/HomeCardSections";
import registerImage from "../../assets/REGISTER.png";
import { Link } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
const HowToOpenAccount = () => {
  return (
    <div>
      <Container>
        <div className="relative">
          <div className=" text-white  py-10 font-sans">
            <div className="max-w-6xl mx-auto   flex flex-col md:flex-row gap-8  ">
              <div className="md:w-[75%] ml-5">
                <div className="">
                  <div className="mb-20">
                    {/* Image */}
                    <div className="mb-6">
                      <img
                        src={registerImage}
                        alt="image"
                        className="w-full min-h-52"
                      />
                    </div>
                    <h2 className="text-5xl font-bold mb-4">
                      কিভাবে একাউন্ট খুলবেন?
                    </h2>
                    <p className=" hover:text-[#ff7c7c] duration-200">
                      June 31, 2025
                    </p>

                    <div>
                      <div className="text-bold mt-3 flex gap-2 font-semibold">
                        <div className="space-y-4 font-normal text-sm">
                          <h1>
                            একাউন্ট আপনি নিজে নিজে খুলতে পারবেন না। তাই একাউন্ট
                            খোলার আগে মনোযোগ দিয়ে পড়ুনঃ:
                          </h1>
                          <h1>
                            ভেল্কি তে একাউন্ট করতে হলে আপনার এজেন্ট এর মাধ্যমে
                            একাউন্ট খুলতে হবে। এজেন্ট এর মাধ্যমেই টাকা ডিপোজিট
                            এবং উইথড্র করতে হবে। আপনি যে এজেন্ট এর কাছ থেকে
                            একাউন্ট খুলবেন তার সাথেই সব সময় লেনদেন করতে হবে।
                            ঠিক কোন এজেন্ট কে টাকা দিবেন এবং কিভাবে তার সাথে
                            লেনদেন করবেন তার বুঝতে হলে আপনার নিম্বের তথ্য গুলো
                            পড়া জরুরী।
                          </h1>
                          <h1>
                            আমাদের এজেন্ট লিষ্ট দেখতে নিচের লিঙ্ক এ ক্লিক করুনঃ
                          </h1>
                          <Link to="/masteragentlist">
                            মাষ্টার এজেন্ট লিস্ট
                          </Link>
                          <p>
                            এই এজেন্ট লিষ্ট এর বাইরে কারো সাথে লেনদেন করলে
                            আপনাকে নিজ দ্বায়িত্বে লেনদেন করতে হবে। লিষ্ট এর
                            বাইরে কোন এজেন্ট এর দায়ভার ভেল্কি নিবে না এবং লিষ্ট
                            এর এজেন্ট দের সব দায়ভার ভেল্কি কোম্পানীর। এজেন্ট
                            লিষ্ট এর এজেন্ট দের সাথে ইউজার দের শুধু মাত্র
                            হোয়াটসাপ এর মাধ্যমে যোগাযোগ করতে হবে। হোয়াটসাপ
                            ছাড়া অন্য কোন মাধ্যমে যোগাযোগ করলে বা লেনদেন করলে
                            তা গ্রহনযোগ্য হবে না। হোয়াটসাপ এ যোগাযোগ করতে হলে
                            এজেন্ট লিস্টে হোয়াটসাপ আইকন উপরে ক্লিক করুন অবথা
                            ফোন নাম্বার টি মোবাইলে সেভ করে তাকে হোয়াটসাপ এ মসেজ
                            পাঠাতে পারবেন। হোয়াটসাপ এপ টি আপনার মোবাইলে আগে
                            থেকেই থাকতে হবে। না থাকলে গুগুল প্লে থেকে ইন্সটল করে
                            নিন।
                          </p>
                          <p>
                            অন্যান্য সাহায্যের জন্যঃ তথ্যাদি এবং সাহায্যের জন্য
                            হোয়াটসাপ নাম্বারঃ +15714028916 (আকাশ মালিক) ফেসবুক
                            গ্রুপের লিঙ্কঃ
                            https://www.facebook.com/groups/velki.live এই ফেসবুক
                            গ্রুপ এবং একটি ব্যাকআপ গ্রুপ ছাড়া আমাদের আর কোন
                            ফেসবুক গ্রুপ নেই। এছাড়া আপনারা আমাদের কাস্টমার
                            সার্ভিস এর সাথে সরাসরি যোগাযোগ করতে পারেন। তাদের
                            নাম্বার গুলো জানতে নিচের লিঙ্কে ক্লিক করুনঃ কাষ্টমার
                            সার্ভিসে একাউন্ট খোলার আগে নিচের লিঙ্কে ক্লিক করে
                            শর্ত সমুহ জেনে নিন। এই শর্ত সমুহ জানা অত্যন্ত জরুরীঃ
                            নিয়মগুলো জানার জন্য এই লিঙ্ক এ ক্লিক করুন।
                          </p>
                          {/* next and previuse */}
                          <div className="flex justify-between mt-4 text-2xl">
                            <Link
                              to="/how-to-be-a-agent"
                              className="hover:text-[#ff7c7c]"
                            >
                              previous: <br /> কিভাবে আমি ভেল্কি তে এজেন্ট হতে
                              পারি?
                            </Link>
                            <Link
                              to="/superagentlist"
                              className="hover:text-[#ff7c7c]"
                            >
                              Next: <br /> Super Agent List
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sticky top-20 h-fit self-start md:w-[25%]">
                {/* Sidebar */}

                <Sidebar />
              </div>
            </div>
          </div>
        </div>
        <HomeCardSections></HomeCardSections>
      </Container>
    </div>
  );
};

export default HowToOpenAccount;
