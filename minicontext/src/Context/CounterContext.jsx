import { createContext, useState } from "react";

const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
  const [no, setNo] = useState(0); // State to store counter value

  return (
    <CounterContext.Provider value={{ no, setNo }}>
      {children}
    </CounterContext.Provider>
  );
};

export default CounterContext;
