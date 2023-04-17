import './App.css';
import Track from './components/Track/Track';
import TrackList from './components/TrackList/TrackList';

const example = [
  {name: 'name1', artist: 'artist1', album: 'album1'},
  {name: 'name2', artist: 'artist2', album: 'album2'},
  {name: 'name3', artist: 'artist3', album: 'album3'},
  {name: 'name4', artist: 'artist4', album: 'album4'},
  {name: 'name5', artist: 'artist5', album: 'album5'},
  {name: 'name6', artist: 'artist6', album: 'album6'},
  {name: 'name7', artist: 'artist7', album: 'album7'},
  {name: 'name8', artist: 'artist8', album: 'album8'},
  {name: 'name9', artist: 'artist9', album: 'album9'},
  {name: 'name10', artist: 'artist10', album: 'album10'}
];

function App() {
  return (
    <div className="App">
      <TrackList tracks={example}/>
    </div>
  );
}

export default App;
