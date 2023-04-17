import './App.css';
import Track from './components/Track/Track';
import TrackList from './components/TrackList/TrackList';

const example = [
  {name: 'name1', artist: 'artist1', album: 'album1'},
  {name: 'name2', artist: 'artist2', album: 'album2'},
  {name: 'name3', artist: 'artist3', album: 'album3'},
];

function App() {
  return (
    <div className="App">
      <TrackList tracks={example}/>
    </div>
  );
}

export default App;
