import React, { useEffect } from "react";

// Nav component receives 'color' as a prop
const Nav = ({ color }) => {
  // useEffect without a dependency array runs on every render
  useEffect(() => {
    alert("Run in every render");
  });

  // useEffect with 'color' in the dependency array runs only when 'color' changes
  useEffect(() => {
    alert("BG change");
  }, [color]);

  // Render the Navbar with the current color prop
  return <div>Navbar with color: {color}</div>;
};

export default Nav;
