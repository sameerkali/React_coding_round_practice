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
      {/* <button className="absolute top-2  right-2 text-2xl text-white">
        <a href="https://github.com/sameerkali/React_coding_round_practice" target="_blank">GitHub</a>
      </button> */}
      <iframe src="https://github.com/sponsors/sameerkali/button" title="Sponsor sameerkali" height="32" width="114" style={{border: '0', borderRadius: '6px'}}></iframe>

      {/* <iframe src="https://github.com/sponsors/sameerkali/card" title="Sponsor sameerkali" height="225" width="600" style={{border: '0'}}></iframe> */}


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
          "six",
          "seven",
          "eight",
          "nine",
          "ten",
          "eleven",
          "twelve",
          "thirteen",
          "fourteen",
          "fifteen",
          "sixteen",
          "seventeen",
          "eighteen",
          "nineteen",
          "ninneteen",
          "twenty"
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
