import React from 'react';
function Greeting()
{
    let isMorning = (new Date()).getHours() < 12;
    return  isMorning
                ? <h3> Good Morning! using Greeting Component</h3>
                : <h3> Good Evening! using Greeting Component</h3>;
  
}
export default Greeting;