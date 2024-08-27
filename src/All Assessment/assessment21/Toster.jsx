import React, { useState } from "react";
import GotoHome from "../../Components/GoToHome";

const Toster = () => {
  const [showToster, setShowToster] = useState(false)
  console.log("showToster",showToster)
  const handleClick = () => {
    setShowToster(true)
  };
  setTimeout(() => {
    setShowToster(false)
    console.log("I am also running")
  }, 6000);
  return (
    <div className="h-screen flex justify-center items-center flex-col gap-8">
     {showToster && <div className="z-1000 absolute top-10 right-10"> <TosterBox setShowToster="fasle" /></div>}
      <button
        className="cursor-pointer border-black border px-10 py-3 hover:bg-gray-100 "
        onClick={handleClick}
      >
        Click To Show Toster
      </button>
      <GotoHome />
    </div>
  );
};

export default Toster;

const TosterBox = (setShowToster) => {
  console.log(setShowToster, "======")
  const handleClose = () => {
    setShowToster="false" 
  }
  return (
    <div className=" items-center bg-red-400 ">
     <div className="flex px-10 py-4 gap-10">
     <h1 className="text-white ">This is a Toster Box after click </h1>
     <h1 className="text-white" onClick={handleClose} >x</h1>
     </div>
    </div>
  );
};
