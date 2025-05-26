import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import axios from "axios";
import { MdEmojiEmotions, MdOutlineAttachFile, MdGif } from "react-icons/md";

// ✅ API URL
const API_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:5000"
    : "https://api.win-pbu.com";

// ✅ Socket init
const socket = io(API_URL, {
  withCredentials: true,
  transports: ["websocket"],
});

// ✅ Generate random ID function
const generateRandomId = () => {
  return "user-" + Math.random().toString(36).substr(2, 9);
};

function ChatComponent({ senderName = "Anonymous" }) {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  // ✅ Get or set userId from localStorage
// ✅ Always generate new userId on each page load
const [userId] = useState(() => generateRandomId());


  // ✅ Receive messages
  useEffect(() => {
    const handleReceiveMessage = (data) => {
      if (data.userId === userId || data.senderType === "user") {
        setMessages((prev) => [...prev, data]);
      }
    };

    socket.on("receive_message", handleReceiveMessage);
    return () => socket.off("receive_message", handleReceiveMessage);
  }, [userId]);

  // ✅ Load existing messages
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/messages/${userId}`);
        setMessages(res.data);
        console.log("Messages loaded:", res.data);
      } catch (err) {
        console.error("Failed to fetch messages", err);
      }
    };

    if (userId) fetchMessages();
  }, [userId]);

  // ✅ Send message
  const sendMessage = () => {
    if (!text.trim()) return;

    const messageData = {
      senderName,
      senderType: "user",
      message: text,
      userId,
    };

    socket.emit("send_message", messageData);
    setText("");
    console.log("Message sent:", messageData);
  };

  return (
    <div>
      {/* Chat area */}
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

      {/* Input section */}
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
            className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-2 rounded-lg font-medium text-xl cursor-pointer"
          >
            ^
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatComponent;
