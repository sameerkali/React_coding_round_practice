import React, { useState, useEffect } from 'react';

const Debouncing = () => {
  const [inputValue, setInputValue] = useState('');
  const [debouncedValue, setDebouncedValue] = useState('');

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(inputValue);
    }, 300); 
    return () => {
      clearTimeout(handler);
    };
  }, [inputValue]);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className='flex flex-col h-screen bg-gray-800/20 items-center justify-center'>
      <input
        className='bg-transparent border-2 border-gray-500 rounded-lg w-1/2 px-10 py-3'
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type something..."
      />
      <p>Input value: {inputValue}</p>
      <p>Debounced value: {debouncedValue}</p>
    </div>
  );
};

export default Debouncing;
