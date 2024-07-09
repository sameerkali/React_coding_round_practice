import React from "react";
import "./index.css";
import Card from "./Components/Card";
import { buttonDetails } from "./Utils";
import Marquee from "./Components/Marquee";
import { Link } from "react-router-dom";
import useAnalyticsEventTracker from "./useAnalyticsEventTracker";
import Footer from "./Components/Footer";
import Feedback from "./Components/Feedback";

const Home = () => {
  const gaEventTracker = useAnalyticsEventTracker("Home");

  return (
    <div className="bwgradient min-h-screen flex flex-col items-center justify-center p-4 ">
      <Marquee />
      {/* <Feedback/> */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl text-center font-bold mb-8 bg-gradient-to-r from-[#9A8D9B] via-[#575A79] to-[#2C2E4D] inline-block text-transparent bg-clip-text">
        Practice Interview Problems
      </h1>
      <p className="m-10 text-white text-center">
        {" "}
        Help us improve! Share your honest{" "}
        <Link to={`/feedback`}>
          <strong className="text-lime-400 underline text-xl">feedback</strong>
        </Link>{" "}
        for a better user experience.
      </p>{" "}
      <Link
        to={`/problems`}
        onClick={() => gaEventTracker("click", "All Problems Button")}
      >
      <p className="mb-10 relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-gray-500 transition duration-300 ease-out border-2 border-slate-700 rounded-full shadow-md group w-72">
        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-black group-hover:translate-x-0 ease">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </span>
        <span className="absolute flex items-center justify-center w-full h-full text-gray-200 transition-all duration-300 transform group-hover:translate-x-full ease">
          All problems
        </span>
        <span className="relative invisible">All problems</span>
      </p>
      </Link>
      <div className="flex justify-center w-full">
        <div className="px-10 sm:px-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl justify-items-center mb-10">
          {buttonDetails.map(({ name, description }) => (
            <Card
              key={name}
              name={name}
              description={description}
              linkName={name}
              onClick={() => gaEventTracker("click", `Card - ${name}`)}
            />
          ))}
        </div>
      </div>
     
      <Footer />
    </div>
  );
};

export default Home;
