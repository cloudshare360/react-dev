import React from 'react';

export const Greeting = ({name, numberOfMessages}) => {
    //console.log("props" , props);
    
    //const {name, numberOfMessages} = props;

    let dateAndTime = (new Date().toString());
    let isMorning = (new Date()).getHours() < 12;
    console.log("isMorning", isMorning);
    let greetingHeader = isMorning
                                ? <h3> isMorning: { isMorning.toString() } ; Good Morning! {name} </h3> 
                                : <h3> isMorning: { isMorning.toString() } ; Good Evening  {name} </h3>;
    
    return (
        <>
            { greetingHeader }
            <br/>
            { isMorning.toString() }
            <br/>
            <p>  Date and Time is {dateAndTime} <br/>
                you have from {numberOfMessages} messages using props 
            </p>
        </>
    )
}