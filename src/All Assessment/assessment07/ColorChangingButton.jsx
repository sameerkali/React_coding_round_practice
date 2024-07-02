import React, { useState } from 'react';
import GoToHome from '../../Components/GoToHome';
import '../../index.css';

const ColorChangingButton = () => {
  const [color, setColor] = useState('000000');

  const handleChangeColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    setColor(randomColor);
  };

  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <GoToHome />
      <h1>Color Changing Button</h1>
      <div>
        <button
          onClick={handleChangeColor}
          className={`px-3 py-5 text-gray-500 mt-10`}
          style={{ backgroundColor: `#${color}` }}
        >
          Click me to change my color
        </button>
      </div>
    </div>
  );
};

export default ColorChangingButton;




// import React, { useState } from "react";
// import GoToHome from "../../Components/GoToHome";

// const Seven = () => {
//   const [number, setNumber] = useState(1);

//   const handleChangeColor = () => {
//     // Update state using functional update
//     setNumber((prevNumber) => prevNumber + 1);
//   };

//   // Generate the color string with leading zeros
//   const color = `00${number.toString(16)}00`.slice(-6); // Ensure 6 digit hex string

//   return (
//     <div className="flex flex-col justify-center items-center h-screen">
//       <GoToHome />
//       <h1>Color Changing Button</h1>
//       <button
//         onClick={handleChangeColor}
//         className="px-3 py-5 text-gray-500 mt-10"
//         style={{ backgroundColor: `#${color}` }}
//       >
//         Click me to change my color
//       </button>
//     </div>
//   );
// };

// export default Seven;
