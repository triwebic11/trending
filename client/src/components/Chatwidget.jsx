import React, { useState } from "react";
import { MessageSquare, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const ChatWidget = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-32 right-6 z-50">
      {open && (
        <div className="w-80 bg-white rounded-xl shadow-xl p-4 text-black">
          <div className="bg-yellow-600 text-white rounded-t-xl px-4 py-3 flex flex-col gap-2">
            <div className="font-bold text-lg">হাই 👋</div>
            <div className="text-sm">আমরা কিভাবে সাহায্য করতে পারি?</div>
          </div>

          <div className="bg-white px-4 py-2 flex flex-col gap-3">
            <button className="bg-gray-100 px-4 py-2 rounded flex justify-between items-center">
              আমাদের সাথে যোগাযোগ করুন
              <ChevronDown size={16} />
            </button>

            <Link
              href="https://www.proxy9wkts.com/"
              target="blank"
              className="bg-gray-100 px-4 py-2 rounded flex justify-between items-center"
            >
              আমাদের প্রস্তাবিত লিংক গুলো দেখুন
              <ChevronDown size={16} />
            </Link>

            <Link
              to="https://win-pbu.com/masteragentlist"
              target="blank"
              className="bg-gray-100 px-4 py-2 rounded flex justify-between items-center"
            >
              ভেকি মাশীন এজেন্ট লিস্ট
              <ChevronDown size={16} />
            </Link>
          </div>

          <div className="flex justify-around border-t mt-2 pt-2 text-sm">
            <button className="text-purple-700">হোম</button>
            <button className="text-purple-700">মেসেজ</button>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="bg-purple-700 p-4 mt-2  rounded-full shadow-lg  items-center justify-center hover:bg-purple-800 transition"
      >
        <MessageSquare className="text-green-400" />
      </button>
    </div>
  );
};

export default ChatWidget;
