import React from 'react';

export const Greeting = ({ name, numberOfMessages }) => {

    if (!name) return null;

    let dateAndTime = (new Date().toLocaleDateString());
    let isMorning = (new Date()).getHours() < 12;
    console.log("isMorning", isMorning);
    let greetingHeader = isMorning
        ? <b> isMorning: {isMorning.toString()} ; Good Morning! {name} </b>
        : <b> isMorning: {isMorning.toString()} ; Good Evening!  {name} </b>;

    return (
        <>
            <div>
                {greetingHeader}
            </div>
            <div>
                {dateAndTime}
            </div>
            <div>
                {numberOfMessages === 0 ? null : <div> you have from {numberOfMessages} messages using props </div>}
            </div>
        </>
    )
}