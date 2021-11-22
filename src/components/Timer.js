import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(0);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div className="app" style={{ fontFamily: "Cambria" }}>
      <div className="time" style={{ marginBottom: "15px", marginTop: "-15px",fontFamily: "Montserrat" }}>
        {seconds}<p style={{ fontSize: "10px", marginTop: "-25px" }}>secs</p>
      </div>
      <div className="row">
        <button className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`} onClick={toggle} className="waves-effect waves-light btn" style={{ marginRight: "5px", fontFamily: "Montserrat", backgroundColor: "black"}}>
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button className="button" className="waves-effect waves-light btn" onClick={reset} style={{ marginLeft: "5px", fontFamily: "Montserrat", backgroundColor: "black"}}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;