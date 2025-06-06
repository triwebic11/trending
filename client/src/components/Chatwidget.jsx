import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { RiMessage2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa6";
import ChatComponent from "./ChatComponent";

const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState(false);
  const [contact, setContact] = useState(false);

  // Refs for each box and the button
  const mainBoxRef = useRef(null);
  const messageBoxRef = useRef(null);
  const contactBoxRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        !mainBoxRef.current?.contains(event.target) &&
        !messageBoxRef.current?.contains(event.target) &&
        !contactBoxRef.current?.contains(event.target) &&
        !buttonRef.current?.contains(event.target)
      ) {
        setOpen(false);
        setMessage(false);
        setContact(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed bottom-[15%] right-[6%] z-50">
      <button
        ref={buttonRef}
        onClick={(e) => {
          e.stopPropagation(); // Prevent closing immediately
          setOpen(!open);
          setMessage(false);
          setContact(false);
        }}
        className="bg-purple-700 p-3 mt-2 rounded-full shadow-lg items-center justify-center hover:bg-purple-800 transition"
      >
        <RiMessage2Fill className="text-white bg-green-600 text-xl cursor-pointer" />
      </button>

      {/* Main Box */}
      {open && (
        <div
          ref={mainBoxRef}
          className="fixed top-0 md:top-10 md:bottom-[22%] right-[6%] h-screen bg-white rounded-xl shadow-xl p-4 text-black md:h-[520px]"
        >
          <div className="bg-yellow-600 text-white rounded-t-xl p-6 py-20 flex flex-col gap-2">
            <button
  onClick={() => {
    setOpen(false);
    setMessage(false);
    setContact(false);
  }}
  className="absolute top-4 right-4 text-white p-2 rounded-full z-[101]"
>
  ✕
</button>
            <div className="font-bold text-lg">হাই 👋</div>
            <div className="text-2xl">আমরা কিভাবে সাহায্য করতে পারি?</div>
          </div>

          <div className="bg-white px-4 py-2 my-4 flex flex-col gap-3">
            <button
              onClick={() => setMessage(!message)}
              className="bg-gray-100 hover:bg-fuchsia-100 hover:text-pink-600 px-4 py-2 rounded flex justify-between items-center cursor-pointer text-sm md:text-md"
            >
              আমাদের সাথে যোগাযোগ করুন
              <ChevronDown size={16} />
            </button>

            <Link
              to="https://www.proxy9wkts.com/"
              target="blank"
              className="bg-gray-100 hover:bg-fuchsia-100 hover:text-pink-600 px-4 py-2 rounded flex justify-between items-center cursor-pointer text-sm md:text-md"
            >
              আমাদের প্রস্তাবিত লিংক গুলো দেখুন
              <ChevronDown size={16} />
            </Link>

            <Link
              to="/masteragentlist"
              target="blank"
              className="bg-gray-100 hover:bg-fuchsia-100 hover:text-pink-600 px-4 py-2 rounded flex justify-between items-center cursor-pointer text-sm md:text-md"
            >
              ভেকি মাশীন এজেন্ট লিস্ট
              <ChevronDown size={16} />
            </Link>
          </div>

          <div className="flex justify-around border-t pt-2 text-sm">
            <button
              onClick={() => setMessage(!message)}
              className="text-purple-700 text-lg cursor-pointer"
            >
              হোম
            </button>
            <button
              onClick={() => setMessage(!message)}
              className="text-purple-700 text-lg cursor-pointer"
            >
              মেসেজ
            </button>
          </div>
        </div>
      )}

      {/* Message Box */}
      {message && (
        <div
          ref={messageBoxRef}
          className="fixed bottom-[22%] right-[6%] h-[520px] md:h-3/4 w-[325px] md:w-[430px] bg-gray-50 rounded-xl shadow-xl text-black p-10"
        >
          <div className="text-center py-3 border-gray-200 border-b-[1px]">
            মেসেজ
          </div>
          <div className="h-[370px] flex flex-col justify-center items-center gap-8">
            <div className="text-center">কোনও মেসেজ নেই</div>
            <button
              onClick={() => setContact(!contact)}
              className="bg-purple-800 text-white hover:opacity-80 duration-200 px-4 py-2 rounded flex justify-between items-center cursor-pointer text-sm md:text-md"
            >
              আমাদের সাথে যোগাযোগ করুন
              <FaAngleRight className="text-lg ml-1" />
            </button>
            {/* <Link to="/register">Registraion to contact with admin</Link> */}
          </div>
          <div className="flex justify-around border-t border-gray-600">
            <button
              onClick={() => setMessage(!message)}
              className="text-purple-700 text-lg cursor-pointer"
            >
              হোম
            </button>
          </div>
        </div>
      )}

      {/* Contact Box */}
      {contact && (
        <div
          ref={contactBoxRef}
          className="fixed bottom-[22%] right-[6%] h-[520px] md:h-3/4 w-[325px] md:w-[430px] bg-gray-50 rounded-xl shadow-xl text-black p-10 overflow-y-scroll"
        >
          <div
            onClick={() => setContact(!contact)}
            className="flex gap-2 absolute top-1 left-1 my-2"
          >
            <FaAngleLeft className="text-4xl hover:bg-gray-200 p-2 rounded-2xl cursor-pointer" />
            <img src="chat.png" alt="chat" />
          </div>

          {/* ✅ Chat component with guest senderName */}
          <ChatComponent
            senderName={localStorage.getItem("senderName") || "Guest"}
          />
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
