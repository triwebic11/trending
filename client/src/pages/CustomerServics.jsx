import React from "react";
import Container from "../components/Container";
import customer from "../assets/customer.jpeg"
import { FaWhatsappSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const CustomerServics = () => {
  const data = [
    { id: 8, type: 'কাস্টমার সার্ভিস', phone: '+855969477041' },
    { id: 19, type: 'কাস্টমার সার্ভিস', phone: '+85570550486' },
    { id: 7, type: 'কাস্টমার সার্ভিস', phone: '+601124255228' },
    { id: 15, type: 'কাস্টমার সার্ভিস', phone: '+85510526088' },
    { id: 23, type: 'কাস্টমার সার্ভিস', phone: '+601124069381' },
    { id: 20, type: 'কাস্টমার সার্ভিস', phone: '+85570564732' },
    { id: 11, type: 'কাস্টমার সার্ভিস', phone: '+85561743988' },
    { id: 9, type: 'কাস্টমার সার্ভিস', phone: '+85595989258' },
    { id: 18, type: 'কাস্টমার সার্ভিস', phone: '+85581749657' },
    { id: 22, type: 'কাস্টমার সার্ভিস', phone: '+60173153172' },
  ];
  // <img
  //   src={customer}
  //   alt="WhatsApp"
  //   
  // />
  return (
    <div>
      <Container className=" text-white  px-6 py-10 font-sans">
        <div className="max-w-6xl mx-auto   flex flex-col md:flex-row gap-8 justify-between">
          <div className="">
            {/* Category Title */}

            <div className="">
              <div className="mb-2">
                {/* Image */}
                <div className="">
                  <img
                    src={customer}
                    alt="customer"
                    className="w-full rounded-lg shadow-lg hover:translate-3"
                  />
                </div>
                <h3 className="text-3xl font-bold">Customer Service</h3>
              </div>
              <div className="mb-20">
                <div className="">
                  <p>January 25, 2025</p>
                  <h4 className="text-bold mt-3 flex gap-2"> <span className="border-l border-4 border-white h-12"></span><p>**প্রতারনার হাত থেকে বাচতে সবার আগে ভিজিট করুন বাজিওয়ালার সাইটঃ https://winpbu.com  **কাস্টমার সার্ভিসের কাউকেই আপনি আপনার একাউন্টের পাসোয়ার্ড দিবেন না।</p></h4>

                </div>
                {/* table */}
                <div className=" my-4">
                  <table className="w-full border-collapse border border-white text-white text-center my-4">
                    <thead className="">
                      <tr>
                        <th className="border border-white px-4 py-2">ID NO</th>
                        <th className="border border-white px-4 py-2">TYPE</th>
                        <th className="border border-white px-4 py-2">WHITS</th>
                        <th className="border border-white px-4 py-2">PHONE NUMBER</th>
                      </tr>
                    </thead>
                    <tbody className="">
                      {data.map((row) => (
                        <tr key={row.id}>
                          <td className="border border-white px-4 py-2">{row.id}</td>
                          <td className="border border-white px-4 py-2">{row.type}</td>
                          <td className="border border-white px-4 py-2">
                            <Link to="https://api.whatsapp.com/" target="blank">< FaWhatsappSquare className="w-6 h-6 mx-auto text-green-500" /></Link>
                          </td>
                          <td className="border border-white px-4 py-2">{row.phone}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <a href="#" className="hover:text-[#ff7c7c]">Next: <br /> Master Agent List</a>
                </div>
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

export default CustomerServics;
