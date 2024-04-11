import logo from './logo.svg';
import './App.css';
//import Greeting  from './GreetingWithDefaultExports';
//import { Greeting }  from './GreetingWithExportsAtFunction';
import { GreetingShortter }  from './GreetingWithExportsAtFunctionArrayFunctionSyntaxShorterVersion';

function App() {
 
  let adjective  = "cool";
  let url = "https://reactjs.org";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
       <GreetingShortter/>
        </p>
        <p> This is so {adjective} 
          </p>
        <a
          className="App-link"
          href={url}
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
