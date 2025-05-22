import React from "react";
import Container from "./Container";
import headerLogo from "../assets/winpbu-logo.png";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import SliderHeader from "./SliderHeader";
import { FaArrowTrendUp } from "react-icons/fa6";

const Header = () => {
  return (
    <div>
      <Container>
        <div>
          <div className="text-orange-300 pt-4 flex uppercase text-sm items-center gap-2"><svg class="svg-icon" aria-hidden="true" role="img" focusable="false" xmlns="https://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"><path fill="currentColor" d="M 15.09375 6.824219 L 16.414062 8.140625 L 14.40625 10.257812 L 12.398438 12.371094 L 10.117188 10.097656 C 8.863281 8.84375 7.820312 7.820312 7.800781 7.820312 C 7.769531 7.824219 1.898438 15.757812 1.472656 16.371094 C 1.429688 16.4375 1.507812 16.386719 1.65625 16.257812 C 1.796875 16.140625 3.234375 14.902344 4.855469 13.515625 L 7.800781 10.992188 L 7.972656 11.183594 C 8.066406 11.289062 9.101562 12.375 10.269531 13.601562 L 12.398438 15.820312 L 12.527344 15.671875 C 12.59375 15.589844 13.863281 14.222656 15.339844 12.636719 L 18.019531 9.75 L 19.324219 11.050781 L 20.625 12.351562 L 20.625 5.5 L 13.773438 5.5 Z M 15.09375 6.824219 "></path></svg>Trending</div>
          <div className="flex justify-center items-center py-12">
            <Link to="/">
              <img src={headerLogo} alt="Header-Banner" className="w-[300px]" />
            </Link>
          </div>
          <Navbar />
        </div>
        <SliderHeader />
      </Container>
    </div>
  );
};

export default Header;
