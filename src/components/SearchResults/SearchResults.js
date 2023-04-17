import React from "react";
import TrackList from "../TrackList/TrackList";

const SearchResults = (props) => {

  if (props.searchResults === undefined || props.searchResults.length === 0) {
    return (
      <div className="bg-sub1 text-sub2 h-screen p-4 m-4 overflow-y-auto w-full">
        <div className="overflow-y-auto h-full">
          <h2 className="font-bold text-2xl mb-4 text-sub2">Use the SearchBar to find your favorite songs and make your playlist!</h2>
        </div>
      </div>
    )
  }else{
    return (
      <div className="bg-sub1 text-sub2 max-h-screen p-4 m-4 overflow-y-auto w-full">
        <div className="overflow-y-auto h-full">
          <TrackList tracks={props.searchResults} onAdd={props.onAdd} />
        </div>
      </div>
    );
  };
};

export default SearchResults;