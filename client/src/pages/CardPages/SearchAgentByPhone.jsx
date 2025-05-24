import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import image from '../../assets/telephone.png';
import ImageBoxDesigner from '../../components/ImageBoxDesigner';
import AgentSearchForm from '../../components/AgentSearchForm';
import NumberSearch from '../../components/NumberSearch';
import AgentListTable from '../../components/AgentListTable';
import HomeCardSections from '../../components/HomeCardSections';
const SearchAgentByPhone = () => {
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

    const handleAgentSearch = (data) => {
        console.log('Received from form:', data);
        setSearchData({
            ...data,
            agentType: agentTypeFromPath, // ensure route type is always applied
        });
    };
    console.log('searchData', searchData);
    const encodedNumber = encodeURIComponent(searchData?.agentNumber); // "+601112206352" → "%2B601112206352"


    const { data: agents = [], isLoading, refetch } = useQuery({
        queryKey: ['agents', searchData?.agentType, searchData?.agentId, searchText,encodedNumber],
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
                    <div className="">

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




                                {
                                    <NumberSearch onSearch={handleAgentSearch}></NumberSearch>
                                }
                                {
                                    isLoading ? (
                                        <div className="text-white"></div>
                                    ) : agents?.length === 1 ? (
                                        <table className="w-full border-collapse border font-bold border-white text-white text-center my-4">
                                            <thead>
                                                <tr>
                                                    <th className="border border-white px-4 py-2">ID NO</th>
                                                    <th className="border border-white px-4 py-2">TYPE</th>
                                                    <th className="border border-white px-4 py-2">SITE</th>
                                                    <th className="border border-white px-4 py-2">PHONE NUMBER</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="border border-white px-4 py-2">{agents[0]?.uniqueId}</td>
                                                    <td className="border border-white px-4 py-2">{agents[0]?.type}</td>
                                                    <td className="border border-white px-4 py-2">|| {agents[0]?.sites}✅</td>
                                                    <td className="border border-white px-4 py-2">
                                                        <a
                                                            href={`https://wa.me/${agents[0]?.agentNumber}`}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="hover:text-[#ff7c7c] duration-200 text-white underline"
                                                        >
                                                            {agents[0]?.agentNumber}
                                                        </a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    ) : agents?.length === 0 ? (
                                        <div className="text-white text-center mt-4">আপনার দেয়া নাম্বার টি এই মুহুর্তে এখন আর কেউ ব্যবহার করছে না। দয়া করে এই নাম্বার টি তে মেসেজ দেয়া থেকে বিরত থাকুন।</div>
                                    ) : null
                                }




                                {/* next and previuse */}
                                <div className="flex justify-between mt-4 text-2xl">
                                    <Link to="/how-to-be-a-agent" className="hover:text-[#ff7c7c]">previous: <br /> কিভাবে আমি ভেল্কি তে এজেন্ট হতে পারি?</Link>
                                    <Link to="/superagentlist" className="hover:text-[#ff7c7c]">Next: <br /> Super Agent List</Link>

                                </div>




                            </div>

                        </div>
                    </div>
                    <div className="border-l border-dotted"></div>

                    <div className="sticky top-20 h-fit self-start">
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

export default SearchAgentByPhone;