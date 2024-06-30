

// import React, { useState, useEffect } from 'react';

// const Eighteen = () => {
//   const [text, setText] = useState(
//     "Hello, this is a sample text for English text-to-speech conversion."
//   );
//   const [isSpeaking, setIsSpeaking] = useState(false);

//   useEffect(() => {
//     if (window.responsiveVoice) {
//       console.log('ResponsiveVoice is ready');
//     } else {
//       console.error('ResponsiveVoice is not loaded');
//     }
//   }, []);

//   const handleTextChange = (e) => {
//     setText(e.target.value);
//   };

//   const handleSpeak = () => {
//     if (window.responsiveVoice) {
//       if (isSpeaking) {
//         window.responsiveVoice.cancel();
//         setIsSpeaking(false);
//       } else {
//         window.responsiveVoice.speak(text, "UK English Female", {
//           onstart: () => setIsSpeaking(true),
//           onend: () => setIsSpeaking(false),
//         });
//       }
//     } else {
//       console.error('ResponsiveVoice is not available');
//     }
//   };

//   return (
//     <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
//       <textarea
//         value={text}
//         onChange={handleTextChange}
//         placeholder="Enter English text here"
//         style={{
//           width: '100%',
//           height: '200px',
//           padding: '10px',
//           marginBottom: '10px',
//           fontFamily: 'Arial, sans-serif',
//           fontSize: '16px',
//         }}
//       />
//       <div>
//         <button onClick={handleSpeak} style={buttonStyle}>
//           {isSpeaking ? 'Stop' : 'Speak'}
//         </button>
//       </div>
//     </div>
//   );
// };

// const buttonStyle = {
//   padding: '10px 20px',
//   fontSize: '16px',
//   backgroundColor: '#4CAF50',
//   color: 'white',
//   border: 'none',
//   cursor: 'pointer',
//   marginRight: '10px',
// };

// export default Eighteen;





import React, { useState, useEffect } from 'react';

const Eighteen = () => {
  const [text, setText] = useState(
    "नमस्ते, यह हिंदी टेक्स्ट-टू-स्पीच रूपांतरण के लिए एक नमूना पाठ है।"
  );
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
    if (window.responsiveVoice) {
      console.log('ResponsiveVoice is ready');
    } else {
      console.error('ResponsiveVoice is not loaded');
    }
  }, []);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSpeak = () => {
    if (window.responsiveVoice) {
      if (isSpeaking) {
        window.responsiveVoice.cancel();
        setIsSpeaking(false);
      } else {
        window.responsiveVoice.speak(text, "Hindi Female", {
          onstart: () => setIsSpeaking(true),
          onend: () => setIsSpeaking(false),
        });
      }
    } else {
      console.error('ResponsiveVoice is not available');
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <textarea
        value={text}
        onChange={handleTextChange}
        placeholder="यहाँ हिंदी टेक्स्ट दर्ज करें"
        style={{
          width: '100%',
          height: '200px',
          padding: '10px',
          marginBottom: '10px',
          fontFamily: 'Arial, sans-serif',
          fontSize: '16px',
        }}
      />
      <div>
        <button onClick={handleSpeak} style={buttonStyle}>
          {isSpeaking ? 'रुकें' : 'बोलें'}
        </button>
      </div>
    </div>
  );
};

const buttonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  backgroundColor: '#4CAF50',
  color: 'white',
  border: 'none',
  cursor: 'pointer',
  marginRight: '10px',
};

export default Eighteen;
