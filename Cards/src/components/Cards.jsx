import React from "react";
import PropTypes from "prop-types";
// Importing the default image from the assets folder
import Default from "../assets/Default.png";

// Card component to display a card with a title, button, and image
function Cards({ name = "Set Title", btn = "Read More", image = Default }) {
  return (
    <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      {/* Header section with an image */}
      <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-clip-border">
        {/* Displaying the image passed as a prop (or default image) */}
        <img
          src={image} // Image is passed as a prop and used here
          alt="Card background" // Alt text for accessibility
          className="w-full h-full object-cover rounded-xl" // Image styling to cover the area and be rounded
        />
      </div>

      {/* Card content section with title and description */}
      <div className="p-6">
        {/* Title of the card */}
        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {name} {/* Title passed via props */}
        </h5>
        {/* Description of the card, placeholder text here */}
        <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis
          ligula. {/* Placeholder description */}
        </p>
      </div>

      {/* Button section */}
      <div className="p-6 pt-0">
        {/* Button that will perform an action when clicked */}
        <button
          data-ripple-light="true" // For ripple effect on button click
          type="button" // Specifies that this is a button element
          className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        >
          {btn} {/* Button text passed via props */}
        </button>
      </div>
    </div>
  );
}

// Prop validation: Ensures that 'name', 'btn', and 'image' are strings and are required
Cards.propTypes = {
  name: PropTypes.string.isRequired, // 'name' is a required string (Card title)
  btn: PropTypes.string.isRequired, // 'btn' is a required string (Button text)
  image: PropTypes.string.isRequired, // 'image' is a required string (URL of the image)
};

export default Cards; // Exporting the Cards component so it can be used in other parts of the app
