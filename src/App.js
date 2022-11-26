import styled from 'styled-components';
import './App.css';
import SearchBar from './components/searchbar';

const Image = styled.img`
@media (max-width: 600px) {
  width: 20em;
  position: relative;
  bottom: 13em;
}
`

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Image src={"/logo.png"} alt="titulo"/>
        </div>
        <SearchBar />
      </header>
    </div>
  );
}

export default App;
