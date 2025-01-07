import React, { useEffect, useState } from "react";
import "../../index.css";
import GoToHome from "../../Components/GoToHome";

const StopWatch = () => {
  const [clicked, setClicked] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval;
    if (clicked) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 500);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [clicked]);

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-10">
      <div className="text-6xl">{time}</div>
      <button className="custom-button" onClick={() => setClicked(!clicked)}>
        {clicked ? "Stop" : "Start"}
      </button>
      <GoToHome />
    </div>
  );
};

export default StopWatch;
