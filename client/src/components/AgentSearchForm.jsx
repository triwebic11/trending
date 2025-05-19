import React, { useState } from 'react';

const AgentSearchForm = () => {
  const [agentType, setAgentType] = useState('');
  const [agentId, setAgentId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ agentType, agentId });
  };

  return (
    <div className=" flex flex-col items-center justify-center  text-white px-4 py-16">
        <h2 className="text-center text-lg font-semibold mb-2">
          এজেন্ট এর আইডি নাম্বার দিয়ে খুঁজুন:
        </h2>
      <form 
        onSubmit={handleSubmit} 
        className=" border border-white rounded-md p-6 w-full max-w-sm space-y-4"
      >

        <div>
          <label className="block mb-1">Agent Type:</label>
          <select
            value={agentType}
            onChange={(e) => setAgentType(e.target.value)}
            className="w-full px-3 py-2 bg-[#1e1e1e] border border-white rounded text-white"
            required
          >
            {/* <option value="">-- এজেন্ট বাছাই করুন --</option> */}
            <option value="master">মাস্টার এজেন্ট</option>
            <option value="sub">সাব এজেন্ট</option>
          </select>
        </div>

        <div>
          <label className="block mb-1">Agent ID:</label>
          <input
            type="text"
            value={agentId}
            onChange={(e) => setAgentId(e.target.value)}
            className="w-full px-3 py-3 bg-[#1e1e1e] border border-white rounded text-white"
            placeholder="Enter Agent ID"
            required
          />
        </div>

        <div className="">
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AgentSearchForm;
