import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import image from '../../assets/telephone.png';
import NumberSearch from '../../components/NumberSearch';
import HomeCardSections from '../../components/HomeCardSections';
const HowToBeAgent = () => {
    const location = useLocation();

    const customerlocation = location.pathname === '/customerservics'
    const surgentlocation = location.pathname === '/suchagent'
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


    console.log('searchData', searchData);
    const encodedNumber = encodeURIComponent(searchData?.agentNumber); // "+601112206352" → "%2B601112206352"


    const { data: agents = [], isLoading, refetch } = useQuery({
        queryKey: ['agents', searchData?.agentType, searchData?.agentId, searchText, encodedNumber],
        queryFn: async () => {
            const res = await axios.get(`https://api.win-pbu.com/api/agent?type=${searchData?.agentType || ''}&agentNumber=${encodedNumber || ''}&uniqueId=${searchData?.agentId || ''}`);
            return res.data;
        },
    });
    console.log('Agents data:', agents);
    return (
        <div className="relative">
            <div className=" text-white  px-6 py-10 font-sans">
                <div className="max-w-6xl mx-auto   flex flex-col md:flex-row gap-8 ">
                    <div className="w-[75%]">

                        <div className="">
                            <div className="mb-20">
                                {/* Image */}
                                <div className="mb-6">
                                    <img src={image} alt="image" className='w-full min-h-52' />
                                </div>
                                <h2 className="text-5xl font-bold mb-4">
                                    এজেন্ট কে ফোন নাম্বার দিয়ে খুঁজুন
                                </h2>
                                <p
                                    className=" hover:text-[#ff7c7c] duration-200"
                                >
                                    June 31, 2025
                                </p>


                                <div>
                                    <h4 className="text-bold mt-3 flex gap-2 font-semibold"> <span className="border-l border-4 border-white"></span>

                                        <div className='space-y-4 font-normal text-lg'>
                                            <p>লোকাল মাস্টার এজেন্ট হবার সিস্টেম:</p>
                                            <p>
                                                এজেন্ট হবার জন্য আমাদের সুপার এজেন্ট দের সাথে যোগাযোগ করতে হবে।
                                            </p>
                                            <p>
                                                সুপার এজেন্ট লিস্ট দেখতে এই লিঙ্ক এ ক্লিক করুন।
                                            </p>
                                            <p>
                                                পয়েন্ট কেনা বেচাঃ
                                            </p>
                                            <p>** এজেন্ট ভেল্কি থেকে পয়েন্ট কিনবে ৯৩ টাকা করে।
                                                <br />** এজেন্ট ইউজার এর কাছে বিক্রি করবে ১০০ টাকা করে।
                                                <br />** এই খানে এজেন্ট এর লাভ থাকবে ৭%<br />
                                                আবারঃ
                                                <br />** এজেন্ট ইউজার এর কাছ থেকে পয়েন্ট কিনবে ১০০ টাকা করে।
                                                <br />** এজেন্ট ভেল্কি এর কাছে বিক্রি করবে ৯৩ টাকা করে।
                                                <br />** এই খানে এজেন্ট এর লস হবে ৭% – কিন্তু এই খানে কথা আছে
                                                <br />**** এজেন্ট যত পয়েন্ট কিনবে ভেল্কি থেকে তার চেয়ে যদি বিক্রি বেশি হয় – এই ৭% লস এর দায় ভার ভেল্কি নিবে।</p>



                                        </div>




                                    </h4>
                                    <div className='text-lg space-y-10 pt-10'>
                                        <p>
                                            যেমনঃ এজেন্ট ভেল্কি থেকে ৪ মাসে পয়েন্ট কিনেছে – ৭৫০০ পয়েন্ট। এই খানে তার লাভ হয়েছে – ৭৫০০x৭=৫২,৫০০ টাকা। কিন্তু ৫ নং মাসে গিয়ে দেখা গেল এজেন্ট এর ইউজার রা অনেক জিতেছে এবং এজেন্ট কে বিক্রি করতে হচ্ছে নাইন উইকেটস এর কাছে ৯২০০ পয়েন্ট । তাহলে এজেন্ট এর লাভ থেকে লস হবে ৫২,৫০০ টাকা। কারন এজেন্ট কে ভেল্কির এর কাছে ৭৫০০ পয়েন্ট বিক্রি করতে হবে ৯৩ টাকা রেট এই। বাকি ১৭০০ পয়েন্ট বিক্রি করতে যে লস হবে ১৭০০x৭=১১৯০০ টাকা, এই টাকা ভেল্কি ভর্তুকি দিবে। ভর্তুকি দিবে এই কারণে, যাতে এজেন্ট এর নিজের পকেট থেকে কোন লস না হয়।<br />
                                            তাহলে প্রশ্ন আসতে পারে এজেন্ট হবারএর লাভ কোথায়? এজেন্ট এর মুল লাভ হচ্ছে ২% কমিশন এক্সচেঞ্জ এ। যেমন ১ জন ইউজার দিনে ১০ টা বেট করল । ৫ টা তে জিতল এবং ৫ টা তে হারল। দিন শেষে যে ৫ টা জিতেছে ইউজার – প্রতিবার এজেন্ট কে ২% কমিশন দিয়েছে ইউজার।<br />
                                            একজন এজেন্ট এর যদি ২০ থেকে ৫০ জন একটিভ প্লেয়ার থাকে – তার মাসে ২০ থেকে ৫০ হাজার টাকা কমিশন থাকে।<br />
                                            মোট কথা এজেন্ট না হলে এজেন্ট হবার লাভ কি তা আপনি বুঝতে পারবেন না।

                                        </p>
                                        <p>
                                            শর্ত সমুহঃ
                                            <br />** এজেন্ট কে ৫০ হাজার টাকার পয়েন্ট কিনে এজেন্ট শুরু করতে হবে।
                                            <br />** ইউজার ব্যালেন্স বাদ দিয়ে – এজেন্ট এর কাছে সব সময় ১৫০০ পয়েন্ট এর ব্যালেন্স থাকতে হবে।
                                            <br />** এজেন্ট ব্যালেন্স যদি ২০০০ পয়েন্ট হয়ে যায় তাহলে এজেন্ট ৫০০ পয়েন্ট ভেল্কি কে বিক্রি করতে পারবেন।
                                            <br />** এজেন্ট – ভেল্কি থেকে ৫০০ পয়েন্ট এর নিচে ক্রয় বিক্রয় করতে পারবেন না।
                                            <br />** এজেন্ট এর কাছে সর্বনিম্ন ৩০ জন একটিভ প্লেয়ার থাকতে হবে।
                                            <br />*** এজেন্ট ইউজার সাথে প্রতি পয়েন্ট কেনা বেচা করবে ১০০ টাকা করে।
                                        </p>
                                    </div>
                                    <div className='pt-10'>
                                        শর্ত সমুহঃ<br />
                                        ** এজেন্ট ভেল্কি থেকে পয়েন্ট কিনবে ৯৩ টাকা করে। এই পয়েন্ট এর দাম কমতে পারে নিম্নলিখিত কারণে।
                                        ৯১ টাকাঃ এজেন্ট যদি চায় তার পয়েন্ট ৯১ টাকা হউক। যেদিন থেকে তার পয়েন্ট এর দাম ৯১ টাকা হবে – সেই দিন থেকে তিনি তার পয়েন্ট এর দাম ফিক্সড ৯১ টাকা। কেনা বেচা উভয় ক্ষেত্রেই সমান । এজেন্ট এর লাভ লস কোন টার ই দায় ভার ভেল্কি নিবে না। এজেন্ট যতই বিক্রি করুক এবং যতই কিনুক ২ ক্ষেত্রেই দাম সমান থাকবে ৯১ টাকা।
                                        ৮৯ টাকাঃ এজেন্ট যদি চায় তার পয়েন্ট ৮৯ টাকা হউক। যেদিন থেকে তার পয়েন্ট এর দাম ৮৯ টাকা হবে – সেই দিন থেকে তার পয়েন্ট এর দাম ফিক্সড ৮৯ টাকা। এই ক্ষেত্রে – এজেন্ট ভেল্কি থেকে শুধু পয়েন্ট কিনতেই পারবেন – কিন্তু ভেল্কি এর কাছে কোন পয়েন্ট বিক্রি করতে পারবেন না। এই পয়েন্ট রেট শুধু লোকাল এজেন্ট দের জন্য – অনলাইন এজেন্ট দের জন্য না।
                                    </div>

                                    <div className='pt-10'>
                                        বিকাশ/নগদ/রকেটঃ<br />
                                        ** অনেকেই আছেন – নিজের বিকাশ এজেন্ট নাই বা নিজের বিকাশ এজেন্ট এ লেনদেন করতে রিস্ক মনে করেন। সেই ক্ষেত্রে কোম্পানীর বিকাশ এজেন্ট ব্যবহার করতে পারেন। যদি কোম্পানীর বিকাশ – নগদ এজেন্ট ব্যবহার করেন – তাহলে পয়েন্ট এর দাম হবে ৯৫ টাকা।
                                    </div>
                                    <div className='pt-10'>
                                        কি কি কারনে এজেন্ট বাতিল হয়ে যেতে পারেঃ
                                        <br />** একটা বিষয় অবগত করা দরকার। এজেন্ট এর যদি নিজে খেলার অভ্যাস থাকে তাহলে – এজেন্ট হউয়া থেকে বিরত থাকুন। এজেন্ট যদি কখনো নিজে খেলতে গিয়ে ধরা পরেন – তাহলে এজেন্ট একাউন্ট ঐ অবস্থায় সঙ্গে সঙ্গে ব্লক হয়ে যাবে এবং সমস্ত লেনদেন বন্ধ হয়ে যাবে। যদি এজেন্ট নিজে কোন আইডি তে বাজি ধরিয়ে দিতে চান – তাহলে ভেল্কি কে আগেই সেই আইডি র বিষয়ে জানাতে হবে।
                                        <br />** কোন ইউজার এর পয়েন্ট ইউজার কে না জানিয়ে তুলে নিলে।
                                        <br />** ইউজার একাউন্ট থেকে পয়েন্ট তোলার ১ ঘন্টার মধ্যে টাকা টা ইউজার কে বুঝিয়ে না দিলে।
                                        <br />** ইউজার পাসোয়ার্ড ইউজার কে না জানিয়ে পরিবর্তন করলে।
                                        <br />** ইউজার এর একাউন্ট খোলার সময় কোম্পানীর নিয়ম নিতি না মানলে।
                                        <br />** ইউজার এর একাউন্ট খোলার সময় – ইউজার এর ফোন নাম্বার এর বদলে অন্য কারো ফোন নাম্বার ব্যবহার করলে।
                                        <br />** ডিপোজিট বা উইথড্র এর ক্ষেত্রে কোম্পানীর নিয়ম না মানলে।
                                    </div>
                                    <div className='pt-10'>
                                        সিস্টেম জানা শেষ হলে আপনাকে নিচের লিংক এ ক্লিক করে সুপার এজেন্ট লিষ্ট দেখতে হবে। <br /><a className='hover:text-[#ff7c7c]' href='https://allagentlist.com/sa.php'>https://allagentlist.com/sa.php</a>
                                    </div>
                                    <div className='pt-10'>
                                        এই লিষ্ট এর সব সুপার এর সাথে এজেন্ট হবার বিষয় টি নিয়ে আলাপ করেন – যে সুপার সাথে আপনার ভাল লাগবে তার কাছ থেকে এজেন্ট নিতে পারবেন।
                                    </div>
                                </div>










                                {/* next and previuse */}
                                <div className="flex justify-between mt-4 text-2xl">
                                    <Link to="/how-to-be-a-agent" className="hover:text-[#ff7c7c]">previous: <br /> কিভাবে আমি ভেল্কি তে এজেন্ট হতে পারি?</Link>
                                    <Link to="/superagentlist" className="hover:text-[#ff7c7c]">Next: <br /> Super Agent List</Link>

                                </div>




                            </div>

                        </div>
                    </div>
                    <div className="border-l border-dotted"></div>

                    <div className="sticky top-20 h-fit self-start w-[25%]">
                        {/* Sidebar */}

                        <aside className=' w-[135%] md:w-full'>
                            <div className='border p-4 rounded-lg mb-16'>
                                <h3 className="text-lg font-semibold mb-2">Search</h3>
                                <div className="flex border  border-gray-500">
                                    <input
                                        type="text"
                                        value={searchData.agentNumber}
                                        onChange={(e) => setSearchText(e.target.value)}
                                        className=" w-full px-3 py-4 bg-transparent text-white focus:outline-none"
                                    />
                                    <button
                                        onClick={handleSearch}
                                        className="bg-yellow-500 hover:bg-[#ff7c7c] text-black font-semibold px-4">
                                        Search
                                    </button>
                                </div>
                            </div>
                            <h3 className="text-2xl font-semibold mb-4 border-dotted border-b-2 border-gray-600 pb-1">
                                Recent Posts
                            </h3>
                            <ul className="space-y-4 text-base ">
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
                                    <Link to={"/howtoshare"}> WINPBU তে কিভাবে নেনদেন করবেন?</Link>
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

export default HowToBeAgent;