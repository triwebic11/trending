import { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim() !== "") {
      onSearch(query);
    }
  };

  return (
    <div className="flex justify-center p-4">
      <input
        type="text"
        placeholder="Search by phone or keyword..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border border-gray-300 rounded-l px-4 py-2 w-1/2"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-600 text-white px-4 py-2 rounded-r"
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
