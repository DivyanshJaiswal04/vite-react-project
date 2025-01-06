import React from "react"; // Importing the React library to use React features
import Cards from "./components/Cards"; // Importing the Cards component to display individual cards
import Image from "./assets/Image.jpg"; // Importing an image to be passed to the Cards component

// Sample data array to be passed as props to the Cards component
const data = [
  { id: 1, name: "Divyansh", btn: "Click me!", image: Image }, // First card with an image
  { id: 2, name: "John", btn: "Press me!" }, // Second card without an image, will use default image
  { id: 3, name: "Alice", btn: "Tap me!" }, // Third card without an image, will use default image
];

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center gap-3">
      {/* Mapping over the 'data' array to render multiple Cards components */}
      {data.map((item) => (
        // Passing the 'name', 'btn', and 'image' properties as props to each Cards component
        <Cards
          key={item.id} // Using 'id' as the key to uniquely identify each card
          name={item.name} // Passing the 'name' for the card title
          btn={item.btn} // Passing the 'btn' text for the button
          image={item.image} // Passing the 'image' if available, otherwise default will be used
        />
      ))}
    </div>
  );
}

export default App; // Exporting the App component to be used in the main entry point
