import React, {ChangeEvent, useState} from 'react';
import './WatchSetter.css';
import {WatchSetterComponent} from "./types";

function WatchSetter({setTime}: WatchSetterComponent) {
    const [hour, setHour] = useState("");
    const [minute, setMinute] = useState("");
    const [second, setSecond] = useState("");

    function handleHourInput(e: ChangeEvent<HTMLInputElement>) {
        setHour(e.target.value);
    }

    function handleMinuteInput(e: ChangeEvent<HTMLInputElement>) {
        setMinute(e.target.value);
    }

    function handleSecondInput(e: ChangeEvent<HTMLInputElement>) {
        setSecond(e.target.value);
    }

    function handleButton() {
        setTime({hour, minute, second});
    }

    return (
        /*
            A div is a container that holds components and can be used to arrange them. h1 and h2
            are headers that show some text. Each of these components have a class name, so I can
            style them in App.css
         */
        <div className={"watch_setter_div"}>
            <h1>Set Time</h1>
            <div className={"fields_div"}>
                <div className={"input_div"}>
                    <p>hour:</p>
                    <input onChange={handleHourInput}></input>
                </div>
                <div className={"input_div"}>
                    <p>minute:</p>
                    <input onChange={handleMinuteInput}></input>
                </div>
                <div className={"input_div"}>
                    <p>second:</p>
                    <input onChange={handleSecondInput}></input>
                </div>
            </div>
            <button onClick={handleButton}>Set Time</button>
        </div>
    );
}

export default WatchSetter;
