import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Container from "../components/Container";
import logo from "../assets/winpbu-logo.png";
import AgentManagement from "./DashboardPages/AgentManagement";
import { FiMenu } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";

import AdminChat from "./DashboardPages/AdminChat";

const Dashboard = () => {
  const navigate = useNavigate();
  const [openAgent, setOpenAgent] = useState(true);
  const [show, setShow] = useState(false);
  const [adminMessage, setAdminMessage] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) navigate("/");
  }, [navigate]);

  return (
    <div className="bg-white">
      <div className="flex">
        {/* Sidebar */}
        <div
          className={`md:w-[20%] w-[60px] fixed top-0 md:left-0 left-2  z-50 bg-[#1e1e1e] text-white px-4 md:border-r md:border-gray-500 md:h-screen`}
        >
          <div className="relative top-0">
            <div className="text-white py-6">
              {/* Sidebar Logo */}
              <img
                src={logo}
                alt="logo"
                className="w-40 m-auto py-10 hidden md:block"
              />

              {/* Sidebar Menu (Desktop) */}
              <div className="flex-col gap-4 hidden md:flex">
                <Link
                  onClick={() => {
                    setOpenAgent(!openAgent);
                  }}
                  className="bg-gray-700 w-full rounded-2xl py-3 px-3 hover:bg-[#111111]"
                >
                  Manage Agent List
                </Link>
                <Link
                  onClick={() => (
                    setAdminMessage(!adminMessage), setOpenAgent(!openAgent)
                  )}
                  className="bg-gray-700 w-full rounded-2xl py-3 px-3 hover:bg-[#111111]"
                >
                  Admin Message Dashboard
                </Link>
              </div>

              {/* Sidebar Toggle Button (Mobile) */}
              <div
                onClick={() => setShow(!show)}
                className="md:hidden cursor-pointer text-2xl text-right absolute top-2 right-4"
              >
                <FiMenu />
              </div>

              {/* Sidebar Drawer (Mobile) */}
              {show && (
                <div className="fixed w-2/3 h-screen top-0 right-0 md:hidden bg-[#1D1B14] px-3 z-40">
                  <div
                    onClick={() => setShow(!show)}
                    className="fixed top-8 right-5 cursor-pointer text-3xl hover:text-orange-500"
                  >
                    <IoCloseSharp />
                  </div>
                  <img
                    src={logo}
                    alt="logo"
                    className="w-40 m-auto py-10 mt-20"
                  />

                  <div className="flex flex-col gap-4">
                    <Link
                      onClick={() => {
                        setOpenAgent(!openAgent);
                      }}
                      className="bg-gray-700 w-full rounded-2xl py-3 px-3 hover:bg-[#111111]"
                    >
                      Manage Agent List
                    </Link>
                    <Link
                      onClick={() => (
                        setAdminMessage(!adminMessage), setOpenAgent(!openAgent)
                      )}
                      className="bg-gray-700 w-full rounded-2xl py-3 px-3 hover:bg-[#111111]"
                    >
                      Admin Message Dashboard
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="md:ml-[20%] w-full bg-[#1e1e1e] min-h-screen transition-all duration-300">
          {/* Main content render area */}
          <Outlet />

          {/* Agent Management default render */}
          {openAgent && <AgentManagement />}
          {adminMessage && (
            <AdminChat currentUserId="admin" targetUserId="user1" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
