import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import { FaAngleLeft } from "react-icons/fa6";
import { MdEmojiEmotions } from "react-icons/md";
import { MdOutlineAttachFile } from "react-icons/md";
import { MdGif } from "react-icons/md";

const socket = io("https://api.win-pbu.com", {
  withCredentials: true,
  transports: ["websocket"],
});

function ChatComponent({ currentUserId, targetUserId }) {
  const [allMessage, setAllMessage] = useState([]);
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    socket.on("receive_message", (data) => {
      if (
        (data.senderId === currentUserId && data.receiverId === targetUserId) ||
        (data.senderId === targetUserId && data.receiverId === currentUserId)
      ) {
        setMessages((prev) => [...prev, data]);
      }
    });

    return () => {
      socket.off("receive_message");
    };
  }, [currentUserId, targetUserId]);

  useEffect(() => {
    // Fetch previous messages
    const fetchMessages = async () => {
      try {
        const res = await axios.get("https://api.win-pbu.com/api/messages");
        setAllMessage(res.data);
        console.log(allMessage);
        console.log("Ther are your message-", res);
      } catch (err) {
        console.error("Failed to fetch messages", err);
      }
    };

    fetchMessages();
  }, []);

  const sendMessage = () => {
    const messageData = {
      senderId: currentUserId,
      receiverId: targetUserId,
      content: text,
    };
    socket.emit("send_message", messageData);
    setMessages((prev) => [...prev, messageData]);
    setText("");
  };

  return (
    <div>
      <div className="h-full overflow-y-scroll  p-3 space-y-2 bg-gray-50">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${
              msg.senderId === currentUserId ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`px-4 py-2 rounded-lg text-sm max-w-xs ${
                msg.senderId === currentUserId
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-gray-800"
              }`}
            >
              <span className="block font-medium mb-1">
                {msg.senderId === currentUserId ? "You:" : "Admin:"}
              </span>
              {msg.content}
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
                e.preventDefault(); // prevent newline
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
