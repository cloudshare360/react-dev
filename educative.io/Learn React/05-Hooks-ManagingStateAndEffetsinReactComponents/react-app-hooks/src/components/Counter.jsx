import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  function handleIncrement({}) {
    setCount( prevCount => prevCount  + 1);  
  }
  
  return (
  <div className="component-border">
    <p>Current count: {count}</p>
    <button onClick={handleIncrement}>Increment</button>
  </div>
  );
}

export default Counter;