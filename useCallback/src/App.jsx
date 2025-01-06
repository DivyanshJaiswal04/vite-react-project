import React, { useState, useCallback } from "react";

function Child({ increment }) {
  console.log("Child rendered");
  return <button onClick={increment}>Increment</button>;
}

function Parent() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  console.log("Parent rendered");

  return (
    <div>
      <h1>Count: {count}</h1>
      <Child increment={increment} />
    </div>
  );
}

export default Parent;
