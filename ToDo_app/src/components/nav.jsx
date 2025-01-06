import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between p-5 bg-gray-800">
      <div className="text-white">
        <h1 className="text-2xl">To-Do App</h1>
      </div>
      <ul className="md:flex space-x-6">
        <li>
          <a href="/" className="text-white text-lg hover:text-gray-400">
            Home
          </a>
        </li>
        <li>
          <a href="/about" className="text-white text-lg hover:text-gray-400">
            About
          </a>
        </li>
        <li>
          <a
            href="/services"
            className="text-white text-lg hover:text-gray-400"
          >
            Services
          </a>
        </li>
        <li>
          <a href="/contact" className="text-white text-lg hover:text-gray-400">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
