import React, { useCallback, useState } from 'react';
import './App.css';
import Playlist from './components/Playlist/Playlist';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import Spotify from './util/Spotify';

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const search = useCallback((term) => {
    Spotify.search(term).then(setSearchResults);
  }, []);

  const addTrack = useCallback(
    (track) => {
      if (playlistTracks.some((savedTrack) => savedTrack.id === track.id))
        return;

      setPlaylistTracks((prevTracks) => [...prevTracks, track]);
    },
    [playlistTracks]
  );

  const removeTrack = useCallback((track) => {
    setPlaylistTracks((prevTracks) =>
      prevTracks.filter((currentTrack) => currentTrack.id !== track.id)
    );
  }, []);

  const updatePlaylistName = useCallback((name) => {
    setPlaylistName(name);
  }, []);

  const savePlaylist = useCallback(() => {
    const trackUris = playlistTracks.map((track) => track.uri);
    Spotify.savePlaylist(playlistName, trackUris).then(() => {
      setPlaylistName("New Playlist");
      setPlaylistTracks([]);
    });
  }, [playlistName, playlistTracks]);

  return (
    <div className="min-h-screen bg-blue-1000 text-white">
      <h1 className="py-4 text-center text-4xl font-bold text-orange-500 font-heading">
        Reactify
      </h1>
      <div className="container mx-auto px-4 py-10 flex flex-wrap justify-center">
        <SearchBar onSearch={search} />
        <div className="flex w-full flex-wrap mt-10">
          <div className="w-full md:w-1/2 lg:w-2/5 px-2">
            <h2 className="font-bold text-2xl mb-4 text-orange-500">Results</h2>
            <SearchResults searchResults={searchResults} onAdd={addTrack} />
          </div>
          <div className="w-full md:w-1/2 lg:w-3/5 px-2">
            <h2 className="font-bold text-2xl mb-4 text-orange-500">Playlist</h2>
            <Playlist
              playlistName={playlistName}
              playlistTracks={playlistTracks}
              onNameChange={updatePlaylistName}
              onRemove={removeTrack}
              onSave={savePlaylist}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
  