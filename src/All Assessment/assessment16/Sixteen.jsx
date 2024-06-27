import React, { useState } from "react";
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
    <div>
      <h1>Image to Text Converter</h1>
      <input type="file" onChange={handleImageChange} />
      <button onClick={convertImageToText} disabled={loading}>
        {loading ? "Converting..." : "Convert Image to Text"}
      </button>
      <div className="flex ">
        <div className="h-[25rem] w-[50rem] border border-black p-3 ">
          {image &&
            <img src={image} alt="Selected" style={{ maxWidth: "100%" }} />}
        </div>
        <div>
          <h3>Extracted Text:</h3>
          <p className="border-black border">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sixteen;
