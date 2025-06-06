import React from "react";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { menuItems } from "./menuItems";
import { FiMenu } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [show, setShow] = useState(false);
  const navbar = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      // যদি show true থাকে এবং navbar div-এর বাইরে ক্লিক হয়
      if (show && navbar.current && !navbar.current.contains(event.target)) {
        setShow(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [show]);

  return (
    <div className="relative top-0">
      <div className="flex bg-black text-white py-6 px-5">
        <ul className="hidden md:flex gap-6 relative z-10">
          {menuItems?.map((item, index) => (
            <li
              key={index}
              className="relative"
              onMouseEnter={() => setOpenIndex(index)}
              onMouseLeave={() => setOpenIndex(null)}
            >
              {item.submenu ? (
                <span className="cursor-pointer  hover:underline flex items-center gap-1 relative group">
                  <span>{item.title}</span>{" "}
                  <span className=" group-hover:rotate-180 duration-300">
                    <FaChevronDown />
                  </span>
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
                        className="block px-4 py-2 cursor-pointer hover:text-[#ff7c7c] duration-200"
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
          className="md:hidden cursor-pointer text-3xl text-right absolute top-2 right-4"
        >
          <FiMenu />
        </div>
        {show && (
          <div
            ref={navbar}
            className="fixed w-2/3 h-screen top-0 right-0 md:hidden flex justify-start items-start bg-[#1D1B14] px-3 z-40 pl-10 pt-20"
          >
            <div
              onClick={() => setShow(!show)}
              className="fixed top-8 right-5 hover:order-6 cursor-pointer text-3xl hover:text-[#ff7c7c]"
            >
              <IoCloseSharp />
            </div>
            <ul className=" gap-6 relative z-10 ">
              {menuItems?.map((item, index) => (
                <li
                  key={index}
                  onClick={() => {
                    if (item.submenu) {
                      setOpenIndex(openIndex === index ? null : index); // Toggle submenu
                    } else {
                      setShow(!show);
                    }
                  }}
                  className="relative py-4 hover:text-[#ff7c7c]"
                  // onMouseEnter={() => setOpenIndex(index)}
                  // onMouseLeave={() => setOpenIndex(null)}
                >
                  {item.submenu ? (
                    <span className="cursor-pointer  hover:underline flex items-center gap-1 relative group ">
                      <span>{item.title}</span>{" "}
                      <span className=" group-hover:rotate-180 duration-300  ">
                        <FaChevronDown />
                      </span>
                    </span>
                  ) : (
                    <Link to={item.path} className="hover:underline py-3 ">
                      {item.title}
                    </Link>
                  )}

                  {/* Submenu */}
                  {item.submenu && openIndex === index && (
                    <ul className="absolute left-0 top-full  w-56 bg-[#1D1B14] shadow-cyan-100 shadow-sm z-40  ">
                      {item.submenu?.map((subItem, subIndex) => (
                        <li key={subIndex} onClick={() => setShow(!show)}>
                          <Link
                            to={subItem.path}
                            className="block px-4 py-2 cursor-pointer   duration-200"
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
