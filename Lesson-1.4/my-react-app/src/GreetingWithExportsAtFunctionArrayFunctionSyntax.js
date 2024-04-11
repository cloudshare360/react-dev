import React from 'react';
export const Greeting = () => {

    let isMorning = (new Date()).getHours() < 12;
    // Shorter version for react fragment
     return  isMorning 
                ? (
                    <>
                        <h3> Good Morning! using Greeting Component</h3>
                        <p>You have 5 New Messages</p>
                    </>
                )
                : 
                (
                    <>
                         <h3> Good Evening! using Greeting Component</h3>;
                        <p>You have 5 New Messages</p>
                    </>
                )
               
  
}
