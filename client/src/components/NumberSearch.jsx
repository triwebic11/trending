import React, { useState } from 'react';

const NumberSearch = ({ onSearch }) => {
  const [agentNumber, setAgentNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    onSearch({ agentNumber: agentNumber });
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
          <label className="block mb-1">Phone Number:</label>
          <input
            type="text"
            value={agentNumber}
            onChange={(e) => setAgentNumber(e.target.value)}
            className="w-full px-3 py-3 bg-[#1e1e1e] border border-white rounded text-white"
            placeholder="Enter Agent ID"
            required
          />
        </div>

        <div>
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

export default NumberSearch;
