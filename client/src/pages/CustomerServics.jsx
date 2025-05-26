import React from "react";
import Container from "../components/Container";
import customer from "../assets/customer.jpeg";
import { FaWhatsappSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import ListComponant from "../components/ListComponant";

const CustomerServics = () => {
  const data = [
    { id: 8, type: "কাস্টমার সার্ভিস", phone: "+855969477041" },
    { id: 19, type: "কাস্টমার সার্ভিস", phone: "+85570550486" },
    { id: 7, type: "কাস্টমার সার্ভিস", phone: "+601124255228" },
    { id: 15, type: "কাস্টমার সার্ভিস", phone: "+85510526088" },
    { id: 23, type: "কাস্টমার সার্ভিস", phone: "+601124069381" },
    { id: 20, type: "কাস্টমার সার্ভিস", phone: "+85570564732" },
    { id: 11, type: "কাস্টমার সার্ভিস", phone: "+85561743988" },
    { id: 9, type: "কাস্টমার সার্ভিস", phone: "+85595989258" },
    { id: 18, type: "কাস্টমার সার্ভিস", phone: "+85581749657" },
    { id: 22, type: "কাস্টমার সার্ভিস", phone: "+60173153172" },
  ];

  return (
    <div>
      <ListComponant image={customer} text={"Customer service List"}></ListComponant>

      
    </div>
  );
};

export default CustomerServics;
