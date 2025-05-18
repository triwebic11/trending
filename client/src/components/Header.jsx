import React from "react";
import Container from "./Container";
import headerBanner from "../assets/winpbu-logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const menuItems = [
    { title: "হোম পেইজ ", path: "/" },
    { title: "প্রশ্ন উত্তর", path: "/" },
    { title: "সাইট ", path: "/" },
    { title: "এজেন্ট কে খজুন ", path: "/" },
    { title: "এজেন্ট লিস্ট  ", path: "/" },
    { title: "কাস্টমার সার্ভিস ", path: "/" },
  ];
  return (
    <div>
      <Container>
        <div className="flex justify-center items-center py-12">
          <Link to="/">
            <img src={headerBanner} alt="Header-Banner" className="w-[300px]" />
          </Link>
        </div>
        <ul className="flex gap-5 bg-black text-white py-6 px-5">
          {menuItems.map((item, index) => (
            <li key={index} className="hover:underline text-lg">
              <Link to={item.path}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
};

export default Header;
