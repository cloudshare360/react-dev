import logo from './logo.svg';
import './App.css';

function App() {
  let isMorning = (new Date()).getHours() < 12;
  let greetingElement = isMorning?
                        <h3> Good Morning! </h3>
                        : <h3> Good Evening! </h3>

  let adjective  = "cool"
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        {greetingElement}
        </p>
        <p> This is so {adjective} 
          </p>
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
