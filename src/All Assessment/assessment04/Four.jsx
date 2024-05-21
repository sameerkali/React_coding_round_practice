import React, { useEffect, useState } from "react";
import GoToHome from "../../Components/GoToHome";
import "./style.css";
import { MAX, MIN } from "./constants";

const Four = () => {
  const [value, setValue] = useState(0);
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    setInterval(() => {
      setValue(val => val + 1);
    }, 100);
  }, []);
  return (
    <div>
      <div className="flex justify-center items-center flex-col h-screen">
        <h1>Progress bar</h1>
        <div className="mb-56 flex flex-col">
          <ProgressBar value={value} onComplete={() => setSuccess(true)} />
          <span className="">
            {success ? "Complete!" : "Loading..."}
          </span>
          <button className="custom-button w-32 mt-10" onClick={() => window.location.reload()}>Restart   </button>
        </div>
      <GoToHome />
      </div>
    </div>
  );
};


function ProgressBar({ value = 0, onComplete = () => {} }) {
  const [percent, setPercent] = useState(value);
  
  useEffect(
    () => {
      setPercent(Math.min(Math.max(value, MIN), MAX));
      
      if (value >= MAX) {
        onComplete();
      }
    },
    [value]
  );
  
  return (
    <div className="progress">
      <span
        style={{
          color: percent > 49 ? "white" : "black"
        }}
      >
        {percent.toFixed()}%
      </span>
      <div
        // style={{ width: `${percent}%` }}
        style={{
          transform: `scaleX(${percent / MAX})`,
          transformOrigin: "left"
        }}
        aria-valuemin={MIN}
        aria-valuemax={MAX}
        aria-valuenow={percent}
        role="progressbar"
      />
    </div>
  );
}

export default Four;