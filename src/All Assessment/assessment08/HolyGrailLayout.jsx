

import React from "react";
import GoToHome from "../../Components/GoToHome";

const HolyGrailLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
    <div className="absolute top-[50%] left-[47%]"><GoToHome/></div>
    <header className="bg-purple-200 min-h-[10vh]">header</header>
    <div className="flex min-h-[80vh]">
      <aside className="bg-red-300 sm:flex hidden w-[10rem]">left</aside>
      <div className="bg-yellow-300 flex-1">home</div>
      <aside className="bg-red-300 sm:flex hidden  w-[10rem]">right</aside>
    </div>
    <footer className="bg-purple-200 min-h-[10vh]">footer</footer>
  </div>
  
  );
};

export default HolyGrailLayout;
