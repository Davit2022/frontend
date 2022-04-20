import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import { createRoot } from "react-dom/client"

const container = document.getElementById("root")
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>

  </React.StrictMode>,
);