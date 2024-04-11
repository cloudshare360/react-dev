import React from 'react';

export const Greeting = (props) => {
    console.log(props)
    let dateAndTime = (new Date().toString());
    let isMorning = (new Date()).getHours() > 12;
    let greetingHeader = isMorning
        ? <h3> Good Morning! {props.name} </h3>
        : <h3> Good Enevining {props.name} </h3>
    return (
        <>
            {greetingHeader}
            <br/>
            {isMorning}
            <br/>
            <p>  Date and Time is {dateAndTime} <br/>
                you have from {props.numberOfMessages} messages using props 
            </p>
        </>
    )
}