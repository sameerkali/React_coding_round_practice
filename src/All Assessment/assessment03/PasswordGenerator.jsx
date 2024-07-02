import React, { useState } from "react";
import GoToHome from "../../Components/GoToHome";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [characterLength, setCharacterLength] = useState(8);
  const [includeUpper, setIncludeUpper] = useState(true);
  const [includeLower, setIncludeLower] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [strength, setStrength] = useState("low");
  const [color, setColor] = useState("text-red-500");

  const handleCharacterLength = e => {
    setCharacterLength(e.target.value);
  };

  const generatePassword = () => {
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";
    let allCharacters = "";

    if (includeUpper) allCharacters += upperCase;
    if (includeLower) allCharacters += lowerCase;
    if (includeNumbers) allCharacters += numbers;
    if (includeSymbols) allCharacters += symbols;
    if (!includeSymbols && !includeNumbers && !includeLower && !includeUpper)
      allCharacters += upperCase;

    let generatedPassword = "";
    for (let i = 0; i < characterLength; i++) {
      const randomIndex = Math.floor(Math.random() * allCharacters.length);
      generatedPassword += allCharacters[randomIndex];
    }

    setPassword(generatedPassword);
    setStrength(getStrength(generatedPassword));
  };

  const getStrength = password => {
    let strength = "low";
    setColor('text-red-500')
    if (password.length > 14) {
      strength = "high";
      setColor("text-green-500")
    } else if (password.length > 8) {
      strength = "medium";
      setColor("text-yellow-500")
    }
    return strength;
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="text-2xl mb-4">Password Generator</div>
      <div className="bg-gray-100 w-1/2 border border-black p-10 flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <p className={`text-2xl`}>
            {password || "Generated Password"}
          </p>
          <button
            className="custom-button"
            onClick={() => navigator.clipboard.writeText(password)}
          >
            Copy
          </button>
        </div>
        <div className="flex justify-between items-center">
          <p>Character Length</p>
          <p>
            {characterLength}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <input
            className="w-full"
            type="range"
            min="6"
            max="16"
            value={characterLength}
            onChange={ (e) => handleCharacterLength(e)}
          />
        </div>
        <div className="flex justify-between">
          <div>
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={includeUpper}
                onChange={() => setIncludeUpper(!includeUpper)}
              />
              <label className="ml-2">Include Uppercase Letters</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={includeLower}
                onChange={() => setIncludeLower(!includeLower)}
              />
              <label className="ml-2">Include Lowercase Letters</label>
            </div>
          </div>
          <div>
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={includeNumbers}
                onChange={() => setIncludeNumbers(!includeNumbers)}
              />
              <label className="ml-2">Include Numbers</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={includeSymbols}
                onChange={() => setIncludeSymbols(!includeSymbols)}
              />
              <label className="ml-2">Include Symbols</label>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <p>Strength:</p>
          <p className={` ${color}`}>
            {strength}
          </p>
        </div>
        <div className="flex justify-between">
          <button className="custom-button w-full" onClick={generatePassword}>
            Generate
          </button>
        </div>
      </div>
      <GoToHome />
    </div>
  );
};

export default PasswordGenerator;
