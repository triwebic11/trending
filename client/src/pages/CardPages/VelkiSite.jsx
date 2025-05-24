import React from "react";
import HomeCardSections from "../../components/HomeCardSections";
import Sidebar from "../../components/Sidebar";
import Container from "../../components/Container";
import { Link } from "react-router-dom";
import velkisite from "../../assets/velki-live-site.png";
const VelkiSite = () => {
  return (
    <div>
      <Container>
        <div className="text-white flex flex-col md:flex-row gap-2">
          <div className="w-full lg:w-[75%]  py-6 ">
            <img src={velkisite} alt="velki" />
            <h1 className="text-2xl">ভেল্কি সাইট</h1>
            <p>January 26, 2025</p>
            <p className="pt-10">
              ভেল্কি আমাদের জনপ্রিয় গেমিং সাইট – কিন্তু দুর্ভাগ্য বসত কিছু অসৎ
              এবং ধান্দাবাজ ব্যক্তি আমাদের সাইটের নকল করে অনেক গুলো সাইট তইরী
              করেছে। তাই আপনাদের আমাদের লিংক ছাড়া অন্য কোন লিংক ব্যবহার করা উচিত
              হবে না। আমাদের সকল সাইটের প্রক্সী লিংক গুলো নিচে দেয়া হলোঃ
            </p>
            <Link
              className="py-6 underline block"
              to="https://www.proxy9wkts.com/"
            >
              প্রক্সী লিংক – এই খানে ক্লিক করে আপনি আমাদের প্রক্সী লিংক গুলো
              দেখে নিন।
            </Link>
          </div>
          <div className="w-full lg:w-[25%] py-2 px-2">
            <Sidebar />
          </div>
        </div>
        <HomeCardSections />
      </Container>
    </div>
  );
};

export default VelkiSite;
