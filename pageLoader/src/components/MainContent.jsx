import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import Aos from "aos";
import "aos/dist/aos.css";
import Image from "../assets/Image.jpg";

function MainContent() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // Initialize AOS
    Aos.init({ duration: 1000 });
    Aos.refreshHard(); // Ensures AOS recalculates positions

    // Fetch user data
    async function fetchUserData() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();
        setCards(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchUserData();
  }, []);

  return (
    <main className="flex-1 bg-gray-100 p-8">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Welcome to Our Landing Page</h2>
        <p className="text-lg mb-6">
          This is a simple landing page built with React and Tailwind CSS.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 mb-8">
          Get Started
        </button>
        {/* Grid Layout for Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <Cards
              key={card.id}
              title={card.title}
              desc={card.body}
              img={Image}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default MainContent;
