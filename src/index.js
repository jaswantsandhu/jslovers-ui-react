import React from "react";
import ReactDOM from "react-dom";

import Homepage from "./components/homepage";

import "./styles/styles.scss";

function App() {
  return (
    <div class="wrapper">
      <Homepage />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
