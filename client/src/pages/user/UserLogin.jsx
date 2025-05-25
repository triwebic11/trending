import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function UserLogin() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        await axios.post("http://localhost:5000/api/user/login", formData)
      );

      localStorage.setItem("userToken", res.data.token);
      localStorage.setItem("userId", res.data.userId);
      localStorage.setItem("username", res.data.username);

      alert("Login successful! Now you can message with admin");
      navigate("/");
    } catch (err) {
      console.error(err);
      alert("Login failed. Check your credentials.");
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-white">
      <h2 className="text-xl font-semibold mb-4">User Login</h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 border p-6 rounded-xl"
      >
        <input
          name="username"
          placeholder="Username"
          onChange={handleChange}
          required
          className="border px-3 py-2 rounded"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          required
          className="border px-3 py-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default UserLogin;
