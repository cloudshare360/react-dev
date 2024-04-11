import React from 'react';
export const GreetingShortter = () => {
    let isMorning = (new Date()).getHours() < 12;
    let commonMessage =  "and shorter the method using react fragments"
    let greetingHeader = isMorning
        ? <h3> Good Morning using Arrow Function {commonMessage} </h3>
        : <h3> Good Evening using Arrow Function  {commonMessage}</h3>
    return (
        <>
            { greetingHeader }
            <p> You have 6 messages</p>
        </>
    )
}
