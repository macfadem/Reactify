import React, { useCallback } from "react";
import TrackList from "../TrackList/TrackList";

const Playlist = (props) => {
  const { onNameChange } = props;
  const handleNameChange = useCallback(
    (event) => {
      onNameChange(event.target.value);
    },
    [onNameChange]
  );

  return (
    <div className="flex flex-col items-center w-full h-full max-h-950 px-8 py-6 bg-blue-900 bg-opacity-70 shadow-md">
      <input
        className="w-full border-b-2 border-gray-600 text-lg text-white font-poppins bg-transparent outline-none py-2 mb-5"
        onChange={handleNameChange}
        defaultValue={"New Playlist"}
      />
      <div className="overflow-y-auto w-full max-h-full">
        <TrackList
          tracks={props.playlistTracks}
          isRemoval={true}
          onRemove={props.onRemove}
        />
      </div>
      <button
        className="w-32 md:w-40 py-2 rounded-full border-0 mt-5 bg-purple-600 text-center text-sm md:text-base transition duration-250 ease-in-out font-medium hover:bg-purple-700"
        onClick={props.onSave}
      >
        SAVE TO SPOTIFY
      </button>
    </div>
  );
};

export default Playlist;
