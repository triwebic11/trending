import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

function Login() {
  let adminEmail = "adminwinpbu@gmail.com";
  let adminPassword = "@#adminwinpbu#@";
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.email == adminEmail && form.password == adminPassword) {
      alert(
        "Login successful! You are now an admin. Click OK to go to the dashboard."
      );
      navigate("/dashboard");
    } else {
      alert("Invalid email or password. Please try again.");
    }
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
