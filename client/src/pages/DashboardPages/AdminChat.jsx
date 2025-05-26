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

  // Load all messages and group users with unread count
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/messages/all`);
        const messages = res.data;

        const userMap = {};
        const unreadMap = {};

        messages.forEach((msg) => {
          if (!msg.userId) return;

          // Last message
          if (
            !userMap[msg.userId] ||
            new Date(msg.createdAt) > new Date(userMap[msg.userId].lastTime)
          ) {
            userMap[msg.userId] = {
              _id: msg.userId,
              userId: msg.userId,
              lastMessage: msg.message,
              lastTime: msg.createdAt,
            };
          }

          // Count unread messages (from users only)
          if (msg.senderType === "user") {
            unreadMap[msg.userId] = (unreadMap[msg.userId] || 0) + 1;
          }
        });

        const userList = Object.values(userMap).sort(
          (a, b) => new Date(b.lastTime) - new Date(a.lastTime)
        );

        setUsers(userList);
        setUnreadCounts(unreadMap);
      } catch (err) {
        console.error("Failed to load users", err);
      }
    };

    fetchUsers();
  }, []);

  // Socket listener for incoming messages
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

        setUsers((prevUsers) => {
          const updatedUser = {
            _id: data.userId,
            userId: data.userId,
            lastMessage: data.message,
            lastTime: data.createdAt || new Date().toISOString(),
          };

          const userExists = prevUsers.find((u) => u._id === data.userId);
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

  useEffect(() => {
  if (selectedUser?._id) {
    loadMessages(selectedUser._id);
  }
}, [selectedUser]);

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
      const res = await axios.post(`${API_URL}/api/messages/send`, messageData);
      const savedMessage = res.data;

      setMessages((prev) => [...prev, savedMessage]);
      setText("");

      setUsers((prevUsers) => {
        const updatedUsers = prevUsers.map((u) =>
          u._id === selectedUser._id
            ? {
                ...u,
                lastMessage: savedMessage.message,
                lastTime: savedMessage.createdAt,
              }
            : u
        );
        return updatedUsers.sort(
          (a, b) => new Date(b.lastTime) - new Date(a.lastTime)
        );
      });
    } catch (err) {
      console.error("Message send failed:", err.response?.data || err.message);
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/4 border-r p-4 overflow-y-auto text-white">
        <h2 className="text-lg font-bold mb-4 text-white">Users</h2>
        {users.map((user) => {
          const count = unreadCounts[user._id] || 0;
          return (
            <div
              key={user._id}
              onClick={() => handleUserSelect(user)}
              className={`cursor-pointer p-2 rounded mb-2 flex justify-between items-center ${
                selectedUser?._id === user._id
                  ? "bg-blue-200 text-black"
                  : "hover:bg-gray-200 text-white"
              }`}
            >
              <span className="font-semibold text-sm">{user.userId}</span>
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
      <div className="flex-1 p-4 flex flex-col">
        <h2 className="text-lg font-bold mb-4 text-amber-500">
          {selectedUser
            ? `Chatting with ${selectedUser.userId}`
            : "Select a user"}
        </h2>

        <div className="flex-1 overflow-y-auto border rounded p-4 border-gray-400">
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
              className="flex-1 px-4 py-2 text-white border-gray-400 border rounded"
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
