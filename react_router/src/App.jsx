import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Login from "./components/Login";
import About from "./components/About";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Nav />
          <Home />
        </>
      ),
    },
    {
      path: "/login/:username?",
      element: (
        <>
          <Nav />
          <Login />
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <Nav />
          <About />
        </>
      ),
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
