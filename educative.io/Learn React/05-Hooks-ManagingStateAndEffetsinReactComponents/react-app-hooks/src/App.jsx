import './App.css'
import Counter from './components/Counter'
import Greeting from './components/Greeting'
import InteractiveGreeting from './components/InteractiveGreeting'



function App() {
  return (
    <div className="App">
      <Greeting />
      <InteractiveGreeting />
      <Counter />
    </div>
  )
}

export default App
