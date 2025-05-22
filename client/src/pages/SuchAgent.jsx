import React from "react";
import Container from "../components/Container";
import HomeCardSections from "../components/HomeCardSections";
import telephone from "../assets/telephone.png";
import Sidebar from "../components/Sidebar";
import ListComponant from "../components/ListComponant";
const SuchAgent = () => {
  return (
    <div>
            <ListComponant image={telephone} text={"Such Agent"}></ListComponant>

      <Container className=" text-white">
        <div className="flex flex-col md:flex-row gap-8">
          <div>
            <img src={telephone} alt="Such agent by call" />
            <h1 className="text-5xl my-2">এজেন্ট কে ফোন নাম্বার দিয়ে খুঁজুন</h1>
            <h1 className="text-sm">anuary 31, 2025</h1>
            <div className="flex flex-col items-center justify-center p-6">
              <h1 className="my-2">এজেন্ট কে ফোন নাম্বার দিয়ে খুজুনঃ</h1>
              <div className="w-1/2 border border-white rounded-lg flex flex-col gap-4 p-4">
                <h1>PHONE NUMBER</h1>
                <input
                  type="text"
                  className="w-full flex-grow px-2 py-2 bg-black text-white focus:outline-none border border-white"
                />
                <button className="w-20 bg-green-600  hover:text-black font-semibold px-4 cursor-pointer inline-flex ">
                  Submit{" "}
                </button>
              </div>
            </div>
          </div>
          <div>
            {/* Sidebar */}

            <Sidebar />
          </div>
        </div>
        <HomeCardSections />
      </Container>
    </div>
  );
};

export default SuchAgent;
