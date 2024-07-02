import React, { useState, useEffect, useRef } from 'react';
import GoToHome from '../../Components/GoToHome';

const DrawBoard: React.FC = () => {
  const [signature, setSignature] = useState('');
  const [color, setColor] = useState('black');
  const [isErasing, setIsErasing] = useState(false);
  const [showPrompt, setShowPrompt] = useState(true);
  const [isDrawing, setIsDrawing] = useState(false);
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
        ctx.strokeStyle = color;
        ctx.lineWidth = isErasing ? 40 : 4;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.globalCompositeOperation = isErasing ? 'destination-out' : 'source-over';
      }
    }
  }, [color, isErasing]);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    setIsDrawing(true);
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const rect = canvas.getBoundingClientRect();
        const x = 'touches' in e ? e.touches[0].clientX - rect.left : e.clientX - rect.left;
        const y = 'touches' in e ? e.touches[0].clientY - rect.top : e.clientY - rect.top;
        ctx.beginPath();
        ctx.moveTo(x, y);
      }
    }
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const rect = canvas.getBoundingClientRect();
        const x = 'touches' in e ? e.touches[0].clientX - rect.left : e.clientX - rect.left;
        const y = 'touches' in e ? e.touches[0].clientY - rect.top : e.clientY - rect.top;
        ctx.lineTo(x, y);
        ctx.stroke();
      }
    }
  };

  const endDrawing = () => {
    setIsDrawing(false);
    const canvas = canvasRef.current;
    if (canvas) {
      const signatureDataURL = canvas.toDataURL();
      setSignature(signatureDataURL);
      localStorage.setItem('signature', signatureDataURL);
    }
  };

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      // Create download link with transparent background
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = 'signature.png';
      link.click();
    }
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
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Draw your imagination</h1>
      <GoToHome />
      <div className="flex flex-col items-center space-y-4">
        <div className="flex justify-center items-center">
          <canvas
            ref={canvasRef}
            width={window.innerWidth < 640 ? 350 : 1400}
            height={window.innerWidth < 640 ? 500 : 500}
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={endDrawing}
            onMouseLeave={endDrawing}
            onTouchStart={startDrawing}
            onTouchMove={draw}
            onTouchEnd={endDrawing}
            className="border border-black touch-none"
          />
        </div>
        <div className="">
          <button
            onClick={handleReset}
            className="custom-button text-white font-bold py-2 px-4 rounded"
          >
            Reset
          </button>
          <button
            onClick={handleEraser}
            className="custom-button text-white font-bold py-2 px-6 rounded"
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

export default DrawBoard;