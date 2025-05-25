import React, { useEffect, useState } from "react";
import axios from "axios";
import io from "socket.io-client";

const API_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:5000"
    : "https://api.win-pbu.com";

const socket = io(API_URL, {
  withCredentials: true,
  transports: ["websocket"],
});

function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    // Load all users
    const fetchUsers = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/user/all`);
        setUsers(res.data);
      } catch (err) {
        console.error("Failed to load users", err);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    socket.on("receive_message", (data) => {
      if (data.userId === selectedUser?._id) {
        setMessages((prev) => [...prev, data]);
      }
    });

    return () => socket.off("receive_message");
  }, [selectedUser]);

  const loadMessages = async (userId) => {
    try {
      const res = await axios.get(`${API_URL}/api/messages/${userId}`);
      setMessages(res.data);
    } catch (err) {
      console.error("Failed to load messages", err);
    }
  };

  const handleUserSelect = (user) => {
    setSelectedUser(user);
    loadMessages(user._id);
  };

  const sendMessage = () => {
    if (!text.trim() || !selectedUser) return;

    const messageData = {
      senderName: "Admin",
      senderType: "admin",
      message: text,
      userId: selectedUser._id,
    };

    socket.emit("send_message", messageData);
    setMessages((prev) => [...prev, messageData]);
    setText("");
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/4 border-r p-4 bg-white overflow-y-auto">
        <h2 className="text-lg font-bold mb-4">Users</h2>
        {users.map((user) => (
          <div
            key={user._id}
            onClick={() => handleUserSelect(user)}
            className={`cursor-pointer p-2 rounded mb-2 ${
              selectedUser?._id === user._id
                ? "bg-blue-200"
                : "hover:bg-gray-200"
            }`}
          >
            {user.username} ({user.uniqueId})
          </div>
        ))}
      </div>

      {/* Chat Area */}
      <div className="flex-1 p-4 flex flex-col bg-gray-50">
        <h2 className="text-lg font-bold mb-4">
          {selectedUser
            ? `Chatting with ${selectedUser.username}`
            : "Select a user"}
        </h2>

        <div className="flex-1 overflow-y-auto border rounded p-4 bg-white">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`mb-2 flex ${
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
                <span className="block text-xs font-medium mb-1">
                  {msg.senderType === "admin" ? "You" : selectedUser?.username}
                </span>
                {msg.message}
              </div>
            </div>
          ))}
        </div>

        {selectedUser && (
          <div className="mt-4 flex gap-2">
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") sendMessage();
              }}
              placeholder="Type a message"
              className="flex-1 px-4 py-2 border rounded"
            />
            <button
              onClick={sendMessage}
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              Send
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminDashboard;
