import React, { useState } from "react";
import { Link } from "react-router-dom";
import Tesseract from "tesseract.js";

const Sixteen = () => {
  const [image, setImage] = useState(null);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleImageChange = event => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const convertImageToText = () => {
    if (!image) return;
    setLoading(true);
    Tesseract.recognize(image, "eng", {
      logger: m => console.log("this is log :", m)
    })
      .then(({ data: { text } }) => {
        setText(text);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Image to Text Converter</h1>
      <input
        type="file"
        onChange={handleImageChange}
        className="mb-4 p-2 border rounded"
      />
      <button
        onClick={convertImageToText}
        disabled={loading}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4 disabled:bg-gray-400"
      >
        {loading ? "Converting..." : "Convert Image to Text"}
      </button>
      <div className="sm:flex sm:mt-4 felx-col ">
        <div className="sm:w-1/2 h-96 border border-black p-3 mr-2 overflow-auto">
          {image &&
            <img src={image} alt="Selected" className="max-w-full h-auto" />}
        </div>
        <div className="sm:w-1/2 h-96 border border-black p-3 ml-2 overflow-auto">
          <h3 className="text-xl font-semibold mb-2">Extracted Text:</h3>
          <p>
            {text}
          </p>
        </div>
      </div>
      <Link to={`/`} className="underline  hover:text-gray-600"> Return to Home</Link>
    </div>
  );
};

export default Sixteen;
