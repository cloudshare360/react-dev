import { useState } from 'react';

function GreetingWithUseState() {
  const [message, setMessage] = useState("Hello, welcome to our React application!");
  
  function handleClick() {
    setMessage("Thanks for clicking, have a great day!");
  }
  
  return (
  <div className="component-border">
    <h1>{message}</h1>
    <button onClick={handleClick}>Click me</button>
  </div>
  );
}

export default GreetingWithUseState; 