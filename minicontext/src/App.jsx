import React from "react";
import { CounterProvider } from "./Context/CounterContext";
import Nav from "./Components/Nav";

import "./App.css";

function App() {
  return (
    <CounterProvider>
      <div className="App">
        <h1>React Context Example</h1>
        <Nav />
      </div>
    </CounterProvider>
  );
}

export default App;
