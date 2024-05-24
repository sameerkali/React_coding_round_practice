import React, { useState } from 'react';
import GoToHome from '../../Components/GoToHome';
import '../../index.css';

const Seven = () => {
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

export default Seven;
