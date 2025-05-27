import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useRef, useState } from 'react';
import ImageBoxDesigner from './ImageBoxDesigner';
import HomeCardSections from './HomeCardSections';
import AgentSearchForm from './AgentSearchForm';
import AgentListTable from './AgentListTable';
import { Link, useLocation } from 'react-router-dom';
import NumberSearch from './NumberSearch';
import { FaWhatsapp } from 'react-icons/fa';

const ListComponant = ({ image, text }) => {
  const location = useLocation();

  const customerlocation = location.pathname === '/customerservics'
  const surgentlocation = location.pathname === '/suchagent'
  const customerserveice = location.pathname === '/customerservics'
  const bothignore = customerlocation || surgentlocation
  console.log(customerlocation)
  const [complainAgentNumber, setComplainAgentNumber] = useState(null);
  const complainRef = useRef();

  const handleComplainClick = (agentNumber) => {
    setComplainAgentNumber(agentNumber);
    setTimeout(() => {
      complainRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  // Determine agentType based on route
  const getAgentTypeFromPath = (path) => {
    if (path.includes('/masteragentlist')) return 'Master';
    if (path.includes('/superagentlist')) return 'Supper';
    if (path.includes('/subadminlist')) return 'Sub_admin';
    if (path.includes('/siteadminlist')) return 'Site_admin';
    return '';
  };

  const agentTypeFromPath = getAgentTypeFromPath(location.pathname);

  const [searchText, setSearchText] = useState('');
  const [searchData, setSearchData] = useState({ agentType: agentTypeFromPath });

  const handleSearch = () => {
    console.log('Search value:', searchText);
    // Refetch will trigger automatically because it's in the queryKey
  };

  const handleAgentSearch = (data) => {
    console.log('Received from form:', data);
    setSearchData({
      ...data,
      agentType: agentTypeFromPath, // ensure route type is always applied
    });
  };
  console.log('searchData', searchData);

  const { data: agents = [], isLoading, refetch } = useQuery({
    queryKey: ['agents', searchData?.agentType, searchData?.agentId, searchText],
    queryFn: async () => {
      const res = await axios.get(`https://api.win-pbu.com/api/agent?type=${searchData?.agentType || ''}&agentNumber=${searchData.agentNumber || ''}&uniqueId=${searchData?.agentId || ''}`);
      return res.data;
    },
  });
  const searchResults = agents?.filter(item => item.agentNumber === searchText)

  // console.log('agentssssss', agents);
  return (
    <div className="relative">
      <div className=" text-white  px-6 py-10 font-sans">
        <div className="max-w-6xl mx-auto   flex flex-col md:flex-row gap-8 ">
          <div className="">

            <div className="">
              <div className="mb-20">
                {
                                    searchText?.length > 0 && (
                                        <div className='text-4xl font-semibold pb-10
                                '>
                                    Search Results for: {searchText}
                                </div>
                                    )
                                }
                {/* Image */}
                <div className="mb-6">

                  {
                    customerlocation ? <ImageBoxDesigner
                      imgSrc={image}
                      alt="Rules and Regulations"
                      className=" opacity-60"
                      overlayEnabled={false}
                      height={"h-[500px]"}
                    /> : <ImageBoxDesigner
                      imgSrc={image}
                      alt="Rules and Regulations"
                      className=" opacity-60"
                      overlayEnabled={true}
                      height={"h-[300px]"}
                    />
                  }
                </div>
                <h2 className="text-5xl font-bold mb-4">
                  {text}
                </h2>
                <p
                  className=" hover:text-[#ff7c7c] duration-200"
                >
                  January 26, 2025
                </p>

                {complainAgentNumber && (
                  <div ref={complainRef} className="text-white p-4 space-y-6">
                    <h1 className='hover:text-[#ff7c7c] text-xl text-center'><a href="https://www.facebook.com/profile.php?id=61572260171810" target="_blank">লটারী! লটারী!! লটারী!!!!!...</a></h1>
                    <h1 className='hover:text-[#ff7c7c] text-xl text-center'><a href="https://www.facebook.com/profile.php?id=61572260171810" target="_blank">আপনি যদি ভেল্কির ইউজার হয়ে থাকেন তাহলে ফ্রীতে লটারী তে জয়েন করুন...</a></h1>
                    <h2 className="text-center text-xl font-bold border-b pb-2">
                      উনি ভেল্কির একজন অনলাইন সুপার এজেন্ট নাম্বার <span className="text-green-400">{complainAgentNumber}</span>
                    </h2>

                    {/* Super Agent Info */}
                    <div className=" rounded-md p-4">
                      <table className="table-auto font-semibold text-center w-full border-collapse border border-white text-left">
                        <thead>
                          <tr>
                            <th colSpan="2" className="border border-white p-2 font-bold text-center ">
                              উনি যে সব সাইটের সুপার এজেন্টঃ <span className="text-green-400">VELKI ✅</span>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-white p-2 font-bold"> উনি যে সব সাইটের মাষ্টার এজেন্টঃ</td>
                            <td className="border text-center border-white p-2">VELKI ✅<br />
ভেল্কি সাইটের লিংক গুলোঃ</td>
                          </tr>
                          <tr>
                            <td className="border border-white p-2 font-bold">উনার হোয়াটসঅ্যাপ নাম্বারঃ</td>
                            <td className="border flex flex-col justify-center items-center border-white p-2 text-center hover:text-[#ff7c7c]"><FaWhatsapp className='text-3xl text-green-500' /><p>{complainAgentNumber}</p></td>
                            
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
                            <td className="border border-white p-2 font-bold">উনার সাব এডমিন এর হোয়াটসঅ্যাপ নাম্বারঃ</td>
                            <td className="border border-white p-2 hover:text-[#ff7c7c] flex items-center gap-2">
                              <FaWhatsapp />
                              <a href="https://wa.me/60146411920" target="_blank" rel="noopener noreferrer">
                                +60146411920 
                              </a>
                            </td>
                          </tr>
                        
                          <tr>
                            <td className="border border-white p-2 font-bold">উনার এডমিন এর হোয়াটসঅ্যাপ নাম্বারঃ</td>
                            <td className="border border-white p-2 space-y-1">
                              <div className="flex items-center gap-2 hover:text-[#ff7c7c]">
                                <FaWhatsapp />
                                <a href="https://wa.me/601116085213" target="_blank" rel="noopener noreferrer">
                                  +60 11-1608 5213
                                </a>
                              </div>
                              
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                <div>
                  <h4 className="text-bold mt-3 flex gap-2 font-semibold"> <span className="border-l border-4 border-white"></span>
                    {
                      customerlocation ? <p>**প্রতারনার হাত থেকে বাচতে সবার আগে ভিজিট করুন বাজিওয়ালার সাইটঃ https://win-pbu.com **কাস্টমার সার্ভিসের কাউকেই আপনি আপনার একাউন্টের পাসোয়ার্ড দিবেন না।</p> : <div>
                        <p>এজেন্ট দের সাথে লেনদেন এর আগে WINPBU এর নিয়ম গুলো জেনে নিন!!</p>
                        <br></br>
                        <p>**প্রতারনার হাত থেকে বাচতে সবার আগে ভিজিট করুন WIN-PBU.COM **হোয়াটসঅ্যাপ ব্যাতিত অন্য কোন এপ এর মাধ্যমে যোগাযোগ বা লেনদেন করা যাবে না এবং করলে তা গ্রহনযোগ্য হবে না। **এজেন্ট পাসোয়ার্ড পরিবর্তন করে দিলে – আপনি একাউন্টে ঢুকে আবার পাসোয়ার্ড পরিবর্তন করে নিবেন। এজেন্ট যাতে কোন ভাবেই আপনার পাসোয়ার্ড না জানে। আপনার পাসোয়ার্ড আপনি কাউকেই দিবেন না – সে যেই হউক না কেন। **সকাল ৯ঃ৪৫ এর আগে এবং রাত ৯ঃ৪৫ এর পরে কোন ইউজার যদি এজেন্ট কে টাকা পাঠায় – অই টাকার দায়ভার WINPBU নিবে না। **প্রতিবার এজেন্ট এর কাছ থেকে পয়েন্ট নেবার আগে – এজেন্ট এর কাছে লেনদেন এর তথ্য জেনে নিতে হবে। যেহেতু এজেন্ট এক এক সময় এক ভাবে লেনদেন করে সেহেতু এই তথ্য জানা জরুরী। **এজেন্ট এর বিরুদ্ধে কোন অভিযোগ থাকলে এজেন্ট এর নামের শেষে অভিযোগ বাটন এ ক্লিক করলে যে হোয়াটসঅ্যাপ নাম্বার আসবে – তাকে অভিযোগ করতে হবে।</p>
                      </div>
                    }



                  </h4>
                </div>

                {/* form  */}
                {
                  bothignore || <AgentSearchForm onSearch={handleAgentSearch} />
                }
                {
                  surgentlocation && <NumberSearch onSearch={handleAgentSearch}></NumberSearch>
                }

                {
                  customerserveice ? <>

                    <div className="w-full my-4">
                      <table className="w-full border-collapse border font-bold border-white text-white text-center text-base leading-snug">
                        <thead>
                          <tr>
                            <th className="border border-white px-1 py-2 whitespace-nowrap">ID NO</th>
                            <th className="border border-white px-1 py-2 whitespace-nowrap">TYPE</th>
                            <th className="border border-white px-1 py-2 whitespace-pre-wrap">WHTS</th>
                            <th className="border border-white px-1 py-2 whitespace-pre-wrap">PHONE NUMBER</th>
                            
                          </tr>
                        </thead>
                        <tbody>
                          
                            <tr>
                              <td className="border border-white px-1 py-2">01</td>
                              <td className="border border-white px-1 py-2">কাস্টমার সার্ভিস</td>
                              <td className="border border-white px-1 py-2 whitespace-pre-wrap break-words">
                                <a
                                  href={`https://wa.me/+971562076946`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="hover:text-[#ff7c7c] duration-200 text-white underline break-all"
                                >
                                   <FaWhatsapp className='text-green-500 text-3xl m-auto'></FaWhatsapp>
                                </a>
                                
                              </td>
                              <td className="border border-white px-1 py-2 whitespace-pre-wrap break-words">
                                <a
                                  href={`https://wa.me/+971562076946`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="hover:text-[#ff7c7c] duration-200 text-white underline break-all"
                                >
                                   +971 56 207 6946
                                </a>
                              </td>
                              
                            </tr>
                            {/* <tr>
                              <td className="border border-white px-1 py-2">01</td>
                              <td className="border border-white px-1 py-2">কাস্টমার সার্ভিস</td>
                              <td className="border border-white px-1 py-2 whitespace-pre-wrap break-words">
                                <a
                                  href={`https://wa.me/+8801772517065`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="hover:text-[#ff7c7c] duration-200 text-white underline break-all"
                                >
                                   <FaWhatsapp className='text-green-500 text-3xl m-auto'></FaWhatsapp>
                                </a>
                                
                              </td>
                              <td className="border border-white px-1 py-2 whitespace-pre-wrap break-words">
                                <a
                                  href={`https://wa.me/+8801772517065`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="hover:text-[#ff7c7c] duration-200 text-white underline break-all"
                                >
                                    +880 1772-517065
                                </a>
                              </td>
                              
                            </tr> */}
                          
                        </tbody>
                      </table>
                    </div>
                  </> :(

                    searchResults.length > 0 ? (
                    <AgentListTable data={searchResults} onComplainClick={handleComplainClick}></AgentListTable> 

                    ): 
                    <AgentListTable data={agents} onComplainClick={handleComplainClick} />

                   
                  )
                }
                {/* table */}


                {/* next and previuse */}
                <div className="flex justify-between mt-4 text-xl">
                  <Link to="/mastteragentlist" className="hover:text-[#ff7c7c]">previous: <br /> Master Agent List</Link>
                  <Link to="/superagentlist" className="hover:text-[#ff7c7c]">Next: <br /> Super Agent List</Link>

                </div>




              </div>

            </div>
          </div>
          <div className="border-l border-dotted"></div>

          <div className="sticky top-20 h-fit self-start">
            {/* Sidebar */}

            <aside>
              <h3 className="text-lg font-semibold mb-2">Search</h3>
              <div className="flex border border-gray-500 mb-16">
                <input
                  type="text"
                  // value={searchData.agentNumber}
                  onChange={(e) => setSearchText(e.target.value)}
                  className="flex-grow px-3 py-4 bg-transparent text-white focus:outline-none"
                />
                <button
                  onClick={handleSearch}
                  className="bg-yellow-500 hover:bg-[#ff7c7c] text-black font-semibold px-4">
                  Search
                </button>
              </div>
              <h3 className="text-2xl font-semibold mb-4 border-dotted border-b-2 border-gray-600 pb-1">
                Recent Posts
              </h3>
              <ul className="space-y-4 text-sm ">
                <li className="border-b-1 border-dotted border-gray-600 pb-1 cursor-pointer hover:text-orange-600 hover:underline duration-200">
                  {" "}
                  <Link to={"/suchagent"}>এজেন্ট কে ফেন নাম্বার দিয়ে খুঁজুন</Link>
                </li>
                <li className="border-b-1 border-dotted border-gray-600 pb-1 cursor-pointer hover:text-orange-600 hover:underline duration-200">
                  {" "}
                  <Link to={"/velki"}>কিভাবে আমি ভেল্কি তে এজেন্ট হতে পারি?</Link>
                </li>
                <li className="border-b-1 border-dotted border-gray-600 pb-1 cursor-pointer hover:text-orange-600 hover:underline duration-200">
                  {" "}
                  <Link to={"/velki"}> ভেল্কি সাইট</Link>
                </li>
                <li className="border-b-1 border-dotted border-gray-600 pb-1 cursor-pointer hover:text-orange-600 hover:underline duration-200">
                  {" "}
                  <Link to={"/questionanswer"}>
                    {" "}
                    একাউন্ট খোলার নিয়ম বা শর্ত গুলো কি কি?
                  </Link>
                </li>
                <li className="border-b-1 border-dotted border-gray-600 pb-1 cursor-pointer hover:text-orange-600 hover:underline duration-200">
                  {" "}
                  <Link to={"/howtoshare"}> WIN-PBU তে কিভাবে নেনদেন করবেন?</Link>
                </li>
              </ul>

              <h3 className="text-2xl font-semibold mt-6 border-b-2 border-dotted border-gray-600 pb-1">
                Recent Comments
              </h3>
              <p className="text-sm  mt-2">No comments to show.</p>
            </aside>
          </div>
        </div>
      </div>

      <HomeCardSections></HomeCardSections>
    </div>
  );
};

export default ListComponant;