// HomePage.jsx

import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const Home = () => {
  const handleButtonPress = number => {
    console.log(`Button ${number} pressed`);
  };

  return (
    <div className="home h-screen flex flex-col items-center justify-center ">
      <button className="absolute top-2  right-2 text-2xl text-white">
        <a href="https://github.com/sameerkali/React_coding_round_practice" target="_blank">GitHub</a>
      </button>
      <h1 className="text-[5rem] text-center sm:text-[6rem] font-bold mb-8 text-[#a29bfe]">
        Practice Interview Problems
      </h1>
      <div className="grid sm:grid-cols-7 grid-cols-3  gap-4">
        {[
          "one",
          "two",
          "three",
          "four",
          "five",
          "onee",
          "twoe",
          "thr",
          "oneww",
          "twow",
          "threew",
          "ones",
          "twoa",
          "thw"
        ].map((number, index) =>
          <Link to={`/${number}`}>
            <button
              title={number}
              key={index}
              className="custom-button"
              onClick={() => handleButtonPress(number)}
            >
              {number}
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Home;
