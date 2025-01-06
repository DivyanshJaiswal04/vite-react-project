import React from "react";
import { memo } from "react";
const Nav = ({ adjective, setAdjectivenew }) => {
  console.log("render");
  return (
    <div>
      this is a {adjective} navbar
      <button onClick={setAdjectivenew}>click</button>
    </div>
  );
};

export default memo(Nav);
