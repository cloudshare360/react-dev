import React from 'react';
export function Greeting()
{
    let isMorning = (new Date()).getHours() < 12;
   // Below showing the isMorning element is returning one top level element
    // return  isMorning
    //             ? (
    //                 <div>
    //                     <h3> Good Morning! using Greeting Component</h3>
    //                     <p>You have 5 New Messages</p>
    //                 </div>
    //             )
    //             : 
    //             (
    //                 <div>
    //                      <h3> Good Evening! using Greeting Component</h3>;
    //                     <p>You have 5 New Messages</p>
    //                 </div>
    //             )

    // return  isMorning
    //             ? (
    //                 <React.Fragment>
    //                     <h3> Good Morning! using Greeting Component</h3>
    //                     <p>You have 5 New Messages</p>
    //                 </React.Fragment>
    //             )
    //             : 
    //             (
    //                 <React.Fragment>
    //                      <h3> Good Evening! using Greeting Component</h3>;
    //                     <p>You have 5 New Messages</p>
    //                 </React.Fragment>
    //             )

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
