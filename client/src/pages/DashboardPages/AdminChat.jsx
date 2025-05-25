import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import axios from "axios";

const API_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:5000"
    : "https://api.win-pbu.com";

const socket = io(API_URL, {
  withCredentials: true,
  transports: ["websocket"],
});

function AdminChat({ senderName }) {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessages((prev) => [...prev, data]);
    });

    return () => {
      socket.off("receive_message");
    };
  }, []);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/messages/all`);
        setMessages(res.data);
      } catch (err) {
        console.error("Failed to fetch messages", err);
      }
    };

    fetchMessages();
  }, []);

  const sendMessage = () => {
    if (!text.trim()) return;
    const messageData = {
      senderName: senderName,
      senderType: "admin",
      message: text,
    };
    socket.emit("send_message", messageData);
    setText("");
  };

  return (
    <div className="text-black max-w-screen-lg mx-auto my-20">
      <h3 className="text-xl font-semibold mb-3 text-center text-white">
        Chat with user
      </h3>

      <div className="h-[70%] overflow-y-scroll border rounded-lg p-3 space-y-2 bg-white">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${
              msg.senderType === "admin" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`px-4 py-2 rounded-lg text-sm max-w-xs ${
                msg.senderType === "admin"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-gray-800"
              }`}
            >
              <span className="block font-medium mb-1">
                {msg.senderType === "admin" ? "You" : "User:"}
              </span>
              {msg.message}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex gap-2 text-white">
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
          placeholder="Type a message"
          className="flex-1 px-4 py-2 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={sendMessage}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default AdminChat;
