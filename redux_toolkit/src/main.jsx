import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/Store";
import App from "./App";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
