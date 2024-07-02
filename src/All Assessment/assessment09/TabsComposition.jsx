import React, { useState } from "react";
import GoToHome from '../../Components/GoToHome'

const TabsComposition = () => {
  const [select, setSelect] = useState('first')

  return (
    <div>
      {/* Tabs Composition */}

      <p className="text-center mt-10 mb-[-80px] text-2xl" >Tabs Composition</p>
      <div className="flex gap-10 flex-col justify-center items-center h-screen">
      <GoToHome/>
        <div className="flex gap-2">
          <button onClick={() => setSelect('first')}  className="custom-button"> First</button>
          <button  onClick={() => setSelect('secound')} className="custom-button"> Secound</button>
          <button onClick={() => setSelect('third')}  className="custom-button"> Third</button>
        </div>
        <div className="flex flex-row">
        {select === 'first' && <First/>}
        {select === 'secound' && <Secound/>}
        {select === 'third' && <Third/>}
        </div>
      </div>
    </div>
  );
};

export default TabsComposition;

const First = () => {
  return (
    <div className=" min-h-72 w-96 border-2 border-black p-10">
      <h1 className="text-purple-600">
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
      <h1 className="text-green-400">
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
      <h1 className="text-blue-400">
        Join us for React JS Interview Custom Tabs React App-React JS Interview
        Challenge #22 as we tackle a real-world problem in this Bar Chart
        Component Suggest Machine Coding Round. Sharpen your React skills and
        coding prowess with this engaging challenge! 🚀
      </h1>
    </div>
  );
};
