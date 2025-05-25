import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import axios from "axios";
import { MdEmojiEmotions, MdOutlineAttachFile, MdGif } from "react-icons/md";

// 🌐 Auto-switch local/dev and live
const API_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:5000"
    : "https://api.win-pbu.com";

const socket = io(API_URL, {
  withCredentials: true,
  transports: ["websocket"],
});

function ChatComponent({ senderName }) {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  const userId = localStorage.getItem("userId"); // ✅ Get the current user's ID

  useEffect(() => {
    socket.on("receive_message", (data) => {
      // ✅ Show message only if it's for this user
      if (data.userId === userId || data.senderType === "user") {
        setMessages((prev) => [...prev, data]);
      }
    });

    return () => {
      socket.off("receive_message");
    };
  }, [userId]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/messages/${userId}`); // ✅ User-specific messages
        setMessages(res.data);
      } catch (err) {
        console.error("Failed to fetch messages", err);
      }
    };

    if (userId) fetchMessages();
  }, [userId]);

  const sendMessage = () => {
    if (!text.trim()) return;
    const messageData = {
      senderName: senderName,
      senderType: "user",
      message: text,
      userId: userId, // ✅ Send with userId
    };
    socket.emit("send_message", messageData);
    setText("");
  };

  return (
    <div>
      <div className="h-full overflow-y-scroll p-3 space-y-2 bg-gray-50">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${
              msg.senderType === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`px-4 py-2 rounded-lg text-sm max-w-xs ${
                msg.senderType === "user"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-gray-800"
              }`}
            >
              <span className="block font-medium mb-1">
                {msg.senderType === "user" ? "You:" : "Admin:"}
              </span>
              {msg.message}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex gap-2">
        <div className="w-[300px] md:w-[380px] fixed bottom-[24%] right-[8%] focus-visible:border-[1px] focus-visible:border-purple-600 rounded-lg border border-gray-300 inline-flex items-center px-1 gap-1 overflow-hidden">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                sendMessage();
              }
            }}
            placeholder="মেসেজ"
            className="px-1 py-2 outline-none w-full inline-block"
          />
          <MdEmojiEmotions className="hidden md:inline-block text-gray-600 text-xl hover:text-gray-700 cursor-pointer" />
          <MdGif className="hidden md:inline-block text-gray-600 text-xl hover:text-gray-700 cursor-pointer" />
          <MdOutlineAttachFile className="hidden md:inline-block text-gray-600 text-xl hover:text-gray-700 cursor-pointer" />
          <button
            onClick={sendMessage}
            className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-2 rounded-lg font-medium text-xl cursor pointer"
          >
            ^
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatComponent;
