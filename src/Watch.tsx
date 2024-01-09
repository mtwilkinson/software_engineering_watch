import React from 'react';
import './Watch.css';
import {WatchComponent} from "./types";

function Watch({watchTime}: WatchComponent) {

    return (
        /*
            A div is a container that holds components and can be used to arrange them. h1 and h2
            are headers that show some text. Each of these components have a class name, so I can
            style them in App.css
         */
        <div className={"watch_div"}>
            <h1>Current Time</h1>
            <div className="watch">
                <h2 className="time">{watchTime.hour + ":" + watchTime.minute + ":" + watchTime.second}</h2>
            </div>
        </div>
    );
}

export default Watch;
