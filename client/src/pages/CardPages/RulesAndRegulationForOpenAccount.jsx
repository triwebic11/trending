import React from "react";
import Sidebar from "../../components/Sidebar";
import Container from "../../components/Container";
import HomeCardSections from "../../components/HomeCardSections";
import rulesImage from "../../assets/rules-and-regulations.png";
import { Link } from "react-router-dom";
const RulesAndRegulationForOpenAccount = () => {
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
                        src={rulesImage}
                        alt="image"
                        className="w-full min-h-52"
                      />
                    </div>
                    <h2 className="text-5xl font-bold mb-4">
                      একাউন্ট খোলার নিয়ম বা শর্ত গুলো কি কি?
                    </h2>
                    <p className=" hover:text-[#ff7c7c] duration-200">
                      June 31, 2025
                    </p>

                    <div>
                      <div className="text-bold mt-3 flex gap-2 font-semibold">
                        <div className="space-y-4 font-normal text-sm">
                          <p>WINPBU – শর্ত এবং নিয়ম:</p>
                          <p>
                            এই শর্ত গুলো না পড়ে আপনারা কখনোই একাউন্ট খুলবেন
                            না!!
                          </p>
                          <p>
                            সকল সুপার এবং মাস্টার এজেন্ট এবং সকল ইউজার এই
                            নিয়মের অন্তর্গত।
                          </p>
                          <p>পয়েন্ট কেনা বেচাঃ</p>
                          <p>
                            ** ওয়েবসাইট টি যেহেতু বেটফেয়ার এর মাধ্যমে চলে –
                            সেহেতু বেটফেয়ার এর নিয়ম এবং স্বিদ্ধান্ত অনুযায়ী
                            সব কিছু হয়। এই বেট সাইটে বেট করতে হলে আপনাকে
                            বেটফেয়ার এবং WINPBU র ম্যানেজমেন্ট যে কোন
                            স্বিদ্ধান্ত আপনাকে বিনা শর্তে মেনে নিতে হবে।
                            <br />
                            ইউজার এর জন্য নির্দেশনা এবং শর্তঃ
                            <br />
                            ** প্রতিবার এজেন্ট এর কাছ থেকে পয়েন্ট নেবার আগে –
                            এজেন্ট এর কাছে লেনদেন এর তথ্য জেনে নিতে হবে। যেহেতু
                            এজেন্ট এক এক সময় এক ভাবে লেনদেন করে সেহেতু এই তথ্য
                            জানা জরুরী।
                            <br />
                            ** সকাল ৯ঃ৪৫ এর আগে এবং রাত ৯ঃ৪৫ এর পরে কোন ইউজার
                            যদি এজেন্ট কে টাকা পাঠায় – অই টাকার দায়ভার WINPBU
                            নিবে না।
                            <br />
                            ** বিকাশ/নগদ এ টাকা পাঠানোর ২ ঘন্টার মধ্যে এজেন্ট এর
                            সাথে যোগাযোগ করে পয়েন্ট নিতে হবে। ২ ঘন্টা পরে –
                            টাকা কাউন্ট করা হবে না।
                            <br />
                            ** প্রতিদিন বাংলাদেশ সময় ৯ঃ৩০ মিনিট এ – একাউন্ট এ
                            কত পয়েন্ট আছে – তার একটা স্ক্রীনশট রাখতে হবে। যদি
                            আপনি পয়েন্ট এর হিসাব না বুঝেন – তাহলে এই তথ্য
                            আপনাকে সাহায্য করবে।
                            <br />
                            ** এজেন্ট ইউজার এর অনুমতি ব্যাতীত কোন পয়েন্ট
                            ডিপোজিট বা উইথড্র করলে – সঙ্গে সঙ্গে এজেন্ট কে
                            অভিযোগ করতে হবে – যদি এজেন্ট উত্তর না দেয় – তাহলে
                            তার সুপার এজেন্ট কে অভিযোগ করতে হবে। যদি সুপার
                            এজেন্ট উত্তর না দেয় – তাহলে এডমিন কে অভিযোগ করতে
                            হবে।
                            <br />
                            ** এজেন্ট যদি ভুল করে কোন পয়েন্ট ডিপোজিট করে ফেলে –
                            তাহলে ইউজার অই পয়েন্ট দিয়ে কোন ভাবেই বেট ধরতে
                            পারবেন না। যদি পয়েন্ট দিয়ে বেট ধরে ফেলেন – এজেন্ট
                            বা WINPBU ম্যানেজমেন্ট এর যে কোন স্বিদ্ধান্ত ইউজার
                            কে মেনে তে নিতে হবে।
                          </p>
                          <p>
                            ** এজেন্ট এর সাথে আপনার হোয়াটসাপ বা মেসেঞ্জার এর
                            তথ্যাদি এবং সব লেনদেন এর তথ্যাদি অন্তত ১৫ দিন
                            সংরক্ষন করতে হবে। <br /> ** WINPBU তে হোয়াটসাপ
                            ছাড়া আর কোন এপ দিয়ে লেনদেন করা যাবে না।। <br /> **
                            WINPBU এর একটি আইডি র জন্য একজন ইউজার একের অধিক
                            হোয়াটসাপ ব্যবহার করতে পারবে না। <br /> ** WINPBU তে
                            একটি হোয়াটসাপ দিয়ে একের অধিক আইডি খোলা যাবে না।{" "}
                            <br />
                            ** খেলা শেষ হয়ে গেলে – বেট স্যাটেল হতে অথবা পয়েন্ট
                            ফেরত দিতে ১৫ মিনিট থেকে ১ ঘন্টা সময় লাগে। তাই ১
                            ঘন্টার আগে কেন পয়েন্ট ফেরত আসলো না এই বিষয়ে অভিযোগ
                            করা যাবে না। <br /> ** ইউজার কে ক্যাসিনো খেলার আগে
                            ক্যাসিনো খেলার সব নিয়ম জানার জন্য নির্দেশ দেয়া
                            হচ্ছে। <br />
                            ** সাইটে অন্য গেইম গুলো খেলার আগে – নিয়ম গুলো জেনে
                            নিন। কোন কিছু না বুঝলে ফেইসবুক গ্রুপে পোষ্ট করতে
                            হবে। <br /> ** মাঝে মাঝে বেটফেয়ার স্কোর ভুল দেখায়
                            – এই জন্য ইউজারদের কে, WINPBU এর পাশাপাশি অন্য সাইট
                            থেকেও স্কোর দেখার জন্য নির্দেশ দেয়া হচ্ছে। <br />{" "}
                            ** বেট করার পরে ইউজার দের বেট ম্যাচ হয়েছে কিনা তা
                            দেখার জন্য অনুরোধ করা হলো। বেট ম্যাচ না হলে পরে সেই
                            বেট ক্যান্সেল হয়ে যায়। <br /> ** খেলা শেষ হয়ে
                            গেলে – বেট স্যাটেল হতে অথবা পয়েন্ট ফেরত দিতে ১৫
                            মিনিট থেকে ১ ঘন্টা সময় লাগে। কিছু কিছু ক্ষেত্রে এই
                            সময় ২৪ ঘন্টা পর্যন্ত যেতে পারে। <br /> ** পয়েন্ট
                            এর হিসাব এর কোন অভিযোগ যদি বেটফেয়ার কে করা হয়,
                            তাদের দেয়া সমাধান ইউজার কে মেনে নিতে হবে। কারন
                            এজেন্ট এর এই খানে কিছুই করার নেই। বেটফেয়ার বা
                            WINPBU সাইটের শর্তঃ <br /> ** বেটফেয়ার কোন কোন সময়
                            বেট স্যাটেল করতে ভুল করতে পারে। <br />
                            ** যদি বেটফেয়ার কোন বেট স্যাটেল করতে ভুল করে – তা
                            পরে রিস্যাটেল করতে পারে বা করে। <br /> ** বেটফেয়ার
                            বেট যখন স্যাটেল করে তখন সে তার নিজস্ব স্কোর দেখে
                            স্যাটেল করে। তাদের নিজস্ব স্কোর এর সাথে অন্যান্য
                            ওয়েবসাইট এর স্কোর এর মিল নাও থাকতে পারে। <br /> **
                            কোন বেট এ কে কত পয়েন্ট পাবে – তার স্বিদ্ধান্ত হয়
                            বেটফেয়ার এর মাধ্যমে। যদি বেটফেয়ার এর কোন ভুল এর
                            কারনে কোন পয়েন্ট কাটা যায় – সেই ক্ষেত্রে ইউজার রা
                            অভিযোগ করতে পারবেন ফেসবুক গ্রূপে অথবা তার এজেন্ট কে
                            অথবা কাস্টমার্সাভিস এ। ** সার্ভার এর সমস্যা বা
                            টেকনিক্যাল কোন সমস্যার জন্য – বেট করতে সমস্যা বা
                            অন্য কোন সমস্যা হয় – সেই ক্ষেত্রে ইউজার বেটফেয়ার
                            বা WINPBU এর স্বিদ্ধান্ত ই মেনে নিতে হবে। <br />
                            ** কোন গেইম এর রেজাল্ট এর উপরে ভিত্তি করে – বেট
                            স্যাটেল হয়। কিন্তু বেটফেয়ার এর শর্ত অনুযায়ী তাদের
                            ক্ষমতা আছে যে – তারা কোন গেইম এর বেট কিভাবে স্যাটেল
                            হবে – তারা নিজেরা স্বিদ্ধান্ত নিতে পারে। তার মানে
                            রেজাল্ট এর বাইরেও তাদের স্বিদ্ধান্ত মেনে নিতে হবে।
                            বেট ভয়েড বা বাতিলঃ <br /> ** বেটফেয়ার বা WINPBU যে
                            কোন বেট যে কোন সময়ে বাতিল করতে পারে। <br /> ** বেট
                            বাতিল এর হাজার হাজার নিয়ম আছে। এই নিয়ম এর জন্য বেট
                            ভয়েড রুলস এর লিঙ্ক দেখতে হবে। <br /> ** বেট বাতিল
                            হলে – অই বেট এর লাভ লস কিছুই হবে না। <br /> ** বেট
                            কেন বাতিল হল – তার কারন আমরা জানার চেষ্টা করতে পারি
                            – WINPBU বা বেটফেয়ার থেকে। কারন হিসাবে তারা যাই
                            বলবে তাই ইউজার কে মেনে নিতে হবে।
                          </p>
                        </div>
                      </div>

                      {/* next and previuse */}
                      <div className="flex justify-between mt-4 text-2xl">
                        <Link
                          to="/how-to-be-a-agent"
                          className="hover:text-[#ff7c7c]"
                        >
                          previous: <br /> কিভাবে আমি ভেল্কি তে এজেন্ট হতে পারি?
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
                <div className="border-l border-dotted"></div>
              </div>
              <div className="sticky top-20 h-fit self-start md:w-[25%]">
                {/* Sidebar */}

                <Sidebar />
              </div>
            </div>

            <HomeCardSections></HomeCardSections>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default RulesAndRegulationForOpenAccount;
