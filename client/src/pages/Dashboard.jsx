import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Container from "../components/Container";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) navigate("/");
    // You can also verify token by calling a protected route here
  }, [navigate]);

  return (
    <div className="bg-white h-screen">
      <Container>
        <h2 className="text-4xl text-center py-4">Admin Dashboard</h2>
      </Container>
      {/* Add form and table here to Add/Delete Data */}
    </div>
  );
};

export default Dashboard;
