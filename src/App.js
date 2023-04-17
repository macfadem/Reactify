import './App.css';
import Playlist from './components/Playlist/Playlist';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import Track from './components/Track/Track';
import TrackList from './components/TrackList/TrackList';

const example = [
  {name: 'Hard Times', artist: 'Paramore', album: 'After Laughter'},
  {name: 'Numb', artist: 'Linkin Park', album: 'Meteora'},
  {name: 'Dákiti', artist: 'Bad Bunny', album: 'El Último Tour Del Mundo'},
  {name: '3 Nights', artist: 'Dominic Fike', album: 'Don\'t Forget About Me, Demos'},
  {name: 'In The End', artist: 'Linkin Park', album: 'Hybrid Theory'},
  {name: 'Mía', artist: 'Bad Bunny', album: 'X 100PRE'},
  {name: 'Ain\'t It Fun', artist: 'Paramore', album: 'Paramore'},
  {name: 'Why', artist: 'Dominic Fike', album: 'What Could Possibly Go Wrong'},
  {name: 'La Canción', artist: 'Bad Bunny', album: 'YHLQMDLG'},
  {name: 'Misery Business', artist: 'Paramore', album: 'RIOT!'}
];


function App() {
  const searchResults = example;
  return (
    <div>
      <h1>
        Reactify
      </h1>
      <div className="App">
        <SearchBar/>
        <SearchResults searchResults={searchResults}/>
        <Playlist playlistTracks={example} />
      </div>
    </div>
  );
}

export default App;
