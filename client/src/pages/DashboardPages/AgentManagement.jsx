import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Listbox } from "@headlessui/react";
import { FaRegTrashAlt } from "react-icons/fa";

const options = ["Master", "Supper", "Sub_admin", "Site_admin"];
const siteoptions = ["BAAJIWALA", "VELKI"];

const AgentManagement = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [submittedData, setSubmittedData] = useState([]);
  const [selected, setSelected] = useState(options[0]);
  const [siteselected, setSiteSelected] = useState(siteoptions[0]);

  const queryClient = useQueryClient();

  // Fetch agents
  const { data: agents = [], isLoading, refetch } = useQuery({
    queryKey: ["agents"],
    queryFn: async () => {
      const res = await axios.get("https://api.win-pbu.com/api/agent");
      return res.data;
    },
  });
  console.log("agentssssss", agents);

  // Add agent
  const mutation = useMutation({
    mutationFn: async (data) => {
      const res = await axios.post("https://api.win-pbu.com/api/agent", data);
      return res.data;
    },
    onSuccess: (data, variables) => {
      if (data.message === "Agent saved successfully") {
        Swal.fire("Agent saved successfully!");
        refetch()
        queryClient.invalidateQueries(["agents"]);
        reset();
        setSubmittedData((prev) => [...prev, variables]);
      } else {
        Swal.fire("Failed to save agent");
      }
    },
    onError: () => {
      Swal.fire("Failed to submit form");
    },
  });

  // Delete agent
  const deleteMutation = useMutation({
    mutationFn: async (id) => {
      const res = await axios.delete(`https://api.win-pbu.com/api/agent/${id}`);
      return res.data;
    },
    onSuccess: () => {
      Swal.fire("Agent deleted successfully!");
      refetch();
      queryClient.invalidateQueries(["agents"]);
    },
    onError: (error) => {
      console.error("Delete error:", error);
      Swal.fire("Failed to delete agent");
    },
  });

  const onSubmit = (data) => {
    const newId = (agents.length + 1).toString().padStart(2, "0");
    const finalData = {
      ...data,
      uniqueId: newId,
      type: selected,
      sites: siteselected,
    };
    mutation.mutate(finalData);
  };
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteMutation.mutate(id);
      }
    });
  };


  return (
    <div className='text-white bg-[#1e1e1e]'>
      <div className="max-w-md mx-auto mt-10 p-6 shadow-lg rounded border">
        <h2 className="text-xl font-bold mb-4">Add Agent Info</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Agent Number */}
          <div>
            <label className="block font-medium">Agent Number</label>
            <input
              {...register("agentNumber", { required: "Agent number is required" })}
              className="w-full border px-3 py-2 rounded text-white" placeholder='Enter Agent whatsApp Number'
            />
            {errors.agentNumber && <p className="text-red-500 text-sm">{errors.agentNumber.message}</p>}
          </div>

          {/* Site */}
          <div>
            <label className="block font-medium text-gray-300 mb-1">Site</label>
            <Listbox value={siteselected} onChange={setSiteSelected}>
              <div className="relative">
                <Listbox.Button className="w-full border border-gray-300 rounded px-3 py-2 text-left text-white">
                  {siteselected}
                </Listbox.Button>
                <Listbox.Options className="absolute mt-1 w-full border rounded bg-black text-white shadow-lg ">
                  {siteoptions.map((option, index) => (
                    <Listbox.Option
                      key={index}
                      value={option}
                      className={({ active }) =>
                        `cursor-pointer px-4 py-2 ${active ? "bg-amber-500 text-white" : "text-white"}`
                      }
                    >
                      {option}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </div>
            </Listbox>
          </div>

          {/* Type */}
          <div>
            <label className="block font-medium text-gray-300 mb-1">Type</label>
            <Listbox value={selected} onChange={setSelected}>
              <div className="relative">
                <Listbox.Button className="w-full border border-gray-300 rounded px-3 py-2 text-left text-white">
                  {selected}
                </Listbox.Button>
                <Listbox.Options className="absolute mt-1 w-full border rounded bg-black text-white shadow-lg z-10">
                  {options.map((option, index) => (
                    <Listbox.Option
                      key={index}
                      value={option}
                      className={({ active }) =>
                        `cursor-pointer px-4 py-2 ${active ? "bg-amber-500 text-white" : "text-white"}`
                      }
                    >
                      {option}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </div>
            </Listbox>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-amber-600 text-white py-3 px-4 rounded hover:bg-amber-700"
          >
            Submit
          </button>
        </form>
      </div>
      <h2 className="text-2xl font-bold text-center my-4">All Agents</h2>
      <div className='w-[90%] m-auto overflow-x-scroll'>
        <div className=" my-4">
          <table className="w-full  border-collapse border font-bold border-white text-white text-center my-4">
            <thead className="">
              <tr>
                <th className="border border-white px-4 py-2">ID NO</th>
                <th className="border border-white px-4 py-2">TYPE</th>
                <th className="border border-white px-4 py-2">SITE</th>
                <th className="border border-white px-4 py-2">PHONE NUMBER</th>
                <th className="border border-white px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody className="">
              {agents?.map((row) => (
                <tr key={row.id}>
                  <td className="border border-white px-4 py-2">{row?.uniqueId}</td>
                  <td className="border border-white px-4 py-2">{row?.type}</td>
                  <td className="border border-white px-4 py-2">
                    {row?.sites}
                  </td>
                  <td className="border border-white px-4 py-2">
                    <a
                      href={`https://wa.me/${row?.agentNumber.replace(/\D/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#ff7c7c] duration-200 text-white underline"
                    >
                      {row?.agentNumber}
                    </a>
                  </td>
                  <td className=" border border-white m-auto">
                    <FaRegTrashAlt className='m-auto' onClick={() => handleDelete(row?._id)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AgentManagement;
