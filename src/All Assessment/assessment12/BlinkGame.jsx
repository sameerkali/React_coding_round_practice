import React, { useEffect, useState } from "react";

const BlinkGame = () => {
  const [blink, setBlink] = useState(null);
  const [success, setSuccess] = useState(null);
  const [fail, setFail] = useState(null);
  const [score, setScore] = useState(0);


  const handlePress = n => {
    if (n === blink){
      setSuccess(n);
      setScore(prev => prev+1)
    } 
    else setFail(n)
  };

  // blink random box logic
  let interval;
  const randomBlink = () => {
    interval = setInterval(() => {
      setBlink(parseInt(Math.random() * 10) % 5);
      setSuccess(null)
      setFail(null)
    }, 2000);
  };

  useEffect(() => {
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const highScore = localStorage.getItem("blinkClick");
    if (highScore === null || score > parseInt(highScore)) {
      localStorage.setItem("blinkClick", score);
    }
  }, [score]);

  // Create boxes logic
  const boxes = [];
  for (let i = 0; i < 5; i++) {
    boxes.push(
      <div
        key={i}
        onClick={() => handlePress(i)}
        className={`h-36 w-36  border-gray-800 border-2 ${blink === i
          ? "bg-blue-800"
          : ""}
          ${success === i ? "bg-green-800" : ""}
          ${fail === i ? "bg-red-800": ""}
          `}
      />
    );
  }

  return (
    <div className="flex flex-col h-screen items-center justify-center gap-10">
      <p className="">Blink game (Rowdi Coder)</p>
      <div className="flex gap-10">
      <p>Score: {score}</p>
      <p>High Score: {localStorage.getItem("blinkClick")}</p>
      </div>
      <div className="flex gap-1">
        {boxes}
      </div>
      <button
        onClick={randomBlink}
        className="px-7 py-2 bg-gray-600 text-white"
      >
        Start
      </button>
      
    </div>
  );
};

export default BlinkGame;
