import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/api/login", form);
    localStorage.setItem("token", res.data.token);
    navigate("/dashboard");
  };

  return (
    <div className="bg-white h-screen flex flex-col items-center justify-center">
      <h1 className="text-xl my-2">Log in to go to dashboard</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center border border-gray-600 rounded-3xl p-8 gap-3
     "
      >
        <input
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="border border-gray-600 px-3 py-1 rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="border border-gray-600 px-3 py-1 rounded-lg"
        />
        <button
          type="submit"
          className="border border-gray-600 px-3 py-1 rounded-lg cursor-pointer hover:bg-purple-600 hover:text-white duration-300"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
