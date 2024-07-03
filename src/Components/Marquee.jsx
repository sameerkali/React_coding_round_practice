import React from 'react';
import { technicalRoundPreparation } from '../Utils';


const Marquee = () => {
  const { allProblems } = technicalRoundPreparation;

  return (
    <div className=" flex  overflow-x-hidden text-white">
      <div className="py-12 animate-marquee whitespace-nowrap">
        {allProblems.map((item, index) => (
          <span key={index} className="mx-4 text-4xl">
            {item} 
          </span>
        ))}
      </div>
    </div>
  );
}

export default Marquee;
