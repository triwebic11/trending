import { Link } from "react-router-dom";
import siteadminImage from "../../assets/site-admin-list.jpg"
import AgentListTable from "../../components/AgentListTable";
import AgentSearchForm from "../../components/AgentSearchForm";
import ImageBoxDesigner from "../../components/ImageBoxDesigner";
import HomeCardSections from "../../components/HomeCardSections";
const SiteAdminList = () => {
  const data = [
    { id: 8, type: 'সাইট এডমিন', phone: '+855969477041', site: ["BAAJIWALA", "VELKI"] },
    { id: 19, type: 'সাইট এডমিন', phone: '+85570550486', site: ["VELKI"] },
    { id: 7, type: 'সাইট এডমিন', phone: '+601124255228', site: ["BAAJIWALA"] },
    { id: 15, type: 'সাইট এডমিন', phone: '+85510526088', site: ["BAAJIWALA"] },
    { id: 23, type: 'সাইট এডমিন', phone: '+601124069381', site: ["VELKI"] },
    { id: 20, type: 'সাইট এডমিন', phone: '+85570564732', site: ["VELKI"] },
    { id: 11, type: 'সাইট এডমিন', phone: '+85561743988', site: ["VELKI"] },
    { id: 9, type: 'সাইট এডমিন', phone: '+85595989258', site: ["VELKI"] },
    { id: 18, type: 'সাইট এডমিন', phone: '+85581749657', site: ["VELKI"] },
    { id: 22, type: 'সাইট এডমিন', phone: '+60173153172', site: ["VELKI"] },
    { id: 27, type: 'সাইট এডমিন', phone: '+601124255228', site: ["BAAJIWALA"] },
    { id: 215, type: 'সাইট এডমিন', phone: '+85510526088', site: ["BAAJIWALA"] },
    { id: 223, type: 'সাইট এডমিন', phone: '+601124069381', site: ["VELKI"] },
    { id: 220, type: 'সাইট এডমিন', phone: '+85570564732', site: ["VELKI"] },
    { id: 211, type: 'সাইট এডমিন', phone: '+85561743988', site: ["VELKI"] },
    { id: 29, type: 'সাইট এডমিন', phone: '+85595989258', site: ["VELKI"] },
    { id: 218, type: 'সাইট এডমিন', phone: '+85581749657', site: ["VELKI"] },
    { id: 222, type: 'সাইট এডমিন', phone: '+60173153172', site: ["VELKI"] },
  ];
  return (
    <div>
      <div>
        <div className="relative">
          <div className=" text-white  px-6 py-10 font-sans">
            <div className="max-w-6xl mx-auto   flex flex-col md:flex-row gap-8 ">
              <div className="">

                <div className="">
                  <div className="mb-20">
                    {/* Image */}
                    <div className="mb-6">
                     
                      <ImageBoxDesigner
                    imgSrc={siteadminImage}
                    alt="Rules and Regulations"
                    className=" opacity-60"
                    overlayEnabled={true}
                    height={"h-[300px]"}
                  />
                    </div>
                    <h2 className="text-5xl font-bold mb-4">
                      Site Agent List
                    </h2>
                    <p
                      className=" hover:text-[#ff7c7c] duration-200"
                    >
                      January 26, 2025
                    </p>

                    <div>
                      <h4 className="text-bold mt-3 flex gap-2 font-semibold"> <span className="border-l border-4 border-white"></span>

                        <div>
                          <p>এজেন্ট দের সাথে লেনদেন এর আগে WINPBU এর নিয়ম গুলো জেনে নিন!!</p>
                          <br></br>
                          <p>**প্রতারনার হাত থেকে বাচতে সবার আগে ভিজিট করুন WINPBU.COM **হোয়াটসঅ্যাপ ব্যাতিত অন্য কোন এপ এর মাধ্যমে যোগাযোগ বা লেনদেন করা যাবে না এবং করলে তা গ্রহনযোগ্য হবে না। **এজেন্ট পাসোয়ার্ড পরিবর্তন করে দিলে – আপনি একাউন্টে ঢুকে আবার পাসোয়ার্ড পরিবর্তন করে নিবেন। এজেন্ট যাতে কোন ভাবেই আপনার পাসোয়ার্ড না জানে। আপনার পাসোয়ার্ড আপনি কাউকেই দিবেন না – সে যেই হউক না কেন। **সকাল ৯ঃ৪৫ এর আগে এবং রাত ৯ঃ৪৫ এর পরে কোন ইউজার যদি এজেন্ট কে টাকা পাঠায় – অই টাকার দায়ভার WINPBU নিবে না। **প্রতিবার এজেন্ট এর কাছ থেকে পয়েন্ট নেবার আগে – এজেন্ট এর কাছে লেনদেন এর তথ্য জেনে নিতে হবে। যেহেতু এজেন্ট এক এক সময় এক ভাবে লেনদেন করে সেহেতু এই তথ্য জানা জরুরী। **এজেন্ট এর বিরুদ্ধে কোন অভিযোগ থাকলে এজেন্ট এর নামের শেষে অভিযোগ বাটন এ ক্লিক করলে যে হোয়াটসঅ্যাপ নাম্বার আসবে – তাকে অভিযোগ করতে হবে।</p>
                        </div>

                      </h4>
                    </div>

                    {/* form  */}
                    <AgentSearchForm></AgentSearchForm>

                    {/* table */}
                    <AgentListTable data={data}></AgentListTable>


                    {/* next and previuse */}
                    <div className="flex justify-between mt-4 text-xl">
                      <Link to="/subadminlist" className="hover:text-[#ff7c7c]">previous: <br /> Sub Agent List</Link>
                      <Link to="/" className="hover:text-[#ff7c7c]">Next: <br /> কীভাবে একাউন্ট খুলবেন</Link>

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
                    <li className="border-b-1 border-dotted border-gray-600 pb-1">
                      {" "}
                      এজেন্ট কে ফেন নাম্বার দিয়ে খুঁজুন
                    </li>
                    <li className="border-b-1 border-dotted border-gray-600 pb-1">
                      {" "}
                      কিভাবে আমি ভেরিফাই তে এজেন্ট হতে পারি?
                    </li>
                    <li className="border-b-1 border-dotted border-gray-600 pb-1">
                      {" "}
                      ভেরিফাই সাইট
                    </li>
                    <li className="border-b-1 border-dotted border-gray-600 pb-1">
                      {" "}
                      একাউন্ট খোলার নিয়ম বা শর্ত গুলো কি কি?
                    </li>
                    <li className="border-b-1 border-dotted border-gray-600 pb-1">
                      {" "}
                      WINPBU তে কিভাবে নেনদেন করবেন?
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
        </div>
      </div>
      <HomeCardSections></HomeCardSections>
    </div>
  );
};

export default SiteAdminList;
