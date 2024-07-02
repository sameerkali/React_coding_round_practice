import React, { useEffect, useState } from "react";
import useCustomffect from "./UseCustomEffect";
import GoToHome from "../../Components/GoToHome";

const UseEffectHookPolyfill = () => {
  const [count, setcount] = useState(0);

  /* useEffect Hook Polyfill */
  useCustomffect(() => {
    console.log("count is invoking", count);
  }, []);
  console.log("count is invoking");

  return (
    <div className="flex flex-col justify-center items-center h-screen gap-10">
    <p className="text-2xl">useEffect Hook Polyfill</p>
      <div>
        {count}
      </div>
     <div className="flex  gap-3">
     <button onClick={() => setcount(count - 1)} className="custom-button">
        decrease
      </button>
      <button onClick={() => setcount(count + 1)} className="custom-button">
        increase
      </button>
     </div>
<GoToHome/>
    </div>
  );
};

export default UseEffectHookPolyfill;
