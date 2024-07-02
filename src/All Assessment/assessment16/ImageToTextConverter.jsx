// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import Tesseract from "tesseract.js";

// const Sixteen = () => {
//   const [image, setImage] = useState(null);
//   const [text, setText] = useState("");
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     // Load the saved image from localStorage when the component mounts
//     const savedImage = localStorage.getItem('selectedImage');
//     if (savedImage) {
//       setImage(savedImage);
//     }
//   }, []);

//   const handleImageChange = event => {
//     const file = event.target.files[0];
//     if (file) {
//       const imageUrl = URL.createObjectURL(file);
//       setImage(imageUrl);
//       // Save the new image URL to localStorage
//       localStorage.setItem('selectedImage', imageUrl);
//     }
//   };

//   const convertImageToText = () => {
//     if (!image) return;
//     setLoading(true);
//     Tesseract.recognize(image, "eng", {
//       logger: m => console.log("this is log :", m)
//     })
//       .then(({ data: { text } }) => {
//         setText(text);
//         setLoading(false);
//       })
//       .catch(error => {
//         console.error(error);
//         setLoading(false);
//       });
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Image to Text Converter</h1>
//       <input
//         type="file"
//         onChange={handleImageChange}
//         className="mb-4 p-2 border rounded"
//       />
//       <button
//         onClick={convertImageToText}
//         disabled={loading}
//         className="bg-blue-500 text-white px-4 py-2 rounded mb-4 disabled:bg-gray-400"
//       >
//         {loading ? "Converting..." : "Convert Image to Text"}
//       </button>
//       <div className="sm:flex sm:mt-4 felx-col ">
//         <div className="sm:w-1/2 h-96 border border-black p-3 mr-2 overflow-auto">
//           {image &&
//             <img src={image} alt="Selected" className="max-w-full h-auto" />}
//         </div>
//         <div className="sm:w-1/2 h-96 border border-black p-3 ml-2 overflow-auto">
//           <h3 className="text-xl font-semibold mb-2">Extracted Text:</h3>
//           <p>
//             {text}
//           </p>
//         </div>
//       </div>
//       <Link to={`/`} className="underline  hover:text-gray-600"> Return to Home</Link>
//     </div>
//   );
// };

// export default Sixteen;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Tesseract from "tesseract.js";
import GoToHome from "../../Components/GoToHome";

const ImageToTextConverter = () => {
  const [image, setImage] = useState(null);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Load the saved image and text from localStorage when the component mounts
    const savedImage = localStorage.getItem("selectedImage");
    const savedText = localStorage.getItem("extractedText");
    console.log(
      "Loaded image from localStorage:",
      savedImage ? "Found" : "Not found"
    );
    console.log(
      "Loaded text from localStorage:",
      savedText ? "Found" : "Not found"
    );
    if (savedImage) {
      setImage(savedImage);
    }
    if (savedText) {
      setText(savedText);
    }
  }, []);

  const handleImageChange = event => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = e => {
        const imageDataUrl = e.target.result;
        console.log("New image selected");
        setImage(imageDataUrl);
        setText(""); // Clear the text when a new image is selected
        // Save the new image data URL to localStorage
        localStorage.setItem("selectedImage", imageDataUrl);
        localStorage.removeItem("extractedText"); // Remove the old text
      };
      reader.readAsDataURL(file);
    }
  };

  const convertImageToText = () => {
    if (!image) return;
    setLoading(true);
    Tesseract.recognize(image, "eng", {
      logger: m => console.log("Tesseract log:", m)
    })
      .then(({ data: { text } }) => {
        setText(text);
        setLoading(false);
        // Save the extracted text to localStorage
        localStorage.setItem("extractedText", text);
      })
      .catch(error => {
        console.error("Tesseract error:", error);
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
      disabled={loading || !image}
      className="bg-blue-500 text-white px-4 py-2 rounded mb-4 disabled:bg-gray-400"
    >
      {loading ? "Converting..." : "Convert Image to Text"}
    </button>
    <div className="flex flex-col sm:flex-row sm:mt-4">
      <div className="sm:w-1/2 h-96 border border-black p-3 mr-2 overflow-auto">
        {image && <img src={image} alt="Selected" className="max-w-full h-auto" />}
      </div>
      <div className="sm:w-1/2 h-96 border border-black p-3 ml-2 overflow-auto">
        <h3 className="text-xl font-semibold mb-2">Extracted Text:</h3>
        <p>{text}</p>
      </div>
    </div>
    <GoToHome/>
  </div>
  );
};

export default ImageToTextConverter;
