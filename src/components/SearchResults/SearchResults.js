import React from "react";
import TrackList from "../TrackList/TrackList";

const SearchResults = (props) => {

  if (props.searchResults === undefined || props.searchResults.length === 0) {
    return (
      <div className="bg-sub1 text-sub2 h-screen p-4 m-4 overflow-y-auto w-full">
        <div className="overflow-y-auto h-full">
          <h2 className="font-bold text-2xl mb-4 text-justify text-sub2">Your Search Results Will Appear Here</h2>
        </div>
      </div>
    )
  }else{
    return (
      <div className="bg-sub1 text-sub2 h-screen p-4 m-4 overflow-y-auto w-full">
        <div className="overflow-y-auto h-full">
          <TrackList tracks={props.searchResults} onAdd={props.onAdd} />
        </div>
      </div>
    );
  };
};

export default SearchResults;