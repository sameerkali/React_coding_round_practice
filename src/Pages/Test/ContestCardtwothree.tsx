import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../StateManager/Store";
import { increment, decrement, setNumber } from "./testSlice";

const ContestCardtwothree: React.FC = () => {
  const dispatch = useAppDispatch();
  const { number } = useAppSelector((state) => state.testslice);

  const [inputValue, setInputValue] = useState<number>(0);

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(+event.target.value);
  };

  const handleLogInput = () => {
    dispatch(setNumber({number:inputValue}))
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Test Component</h1>
      <p className="text-xl mb-4">{number}</p>
      <div className="space-x-4">
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleDecrement}
        >
          Decrement
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleIncrement}
        >
          Increment
        </button>
      </div>
      <input
        type="number"
        value={inputValue}
        onChange={handleInputChange}
        className="border border-gray-400 rounded-md p-2 mt-4"
      />
      <button
        onClick={handleLogInput}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4"
      >
        Log Input
      </button>
    </div>
  );
};

export default ContestCardtwothree;
