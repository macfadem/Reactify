import React, { useState, useCallback } from "react";

const SearchBar = (props) => {
  const [term, setTerm] = useState("");

  const handleTermChange = useCallback((event) => {
    setTerm(event.target.value);
  }, []);
  const { onSearch } = props;
  const search = useCallback(() => {
    onSearch(term);
  }, [onSearch, term]);

  return (
    <div className="flex flex-col items-center pt-28 pb-20 mb-20">
      <input
        className="w-72 py-2 border border-blue-400 rounded-md mb-6 text-white text-center text-lg bg-blue-800"
        type="text"
        placeholder="Enter A Song Title"
        onChange={handleTermChange}
      />
      <button 
        className="cursor-pointer w-32 py-2 rounded-full bg-orange-400 hover:bg-orange-500 transition-colors duration-250 text-white font-medium" 
        onClick={search}>
        Search
      </button>
    </div>
  );  
};
  
  export default SearchBar;
