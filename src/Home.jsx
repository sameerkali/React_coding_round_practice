import React from "react";
import "./index.css";
import Card from "./Components/Card";
import { buttonDetails, technicalRoundPreparation } from "./Utils";
import Marquee from "./Components/Marquee";
import Accordion from "./Components/Accordion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    //Black UI
    <div className="bwgradient min-h-screen flex flex-col items-center justify-center p-4 ">
      {/*  <div className="home min-h-screen flex flex-col items-center justify-center p-4 "> */}
      <Marquee />
      <div>
        {/* <Accordion  /> */}
      </div>

      {/* <h1 className="text-4xl sm:text-5xl md:text-6xl text-center font-bold mb-8 text-[#a29bfe]">
        Practice Interview Problems
      </h1> */}
      <h1 class="text-4xl sm:text-5xl md:text-6xl text-center font-bold mb-8 bg-gradient-to-r from-[#9A8D9B]   via-[#575A79]  to-[#2C2E4D] inline-block text-transparent bg-clip-text">
        Practice Interview Problems
      </h1>

      <div className="flex justify-center w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl justify-items-center mb-10">
          {buttonDetails.map(({ name, description }) =>
            <Card
              key={name}
              name={name}
              description={description}
              linkName={name}
            />
          )}
        </div>
      </div>
      {/* <div className="flex gap-10 bg-transparent border border-gray-400 rounded-lg font-mono px-16 py-2">
          <h1>All problems</h1>
          <img className="h-7 w-10" src="/direction.svg" />
        </div> */}
      <Link to={`/problems`}>
        <a class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-gray-500 transition duration-300 ease-out border-2 border-slate-700 rounded-full shadow-md group w-72">
          <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-black group-hover:translate-x-0 ease">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </span>
          <span class="absolute flex items-center justify-center w-full h-full text-gray-200 transition-all duration-300 transform group-hover:translate-x-full ease">
            All problems
          </span>
          <span class="relative invisible">All problems</span>
        </a>
      </Link>
    </div>
  );
};

export default Home;
