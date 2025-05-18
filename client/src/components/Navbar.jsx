import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { menuItems } from "./menuItems";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <div>
      <div className="flex bg-black text-white py-6 px-5">
        <ul className="hidden md:flex gap-6 relative">
          {menuItems.map((item, index) => (
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
                <ul className="absolute left-0 top-full pt-2  w-56 bg-[#1D1B14]">
                  {item.submenu.map((subItem, subIndex) => (
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
        <div className="md:hidden cursor-pointer text-3xl text-right">
          <FiMenu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// // Menu.jsx
// import { Link } from "react-router-dom";
// import { useState } from "react";
// import { menuItems } from "./menuItems";

// const Menu = () => {
//   const [openIndex, setOpenIndex] = useState(null);

//   return (
//     <nav className="bg-gray-100 shadow-md p-4">
//       <ul className="flex space-x-6 relative">
//         {menuItems.map((item, index) => (
//           <li
//             key={index}
//             className="relative"
//             onMouseEnter={() => setOpenIndex(index)}
//             onMouseLeave={() => setOpenIndex(null)}
//           >
//             {item.submenu ? (
//               <span className="cursor-pointer hover:text-blue-600">{item.name}</span>
//             ) : (
//               <Link to={item.path} className="hover:text-blue-600">{item.name}</Link>
//             )}

//             {/* Submenu */}
//             {item.submenu && openIndex === index && (
//               <ul className="absolute left-0 top-full mt-2 bg-white border rounded shadow-md w-48">
//                 {item.submenu.map((subItem, subIndex) => (
//                   <li key={subIndex}>
//                     <Link
//                       to={subItem.path}
//                       className="block px-4 py-2 hover:bg-gray-100"
//                     >
//                       {subItem.name}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// };

// export default Menu;
