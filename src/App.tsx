import React, {useState} from 'react';
import './App.css';

function App() {
  /*
        The useState function returns a variable (time) and a function to set that variable(setTime)
        If you set time with the setTime function, the screen will update to reflect that change.
        If you simply ran (time = x), the screen would not update to reflect that change.
     */
  const [time, setTime] = useState("");

  // this function updates the time variable to the current time.
  function getTime() {
    const date = new Date();
    setTime(date.getHours()
        + ':' + String(date.getMinutes()).padStart(2, '0')
        + ":" + String(date.getSeconds()).padStart(2, '0'));
  }


  // This function calls get time every second
  window.setInterval(function () {
    getTime();
  }, 1000);


  return (
      /*
          A div is a container that holds components and can be used to arrange them. h1 and h2
          are headers that show some text. Each of these components have a class name, so I can
          style them in App.css
       */
      <div className="App">
        <h1 className="watch_header">Current Time</h1>
        <div className={"watch"}>
          <h2 className="time">{time}</h2>
        </div>
      </div>
  );
}

export default App;
