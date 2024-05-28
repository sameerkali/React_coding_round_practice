import React, { useEffect, useState } from "react";

const Twelve = () => {
  const [blink, setBlink] = useState(null);

  // blink random box logic
  let interval;
  const randomBlink = () => {
    interval = setInterval(() => {
      setBlink(Math.floor(Math.random() * 10) % 5);
    }, 800);
  };
  useEffect(() => {
    return () => {
      clearInterval(interval);
      randomBlink();
    };
  }, []);
  useEffect(() => {
    
  }, []);

  // Create boxes logic
  const boxes = [];
  for (let i = 0; i < 5; i++) {
    boxes.push(
      <div
        key={i}
        className={`h-20 w-20  border-gray-800 border-2 ${blink === i
          ? "bg-red-800"
          : ""}`}
      />
    );
  }

  return (
    <div className="flex flex-col h-screen items-center justify-center gap-10">
      <p className="">Blink game (Rowdi Coder)</p>
      <div className="flex gap-10">
        {boxes}
      </div>
    </div>
  );
};

export default Twelve;
