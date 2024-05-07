// HomePage.jsx

import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const Home = () => {
  const handleButtonPress = number => {
    console.log(`Button ${number} pressed`);
  };

  return (
    <div className="home h-screen flex flex-col items-center justify-center">
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
          "one",
          "two",
          "three",
          "one",
          "two",
          "three",
          "one",
          "two",
          "three"
        ].map(number =>
          <Link to={`/one`}>
            <button
              title={number}
              key={number}
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
