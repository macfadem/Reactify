import './App.css';
import Playlist from './components/Playlist/Playlist';
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
  return (
    <div className="App">
      <Playlist playlistTracks={example} />
    </div>
  );
}

export default App;
