import { useState } from 'react';

const Counter_p = () => {
  const [count, setCount] = useState(10);
  const [size, setSize] = useState(1);

  const handleSizeChange = (e) => {
    const newSize = parseInt(e.target.value, 10) || 1; // Ensure size is a number and defaults to 1
    setSize(newSize);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="flex gap-4 items-center mb-5">
        <button
          className="px-4 py-2 bg-green-500 text-white rounded shadow hover:bg-green-600"
          onClick={() => setCount((prev) => prev + size)}
        >
          +
        </button>
        <p className="text-xl font-bold">{count}</p>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded shadow hover:bg-red-600"
          onClick={() => setCount((prev) => (prev > 0 ? prev - size : 0))}
        >
          -
        </button>
      </div>

      <button
        className="mb-5 px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
        onClick={() => setCount(0)}
      >
        RESET
      </button>

      <div className="flex gap-3 items-center">
        <input
          type="number"
          placeholder="Step size"
          className="px-3 py-2 border rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={handleSizeChange}
        />
        <p className="text-gray-700">Current step: {size}</p>
      </div>
    </div>
  );
};

export default Counter_p;
