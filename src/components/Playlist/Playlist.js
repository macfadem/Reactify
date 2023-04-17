import React from "react";
import "./Playlist.css";
import TrackList from "../TrackList/TrackList";

function Playlist(props) {
  return (
    <div className="Playlist">
      <input defaultValue={"New Playlist"} />
      <TrackList tracks={props.playlistTracks} />
      <button className="Playlist-save">Save to my Spotify</button>
    </div>
  );
}

export default Playlist;