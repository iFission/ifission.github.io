import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./Components/styles.scss";
import Content from "./Components/Main.js";
import DarkModeToggle from "./Components/DarkModeToggle";

function App() {
  return (
    <>
      <div className="navbar">
        <Content />
        <DarkModeToggle />
      </div>
    </>
  );
}

export default App;
