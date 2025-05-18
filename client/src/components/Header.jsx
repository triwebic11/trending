import React from "react";
import Container from "./Container";
import headerLogo from "../assets/winpbu-logo.png";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import SliderHeader from "./SliderHeader";

const Header = () => {
  return (
    <div>
      <Container>
        <div>
          <div className="text-orange-300 pt-4">Trending</div>
          <div className="flex justify-center items-center py-12">
            <Link to="/">
              <img src={headerLogo} alt="Header-Banner" className="w-[300px]" />
            </Link>
          </div>
          <Navbar />
        </div>
      </Container>
      <div className="bg-neutral-900">
        <Container className="my-6 px-7  ">
          <SliderHeader />
        </Container>
      </div>
    </div>
  );
};

export default Header;
