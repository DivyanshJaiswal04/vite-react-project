import React, { useContext } from "react";
import Login from "./Login";
import CounterContext from "../Context/CounterContext";

const Nav = () => {
  const { setNo, no } = useContext(CounterContext);

  return (
    <div>
      <h2>Nav</h2>
      <button
        onClick={() => {
          setNo(no + 1);
        }}
      >
        Click Me
      </button>
      <Login />
    </div>
  );
};

export default Nav;
