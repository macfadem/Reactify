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
    <div className="bg-main2 text-white h-screen p-4 m-4 overflow-y-auto w-full flex items-center justify-center">
      <div className="overflow-y-auto h-full w-full">
          <input
          type="text"
          placeholder="New Playlist"
          onChange={handleNameChange}
          defaultValue={"New Playlist"}
          className="mb-4 border rounded shadow py-2 px-3 text-main2 w-full"
          />
        <div className="overflow-y-auto h-full w-full flex flex-col items-center">
          <TrackList
          tracks={props.playlistTracks}
          isRemoval={true}
          onRemove={props.onRemove}
        />

          <button
          onClick={props.onSave}
          className="bg-main1 text-sub2 py-2 px-4 rounded shadow mt-4"
          >
          Save to my Spotify
          </button>
        </div>   
      </div>
    </div>
  );
};

export default Playlist;