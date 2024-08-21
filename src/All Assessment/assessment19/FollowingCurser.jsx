import React, { useRef } from "react";
import GoToHome from "../../Components/GoToHome";
import Circle from "./Circle";

const FollowingCurser = () => {
  const circleRef = useRef();
  const rootRef = useRef();

  const handleMovement = e => {
    const circle = circleRef.current;
    setTimeout(() => {
      circle.style.left = `${e.clientX}px`;
      circle.style.top = `${e.clientY}px`;
    }, 100);
  };
  const throttle = (func, delay) => {
    let lastCall = 0;
    
    return function (...args) {
      const now = Date.now();
      if (now - lastCall >= delay) {
        lastCall = now;
        func(...args);
      }
    };
  };

  const throttledHandleMovement = throttle(handleMovement, 20);  

  return (
    <div
      ref={rootRef}
      className="flex h-screen items-center justify-center flex-col gap-10"
      onMouseMove={throttledHandleMovement}
    >
      <div className="text-4xl font-sans">
        The Circle That Follows The Curser
      </div>
      <Circle ref={circleRef} />
      <GoToHome />
    </div>
  );
};

export default FollowingCurser;
