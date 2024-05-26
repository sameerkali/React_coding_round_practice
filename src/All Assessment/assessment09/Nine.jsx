import React from "react";

const Nine = () => {
  return (
    <div>
      {/* Tabs Composition */}
      <div className="flex justify-center items-center h-screen">

      <First/>
      <Secound/>
      <Third/>
      </div>
    </div>
  );
};

export default Nine;

const First = () => {
  return (
    <div className=" min-h-72 w-96 border-2 border-black p-10">
      <h1>
        Join us for React JS Interview Custom Tabs React App-React JS Interview
        Challenge #22 as we tackle a real-world problem in this Bar Chart
        Component Suggest Machine Coding Round. Sharpen your React skills and
        coding prowess with this engaging challenge! 🚀
      </h1>
    </div>
  );
};
const Secound = () => {
  return (
    <div className="min-h-72 w-96 border-2 border-black p-10">
      <h1>
        Join us for React JS Interview Custom Tabs React App-React JS Interview
        Challenge #22 as we tackle a real-world problem in this Bar Chart
        Component Suggest Machine Coding Round. Sharpen your React skills and
        coding prowess with this engaging challenge! 🚀
      </h1>
    </div>
  );
};
const Third = () => {
  return (
    <div className="min-h-72 w-96 border-2 border-black p-10">
      <h1>
        Join us for React JS Interview Custom Tabs React App-React JS Interview
        Challenge #22 as we tackle a real-world problem in this Bar Chart
        Component Suggest Machine Coding Round. Sharpen your React skills and
        coding prowess with this engaging challenge! 🚀
      </h1>
    </div>
  );
};
