import React, { useState, useEffect, useRef } from 'react';
import GoToHome from '../../Components/GoToHome';

const Seventeen: React.FC = () => {
  const [signature, setSignature] = useState('');
  const [color, setColor] = useState('black');
  const [isErasing, setIsErasing] = useState(false);
  const [showPrompt, setShowPrompt] = useState(true); // State to control prompt visibility
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const savedSignature = localStorage.getItem('signature');
    if (savedSignature) {
      setSignature(savedSignature);
      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext('2d');
        if (ctx) {
          const img = new Image();
          img.src = savedSignature;
          img.onload = () => {
            ctx.drawImage(img, 0, 0);
          };
        }
      }
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.strokeStyle = isErasing ? 'white' : color;
        ctx.lineWidth = isErasing ? 40 : 4;
      }
    }
  }, [color, isErasing]);

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.stroke();
      }
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (canvas && e.buttons === 1) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        ctx.lineTo(x, y);
        ctx.stroke();
      }
    }
  };

  const handleMouseUp = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const signatureDataURL = canvas.toDataURL();
      setSignature(signatureDataURL);
      localStorage.setItem('signature', signatureDataURL);
    }
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = signature;
    link.download = 'signature.png';
    link.click();
  };

  const handleReset = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        setSignature('');
        localStorage.removeItem('signature');
      }
    }
  };

  const handleColorChange = (newColor: string) => {
    setColor(newColor);
    setIsErasing(false);
  };

  const handleEraser = () => {
    setIsErasing(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPrompt(false);
    }, 2000); // Hide the prompt after 5 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Draw your imagination</h1>
      <GoToHome />
      {showPrompt && (
        <div className="absolute top-[40%] left-[40%] bg-white p-4 border border-black rounded shadow">
          <p>This app is 100% prompt coded, by Sameer Faridi</p>
        </div>
      )}
      <div className="flex flex-col items-center space-y-4">
        <div className="flex justify-center items-center">
          <canvas
            ref={canvasRef}
            width={window.innerWidth < 640 ? 300 : 1400}  // width: 300px on small screens, 800px on larger screens
            height={window.innerWidth < 640 ? 600 : 500} // height: 600px on small screens, 400px on larger screens
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            className="border border-black"
          />
        </div>
        <div className="flex flex-wrap space-x-4">
          <button
            onClick={handleReset}
            className="custom-button bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Reset
          </button>
          <button
            onClick={handleEraser}
            className={`custom-button ${ 
              isErasing ? 'bg-red-800' : 'bg-gray-500'
            } hover:bg-gray-700 text-white font-bold py-2 px-6 rounded`}
          >
            Eraser
          </button>
          <input
            type="color"
            onChange={(e) => handleColorChange(e.target.value)}
            className="w-15 h-10 p-0 border-0 cursor-pointer"
            value={color}
          />
          <button
            onClick={handleDownload}
            className="custom-button bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
          >
            Download Signature
          </button>
        </div>
      </div>
    </div>
  );
};

export default Seventeen;
