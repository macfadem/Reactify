import React from "react";

import TrackList from "../TrackList/TrackList";

const SearchResults = (props) => {
  return (
    <div className="w-1/2 h-screen overflow-y-scroll p-2 bg-blue-900 bg-opacity-70 shadow-md">
      <h2 className="text-white text-xl font-bold mb-4">Results</h2>
      <div className="overflow-y-auto max-h-full">
        <TrackList tracks={props.searchResults} onAdd={props.onAdd} />
      </div>
    </div>
  );
};

export default SearchResults;
