import React, { useEffect, useRef, useState } from "react";

export default function App() {
  // State to keep track of the count value (used to trigger re-renders)
  let [count, setCount] = useState(0);

  // useRef to persist a value across renders without causing re-renders
  let a = useRef(0);

  // useRef to reference the button DOM element directly
  let btnRef = useRef();

  /*
    Explanation of Normal Variable vs useRef:

    // let a = 0;  
    // If we use a normal variable, its value resets on every re-render,
    // so we cannot accurately track the number of renders.
    // In the example below, it will log "rendered 1" every time.

    // useEffect(() => {
    //   a++;
    //   console.log(`rendered ${a}`);
    // });

    When using `useRef` (as implemented below):
    - The `useRef` object persists across renders.
    - Changes to `a.current` don't trigger re-renders.
    - This makes it perfect for keeping track of things like render counts.
  */

  useEffect(() => {
    a.current++; // Increment the render count
    console.log(`rendered ${a.current}`); // Log the current render count
  });

  return (
    <>
      {/* Center the content on the screen */}
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          {/* Display the current count */}
          <p className="text-xl">Count is {count}</p>

          {/* Button to increment count */}
          <button
            ref={btnRef} // Reference the button using useRef
            className="bg-black text-white p-2 rounded-xl mt-4"
            onClick={() => {
              setCount(count + 1); // Increment the count state
              btnRef.current.style.background = "pink"; // Change button color using ref
            }}
          >
            Add Value
          </button>
        </div>
      </div>
    </>
  );
}
