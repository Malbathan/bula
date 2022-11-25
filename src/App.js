import logo from './logo.svg';
import './App.css';
import SearchBar from './components/searchbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Starting Bula Downloader
        </p>
        <SearchBar />
      </header>
    </div>
  );
}

export default App;
