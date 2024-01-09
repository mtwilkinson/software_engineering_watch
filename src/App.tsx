import React, {useState} from 'react';
import './App.css';
import Watch from "./Watch";
import {WatchTime} from "./types";
import WatchSetter from "./WatchSetter";

function App() {
  /*
        The useState function returns a variable (watchTime) and a function to set that variable(setWatchTime)
        If you set watchTime with the setWatchTime function, the screen will update to reflect that change.
        If you simply ran (watchTime = x), the screen would not update to reflect that change.
  */
  const [watchTime, setWatchTime] = useState<WatchTime>({hour: "12", minute: "45", second: "13"});

  // this function updates watch time when ever the watchSetter component calls it.
  function setTime(t: WatchTime) {
    setWatchTime(t);
  }

  return (
      /*
          A div is a container that holds components and can be used to arrange them. the
          WatchSetter and Watch components are defined in other files.
       */
      <div className="App">
        <WatchSetter setTime={setTime}/>
        <Watch watchTime={watchTime}/>
      </div>
  );
}

export default App;
