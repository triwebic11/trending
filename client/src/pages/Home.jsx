import React, { useRef, useState } from "react";
import Container from "../components/Container";
import SecondSlid from "../components/SecondSlid";
import AgentSearchForm from "../components/AgentSearchForm";

import ImageBoxDesigner from "../components/ImageBoxDesigner";
import HomeCardSections from "../components/HomeCardSections";
import { FaWhatsapp } from "react-icons/fa";

const Home = () => {
  const [complainAgentNumber, setComplainAgentNumber] = useState(null);
  const complainRef = useRef();
  console.log('complainRef', complainAgentNumber);

  const [searchData, setSearchData] = useState({ agentType: '' });
  console.log('searchData', searchData);
  const [data, setdata] = useState([])

  const [agentType, setAgentType] = useState('');
  const [agentId, setAgentId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`https://api.win-pbu.com/api/agent?type=${agentType}&uniqueId=${agentId}`);
    const result = await response.json();
    setdata(result);
    console.log('result*************', result);
  };


  const handleComplainClick = (agentNumber) => {
    setComplainAgentNumber(agentNumber);
    setTimeout(() => {
      complainRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };
  return (
    <div>
      <Container className="my-6  text-center text-white text-8xl">
        <div className="relative">
          <SecondSlid />
          <div className="text-left my-5">
            <div>
              <h1 className="text-7xl font-bold">WINPBU তে স্বাগতম</h1>
            </div>
            <div className="text-base font-semibold my-4" >
              <div className="flex flex-col items-center justify-center text-white px-4 py-10">
                <h2 className="text-center text-lg font-semibold mb-2">
                  এজেন্ট এর আইডি নাম্বার দিয়ে খুঁজুন:
                </h2>
                <form
                  onSubmit={handleSubmit}
                  className="border border-white rounded-md p-6 w-full max-w-sm space-y-4"
                >
                  <div>
                    <label className="block mb-1">Agent Type:</label>
                    <select
                      value={agentType}
                      onChange={(e) => setAgentType(e.target.value)}
                      className="w-full px-3 py-2 bg-[#1e1e1e] border border-white rounded text-white"
                      required
                    >
                      <option value="">-- এজেন্ট বাছাই করুন --</option>
                      <option value="Master">মাস্টার এজেন্ট</option>
                      <option value="Supper">সুপার এজেন্ট</option>
                      <option value="Sub_admin">সাব এডমিন</option>
                      <option value="Site_admin">সাইট এডমিন</option>
                    </select>
                  </div>

                  <div>
                    <label className="block mb-1">Agent ID:</label>
                    <input
                      type="text"
                      value={agentId}
                      onChange={(e) => setAgentId(e.target.value)}
                      className="w-full px-3 py-3 bg-[#1e1e1e] border border-white rounded text-white"
                      placeholder="Enter Agent ID"
                      required
                    />
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {
              data?.map((row) => (
                <div ref={complainRef} className="text-white p-4 text-base space-y-6">
                  <h2 className="text-center text-xl font-bold hover:text-[#ff7c7c]  pb-2">লটারী! লটারী!! লটারী!!!!!...</h2>
                  <h2 className="text-center text-xl hover:text-[#ff7c7c] font-bold pb-2">
                    আপনি যদি ভেল্কির ইউজার হয়ে থাকেন তাহলে ফ্রীতে লটারী তে জয়েন করুন...
                  </h2>
                  <h2 className="text-center text-xl font-bold border-b pb-2">
                    উনি ভেল্কির একজন অনলাইন {row?.type} Agent নাম্বার <span className="hover:text-[#ff7c7c]">{row?.agentNumber}</span>
                  </h2>

                  {/* Super Agent Info */}
                  <div className=" rounded-md p-4">
                    <table className="table-auto w-full border-collapse border border-white text-left">
                      <thead>
                        <tr>
                          <th colSpan="2" className="border border-white p-2 font-bold text-center ">
                            উনি যে সব সাইটের এজেন্টঃ <span className="hover:text-red-300">{row?.sites} ✅</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-white p-2 font-bold">উনার সুপার এজেন্ট আইডিঃ</td>
                          <td className="border border-white p-2">{row?.uniqueId}</td>
                        </tr>
                        <tr>
                          <td className="border border-white p-2 font-bold">উনার হোয়াটসঅ্যাপ নাম্বারঃ</td>
                          <td className="border border-white p-2 hover:text-[#ff7c7c] flex items-center gap-2">
                            <FaWhatsapp />
                            <a href={`https://wa.me/${row?.agentNumber}`} target="_blank" rel="noopener noreferrer">
                              {row?.agentNumber}
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Upline Info */}
                  <div className=" rounded-md p-4">


                    <p className=" text-center mb-2">
                      এই ভেল্কির অনলাইন সুপার এজেন্ট এর আপলাইনের তথ্যঃ <br />
                      উনার অনলাইন সুপার এজেন্ট এর বিরুদ্ধে অভিযোগ করতে হলে নিচের যে কোন নাম্বার এ হোয়াটসঅ্যাপ এ মেসেজ দিতে হবে
                    </p>

                    <table className="table-auto w-full border-collapse border border-white text-left">
                      <tbody>
                        <tr>
                          <td className="border border-white p-2 font-bold">উনার সাব এডমিন এর এডমিন আইডিঃ</td>
                          <td className="border border-white p-2">g</td>
                        </tr>
                        <tr>
                          <td className="border border-white p-2 font-bold">উনার সাব এডমিন এর হোয়াটসঅ্যাপ নাম্বারঃ</td>
                          <td className="border border-white p-2 hover:text-[#ff7c7c] flex items-center gap-2">
                            <FaWhatsapp />
                            <a href="https://wa.me/60172774046" target="_blank" rel="noopener noreferrer">
                              +60172774046
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-white p-2 font-bold">উনার এডমিন এর এডমিন আইডিঃ</td>
                          <td className="border border-white p-2">Akash Malik</td>
                        </tr>
                        <tr>
                          <td className="border border-white p-2 font-bold">উনার এডমিন এর হোয়াটসঅ্যাপ নাম্বারঃ</td>
                          <td className="border border-white p-2 space-y-1">
                            <div className="flex items-center gap-2 hover:text-[#ff7c7c]">
                              <FaWhatsapp />
                              <a href="https://wa.me/855969477041" target="_blank" rel="noopener noreferrer">
                                +855969477041
                              </a>
                            </div>
                            <div className="flex items-center gap-2 hover:text-[#ff7c7c]">
                              <FaWhatsapp />
                              <a href="https://wa.me/855969332241" target="_blank" rel="noopener noreferrer">
                                +855969332241
                              </a>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>))
            }


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
                আমাদের সাইটে একাউন্ট করতে হলে আপনার এজেন্ট এর মাধ্যমে একাউন্ট
                খুলতে হবে। এজেন্ট এর মাধ্যমেই টাকা ডিপোজিট এবং উইথড্র করতে হবে।
                আপনি যে এজেন্ট এর কাছ থেকে একাউন্ট খুলবেন তার সাথেই সব সময়
                লেনদেন করতে হবে। ঠিক কোন এজেন্ট কে টাকা দিবেন এবং কিভাবে তার
                সাথে লেনদেন করবেন তার বুঝতে হলে আপনার নিম্বের তথ্য গুলো পড়া
                জরুরী।
              </p>
              <br />
              <p className="font-bold">এজেন্ট লিস্টঃ </p>
              <p>
                একাউন্ট খুলতে নিম্বের অনলাইন এজেন্ট লিস্ট এ ক্লিক করুন। এজেন্ট
                লিষ্ট এর এজেন্ট দের সাথে ইউজার দের শুধু মাত্র হোয়াটসাপ এর
                মাধ্যমে যোগাযোগ করতে হবে। হোয়াটসাপ ছাড়া অন্য কোন মাধ্যমে
                যোগাযোগ করলে বা লেনদেন করলে তা গ্রহনযোগ্য হবে না। হোয়াটসাপ এ
                যোগাযোগ করতে হলে এজেন্ট লিস্টে হোয়াটসাপ আইকন উপরে ক্লিক করুন
                অথবা ফোন নাম্বার টি মোবাইলে সেভ করে তাকে হোয়াটসাপ এ মসেজ পাঠাতে
                পারবেন। হোয়াটসাপ এপ টি আপনার মোবাইলে আগে থেকেই থাকতে হবে। না
                থাকলে গুগুল প্লে থেকে ইন্সটল করে নিন।
              </p>
            </div>
          </div>
        </div>
      </Container>
      <HomeCardSections />
    </div>
  );
};

export default Home;
