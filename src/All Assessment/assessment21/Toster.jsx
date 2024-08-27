import React, { useState, useEffect } from "react";
import GotoHome from "../../Components/GoToHome";
import './styles.css'

const Toster = () => {
  const [toasts, setToasts] = useState([]);

  const handleClick = () => {
    const newToast = { id: Date.now(), visible: true };
    setToasts((prevToasts) => [newToast, ...prevToasts]);

    setTimeout(() => {
      removeToast(newToast.id);
    }, 6000);
  };

  const removeToast = (id) => {
    setToasts((prevToasts) =>
      prevToasts.map((toast) =>
        toast.id === id ? { ...toast, visible: false } : toast
      )
    );
    setTimeout(() => {
      setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
    }, 500);
  };

  return (
    <div className="h-screen flex justify-center items-center flex-col gap-8">
      {toasts.map((toast, index) => (
        <div
          key={toast.id}
          className={`z-1000 absolute right-10 transition-all duration-500 ${
            toast.visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
          }`}
          style={{ top: `${10 + index * 60}px` }}
        >
          <TosterBox onClose={() => removeToast(toast.id)} />
        </div>
      ))}
      <button
        className="cursor-pointer border-black border px-10 py-3 hover:bg-gray-100"
        onClick={handleClick}
      >
        Click To Show Toster
      </button>
      <GotoHome />
    </div>
  );
};

export default Toster;

const TosterBox = ({ onClose }) => {
  return (
    <div className="bg-red-400 rounded shadow-lg relative overflow-hidden">
      <div className="flex justify-between px-10 py-4 gap-10">
        <h1 className="text-white">This is a Toster Box after click</h1>
        <button className="text-white" onClick={onClose}>
          x
        </button>
      </div>
      <div className="absolute bottom-0 left-0 h-1 bg-red-500 progress-bar"></div>
    </div>
  );
};
