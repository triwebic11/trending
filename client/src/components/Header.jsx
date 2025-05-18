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
        <div>
          <img src={headerBanner} alt="Header-Banner" />
        </div>
        <ul className="flex justify-between">
          {menuItems.map((item, index) => {
            <li key={index}>
              <Link to={item.path}>{item.title}</Link>
            </li>;
          })}
        </ul>
      </Container>
    </div>
  );
};

export default Header;
