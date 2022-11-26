import './App.css';
import SearchBar from './components/searchbar';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <img src={"/logo.png"} alt="titulo"/>
        </div>
        <SearchBar />
      </header>
    </div>
  );
}

export default App;
