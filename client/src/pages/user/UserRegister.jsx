import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function UserRegister() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/user/register", formData);

      alert("Registration successful!");
      navigate("/login");
    } catch (err) {
      console.error(err);
      alert("Registration failed. Username might already exist.");
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-white">
      <h2 className="text-xl font-semibold mb-4">User Registration</h2>
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
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default UserRegister;
