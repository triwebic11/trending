import React from "react";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { menuItems } from "./menuItems";
import { FiMenu } from "react-icons/fi";

const handleClick = (e) => {
  if (e.target.contains(ref.current)) {
    // setShow(false);
  }
};

const Navbar = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [show, setShow] = useState(false);
  const ref = useRef();

  return (
    <div className="relative">
      <div className="flex bg-black text-white py-6 px-5 ">
        <ul className="hidden md:flex gap-6 relative z-10">
          {menuItems?.map((item, index) => (
            <li
              key={index}
              className="relative "
              onMouseEnter={() => setOpenIndex(index)}
              onMouseLeave={() => setOpenIndex(null)}
            >
              {item.submenu ? (
                <span className="cursor-pointer  hover:underline">
                  {item.title}
                </span>
              ) : (
                <Link to={item.path} className="hover:underline">
                  {item.title}
                </Link>
              )}

              {/* Submenu */}
              {item.submenu && openIndex === index && (
                <ul className="absolute left-0 top-full pt-2  w-56 bg-[#1D1B14] z-0">
                  {item.submenu?.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <Link
                        to={subItem.path}
                        className="block px-4 py-2 cursor-pointer hover:underline hover:text-orange-600 duration-200"
                      >
                        {subItem.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <div
          onClick={() => setShow(!show)}
          className="md:hidden cursor-pointer text-3xl text-right  right-5"
        >
          <FiMenu />
        </div>
        {show && (
          <div
            ref={(node) => (ref.current = node)}
            onClick={handleClick}
            className="absolute w-40 md:hidden flex flex-col gap-6 top-full bg-black px-3 z-40"
          >
            <ul className=" gap-6 relative z-10">
              {menuItems?.map((item, index) => (
                <li
                  key={index}
                  className="relative "
                  onMouseEnter={() => setOpenIndex(index)}
                  onMouseLeave={() => setOpenIndex(null)}
                >
                  {item.submenu ? (
                    <span className="cursor-pointer  hover:underline">
                      {item.title}
                    </span>
                  ) : (
                    <Link to={item.path} className="hover:underline py-3">
                      {item.title}
                    </Link>
                  )}

                  {/* Submenu */}
                  {item.submenu && openIndex === index && (
                    <ul className="absolute left-full top-0 pt-2  w-56 bg-black z-0">
                      {item.submenu?.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            to={subItem.path}
                            className="block px-4 py-2 cursor-pointer hover:underline hover:text-orange-600 duration-200"
                          >
                            {subItem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
