import React, { useEffect, useState } from "react";
import Nav from "./components/nav";

export default function App() {
  // State to keep track of the count value (used to trigger re-renders)
  let [count, setCount] = useState(0);

  // State to dynamically update the color based on count
  let [color, setColor] = useState("color");

  // useEffect with an empty dependency array runs only once when the component mounts
  useEffect(() => {
    alert("Welcome!");
  }, []);

  // useEffect runs whenever the `count` state changes
  useEffect(() => {
    alert("Count changed to " + count); // Show an alert with the updated count
    setColor(`color-${count}`); // Update the color state dynamically
  }, [count]);

  return (
    <>
      {/* Center the content on the screen */}
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          {/* Render the Nav component and pass the dynamic color as a prop */}
          <Nav color={color} />

          {/* Display the current count */}
          <p className="text-xl">Count is {count}</p>

          {/* Button to increment the count */}
          <button
            className="bg-black text-white p-2 rounded-xl mt-4"
            onClick={() => setCount(count + 1)}
          >
            Add Value
          </button>
        </div>
      </div>
    </>
  );
}
