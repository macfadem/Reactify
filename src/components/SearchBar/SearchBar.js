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
    <div className="flex flex-row items-center pt-10 pb-0 mb-10">
      <input
        className="w-60 h-10 py-1 px-4 mr-2 border rounded-md text-bg text-center text-sm bg-sub2 shadow-md"
        type="text"
        placeholder="Enter A Song Title"
        onChange={handleTermChange}
      />
      <button 
        className="cursor-pointer w-20 h-10 py-1 px-4 rounded-full bg-main1 hover:bg-sub1 transition-colors duration-250 text-sub2 text-sm font-medium shadow-md" 
        onClick={search}>
        Search
      </button>
    </div>
  ); 
};
  
  export default SearchBar;