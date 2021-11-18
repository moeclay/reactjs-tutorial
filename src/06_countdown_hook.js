import React, { useState, useEffect, useRef } from "react";

const useCountdown = (initialTimer, initialPlaying = false) => {
  const milisecond = useRef(initialTimer * 1000);
  const previous = useRef(milisecond);
  const [timer, setTimer] = useState(initialTimer);
  const [isPlaying, setIsPlaying] = useState(initialPlaying);

  useEffect(() => {
    if (!isPlaying || milisecond.current <= 0) return;

    let effectInitialMs = milisecond.current;
    let effectInitialTimeStamp, handle;

    const step = (timestampMs) => {
      if (effectInitialTimeStamp === undefined)
        effectInitialTimeStamp = timestampMs;
      const elapsed = timestampMs - effectInitialTimeStamp;
      milisecond.current = effectInitialMs - elapsed;

      if (milisecond.current <= 0) {
        setTimer(0);
        console.log("cancelAnimationFrame(zero)", handle, milisecond.current);
        cancelAnimationFrame(handle);
      } else {
        const seconds = Math.floor(milisecond.current / 1000);
        const isUpdate = seconds !== Math.floor(previous.current / 1000);
        previous.current = milisecond.current;

        if (isUpdate) {
          setTimer(seconds);
        }

        if (isPlaying) {
          handle = window.requestAnimationFrame(step);
        }
      }
    };

    handle = window.requestAnimationFrame(step);

    return () => {
      console.log("cancelAnimationFrame(pause)", handle, milisecond.current);
      cancelAnimationFrame(handle);
    };
  }, [isPlaying]);

  return [timer, isPlaying, setIsPlaying];
};

function App() {
  const [clockTime, isPlaying, setIsPlaying] = useCountdown(65 * 60);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  const handlePauseClick = () => {
    setIsPlaying(false);
  };

  const convertTime = (count) => {
    let hours = Math.floor(count / 3600);
    let minutes = Math.floor(count / 60) - hours * 60;
    let seconds = parseFloat(count % 60).toFixed(0);
    if (hours < 10) hours = `0${hours}`;
    if (minutes < 10) minutes = `0${minutes}`;
    if (seconds < 10) seconds = `0${seconds}`;
    return `${hours}:${minutes}:${seconds}`;
  };
  return (
    <div className="App">
      <h1>{convertTime(clockTime)}</h1>
      {isPlaying ? (<button onClick={handlePauseClick}>Pause</button>
      ) : (<button onClick={handlePlayClick}>Play</button>
      )}
    </div>
  );
}

export default App;