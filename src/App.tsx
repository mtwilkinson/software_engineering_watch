import React, {useState} from 'react';
import './App.css';
import Watch from "./Watch";
import {WatchTime} from "./types";
import WatchSetter from "./WatchSetter";

function App() {
  /*
        The useState function returns a variable (time) and a function to set that variable(setTime)
        If you set time with the setTime function, the screen will update to reflect that change.
        If you simply ran (time = x), the screen would not update to reflect that change.
  */


  const [watchTime, setWatchTime] = useState<WatchTime>({hour: "12", minute: "45", second: "13"});

  function setTime(t: WatchTime) {
    setWatchTime(t);
  }

  return (
      /*
          A div is a container that holds components and can be used to arrange them. h1 and h2
          are headers that show some text. Each of these components have a class name, so I can
          style them in App.css
       */
      <div className="App">
        <WatchSetter setTime={setTime}/>
        <Watch watchTime={watchTime}/>
      </div>
  );
}

export default App;
