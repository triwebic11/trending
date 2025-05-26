import React, { useState } from 'react';

const AgentSearchForm = ({ onSearch }) => {
  const [agentType, setAgentType] = useState('');
  const [agentId, setAgentId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // data পাঠানো হচ্ছে parent কম্পোনেন্টে
    onSearch({ agentType, agentId });
  };

  return (
    <div className="flex flex-col items-center justify-center text-white px-4 py-10">
      <h2 className="text-center text-lg font-semibold mb-2">
        এজেন্ট এর আইডি নাম্বার দিয়ে খুঁজুন:
      </h2>
      <form 
        onSubmit={handleSubmit} 
        className="border border-white rounded-md p-6 w-full max-w-sm space-y-4"
      >
        <div>
          <label className="block mb-1">Agent Type:</label>
          <select
            value={agentType}
            onChange={(e) => setAgentType(e.target.value)}
            className="w-full px-3 py-2 bg-[#1e1e1e] border border-white rounded text-white"
            required
          >
            <option value="">-- এজেন্ট বাছাই করুন --</option>
            <option value="Master">মাস্টার এজেন্ট</option>
            <option value="Supper">সুপার এজেন্ট</option>
            <option value="Sub_admin">সাব এডমিন</option>
            <option value="Site_admin">সাইট এডমিন</option>
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

        <div>
          <button
            type="submit"
            className="bg-[#4caf50] hover:bg-green-700 text-white font-semibold px-7 py-2 rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AgentSearchForm;
