import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5000");

function AdminChat({ currentUserId, targetUserId }) {
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
    <div className=" text-black max-w-screen-lg mx-auto my-20">
      <h3 className="text-xl font-semibold mb-3 text-center text-white">
        Chat with user
      </h3>

      <div className="h-[70%] overflow-y-scroll border rounded-lg p-3 space-y-2 bg- ">
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
                {msg.senderId === currentUserId ? "You" : "Them"}
              </span>
              {msg.content}
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
              e.preventDefault(); // prevent newline
              sendMessage();
            }
          }}
          placeholder="Type a message"
          className="flex-1 px-4 py-2 text-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
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
