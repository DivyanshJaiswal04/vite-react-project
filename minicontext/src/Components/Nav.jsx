import React, { useContext } from "react";
import Login from "./Login";
import CounterContext from "../Context/CounterContext";

const Nav = () => {
  const { setNo } = useContext(CounterContext);
  const { no } = useContext(CounterContext);

  return (
    <div>
      nav
      <button
        onClick={() => {
          setNo(no + 1);
        }}
      >
        click me
      </button>
      <Login />
    </div>
  );
};

export default Nav;
