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
  const [unreadCounts, setUnreadCounts] = useState({});

  // Load all messages and group users
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get(`https://api.win-pbu.com/api/messages/all`);
        const messages = res.data;

        const userMap = {};

        messages.forEach((msg) => {
          if (!msg.userId) return;

          const existing = userMap[msg.userId];
          if (!existing || new Date(msg.createdAt) > new Date(existing.lastTime)) {
            userMap[msg.userId] = {
              _id: msg.userId,
              userId: msg.userId,
              lastTime: msg.createdAt,
              lastMessage: msg.message,
            };
          }
        });

        const sortedUsers = Object.values(userMap).sort(
          (a, b) => new Date(b.lastTime) - new Date(a.lastTime)
        );

        setUsers(sortedUsers);
      } catch (err) {
        console.error("Failed to load users", err);
      }
    };

    fetchUsers();
  }, []);

  // Socket listener
  useEffect(() => {
    const handleReceiveMessage = (data) => {
      if (data.senderType !== "admin") {
        if (data.userId === selectedUser?._id) {
          setMessages((prev) => [...prev, data]);
        } else {
          setUnreadCounts((prev) => ({
            ...prev,
            [data.userId]: (prev[data.userId] || 0) + 1,
          }));
        }

        // Move sender to top
        setUsers((prevUsers) => {
          const userExists = prevUsers.find((u) => u._id === data.userId);
          const updatedUser = {
            _id: data.userId,
            userId: data.userId,
            lastMessage: data.message,
            lastTime: data.createdAt || new Date().toISOString(),
          };

          const updatedUsers = userExists
            ? prevUsers.map((u) => (u._id === data.userId ? updatedUser : u))
            : [...prevUsers, updatedUser];

          return updatedUsers.sort(
            (a, b) => new Date(b.lastTime) - new Date(a.lastTime)
          );
        });
      }
    };

    socket.on("receive_message", handleReceiveMessage);
    return () => socket.off("receive_message", handleReceiveMessage);
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
    setUnreadCounts((prev) => {
      const updated = { ...prev };
      delete updated[user._id];
      return updated;
    });
  };

  const sendMessage = async () => {
    if (!text.trim() || !selectedUser) return;

    const messageData = {
      senderName: "Admin",
      senderType: "admin",
      message: text,
      userId: selectedUser._id,
    };

    try {
      await axios.post(`${API_URL}/api/messages/send`, messageData);
      setMessages((prev) => [...prev, { ...messageData, createdAt: new Date().toISOString() }]);
      setText("");

      // Update sidebar user list
      setUsers((prevUsers) => {
        const updatedUsers = prevUsers.map((u) =>
          u._id === selectedUser._id
            ? { ...u, lastMessage: text, lastTime: new Date().toISOString() }
            : u
        );
        return updatedUsers.sort(
          (a, b) => new Date(b.lastTime) - new Date(a.lastTime)
        );
      });
    } catch (err) {
      console.error("Message send failed", err);
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/4 border-r p-4 overflow-y-auto bg-[#111111]">
        <h2 className="text-lg font-bold mb-4 bg-[#111111]">Users</h2>
        {users?.map((user) => {
          const count = unreadCounts[user._id] || 0;
          return (
            <div
              key={user._id}
              onClick={() => handleUserSelect(user)}
              className={`cursor-pointer p-2 rounded mb-2 flex justify-between items-center ${
                selectedUser?._id === user._id
                  ? "bg-blue-200 text-black"
                  : "hover:bg-gray-200 hover:text-black"
              }`}
            >
              <span className="font-semibold text-sm text-white hover:text-black">{user.userId}</span>
              {count > 0 && (
                <span className="ml-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                  {count}
                </span>
              )}
            </div>
          );
        })}
      </div>

      {/* Chat Area */}
      <div className="flex-1 p-4 flex flex-col bg-[#111111]">
        <h2 className="text-lg font-bold mb-4 text-white">
          {selectedUser ? `Chatting with - ${selectedUser.userId}` : "Select a user"}
        </h2>

        <div className="flex-1 overflow-y-auto border rounded p-4 bg-[#111111] border-gray-300">
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
                  {msg.senderType === "admin" ? "You" : msg.senderName}
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
              className="flex-1 px-4 py-2 border rounded border-gray-300 text-white"
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
