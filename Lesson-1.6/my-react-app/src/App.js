import logo from './logo.svg';
import './App.css';
import { Greeting } from './Greeting';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          {/* { <Greeting name="Srinivas" /> } */}
          {/* { <Greeting numberOfMessages={10}/> } */}
          {<Greeting name="Srinivas" numberOfMessages={10} />}
          {<Greeting name="Srinivas" numberOfMessages={0} />}
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
