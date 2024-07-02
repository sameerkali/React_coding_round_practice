import React, { useState, useEffect } from "react";
import GoToHome from "../../Components/GoToHome";

const TextToSpeech = () => {
  const [text, setText] = useState(
    "paste your text here to convert it into speach "
  );
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false); // State for pause button

  useEffect(() => {
    if (window.responsiveVoice) {
      console.log("ResponsiveVoice is ready");
    } else {
      console.error("ResponsiveVoice is not loaded");
    }
  }, []);

  const handleTextChange = e => {
    setText(e.target.value);
  };

  const handleSpeak = () => {
    if (window.responsiveVoice) {
      if (isSpeaking && !isPaused) {
        // Pause functionality
        window.responsiveVoice.pause();
        setIsPaused(true);
      } else if (isSpeaking && isPaused) {
        // Resume functionality
        window.responsiveVoice.resume();
        setIsPaused(false);
      } else {
        // Play functionality
        window.responsiveVoice.speak(text, "Hindi Female", {
          onstart: () => setIsSpeaking(true),
          onend: () => {
            setIsSpeaking(false);
            setIsPaused(false); // Reset pause state on end
          }
        });
      }
    } else {
      console.error("ResponsiveVoice is not available");
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <GoToHome />
      <textarea
        value={text}
        onChange={handleTextChange}
        placeholder="यहाँ हिंदी टेक्स्ट दर्ज करें"
        style={{
          width: "100%",
          height: "200px",
          padding: "10px",
          marginBottom: "10px",
          fontFamily: "Arial, sans-serif",
          fontSize: "16px",
          border: "1px solid black"
        }}
      />
      <div>
        <button onClick={handleSpeak} style={buttonStyle}>
          {isSpeaking && !isPaused ? "stop" : "speak"}
        </button>
        <button onClick={handleSpeak} style={buttonStyle}>
          {isSpeaking && isPaused ? "play" : "pause"}
        </button>
      </div>
    </div>
  );
};

const buttonStyle = {
  padding: "10px 20px",
  fontSize: "16px",
  backgroundColor: "#4CAF50",
  color: "white",
  border: "none",
  cursor: "pointer",
  marginRight: "10px"
};

export default TextToSpeech;
