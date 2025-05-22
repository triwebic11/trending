import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/register",
        formData
      );
      console.log(res.data);
      alert("Registration Successful!");
      navigate("/login");
    } catch (err) {
      console.error(err);
      alert("Registration failed");
    }
  };

  return (
    <div className="bg-white h-screen flex flex-col items-center justify-center border border-gray-600 rounded-3xl p-8">
      <h2 className="text-center text-xl mb-4">
        First you have to register <br /> for access dashboard login
      </h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center border border-gray-600 rounded-3xl p-8 gap-3"
      >
        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
          className="border border-gray-600 px-3 py-1 rounded-lg"
          required
        />
        <input
          name="email"
          placeholder="Email"
          type="email"
          onChange={handleChange}
          className="border border-gray-600 px-3 py-1 rounded-lg"
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          className="border border-gray-600 px-3 py-1 rounded-lg"
          required
        />
        <button
          type="submit"
          className="border border-gray-600 px-3 py-1 rounded-lg cursor-pointer hover:bg-purple-600 hover:text-white duration-300"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
