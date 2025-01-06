import React, { useState, useEffect } from "react";

export default function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [range, setRange] = useState(8);
  const [number, setNumber] = useState(false);
  const [characters, setCharacters] = useState(false);

  // Function to generate a random password
  const generatePassword = () => {
    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (number) charset += "0123456789";
    if (characters) charset += "!@#$%&_.";

    let generatedPassword = "";
    for (let i = 0; i < range; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      generatedPassword += charset[randomIndex];
    }

    setPassword(generatedPassword);
  };

  // useEffect to generate a password when dependencies change
  useEffect(() => {
    generatePassword();
  }, [range, number, characters]);

  // Copy password to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert("Password copied to clipboard!");
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-xl shadow-md">
      {/* Password Display and Copy Button */}
      <div className="flex mb-4">
        <input
          type="text"
          value={password}
          readOnly
          className="flex-grow border rounded-l-md p-2"
          placeholder="Password"
        />
        <button
          onClick={copyToClipboard}
          className="bg-gray-200 p-2 rounded-r-md hover:bg-gray-300"
        >
          Copy
        </button>
      </div>

      {/* Range Slider */}
      <div className="mb-4">
        <input
          type="range"
          min="8"
          max="50"
          value={range}
          onChange={(e) => setRange(parseInt(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
        <div className="text-sm text-gray-500 mt-1">Length: {range}</div>
      </div>

      {/* Options for Numbers and Special Characters */}
      <div className="flex space-x-4">
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="numbers"
            checked={number}
            onChange={(e) => setNumber(e.target.checked)}
            className="w-4 h-4"
          />
          <label htmlFor="numbers" className="text-sm font-medium leading-none">
            Numbers
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="characters"
            checked={characters}
            onChange={(e) => setCharacters(e.target.checked)}
            className="w-4 h-4"
          />
          <label
            htmlFor="characters"
            className="text-sm font-medium leading-none"
          >
            Special Characters
          </label>
        </div>
      </div>
    </div>
  );
}
