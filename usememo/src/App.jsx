import { useMemo, useState } from "react"; // Importing React hooks (useMemo and useState)
import reactLogo from "./assets/react.svg"; // Import React logo for display
import viteLogo from "/vite.svg"; // Import Vite logo for display
import "./App.css"; // Import CSS for styling

function App() {
  // State variable to manage the count
  const [count, setCount] = useState(0);

  // Memoize the large array to avoid re-creating it on every render
  const num = useMemo(() => {
    return new Array(7000000).fill(0).map((_, i) => ({
      index: i,
      isMagical: i === 6900000, // Set the "magical" item
    }));
  }, []); // Empty dependency array means this is calculated only once

  // State variable to hold the numbers array
  const [number, setNumber] = useState(num);

  // Memoize the magical index lookup to avoid re-computation on every render
  const magical = useMemo(() => number.findIndex((n) => n.isMagical), [number]);

  return (
    <>
      <div>
        {/* Display the magical number index */}
        <div>number is {magical}</div>
        {/* Vite logo */}
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        {/* React logo */}
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>
      <div className="card">
        {/* Button to increment count */}
        <button
          onClick={() => {
            setCount((count) => count + 1); // Increment count by 1
            if (count === 10) {
              // If count reaches 10
              // Update the number array with a smaller set of data
              setNumber(
                new Array(5000000).fill(0).map((_, i) => ({
                  index: i,
                  isMagical: i === 4900000, // Change the magical item
                }))
              );
            }
          }}
        >
          Count is {count} {/* Display current count */}
        </button>

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR{" "}
          {/* HMR (Hot Module Replacement) note */}
        </p>
      </div>

      {/* Documentation link */}
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App; // Export the App component as default
