import React from "react";
import "./App.css";
import "./Components/styles.scss";
import Content from "./Components/Main.js";
import DarkModeToggle from "./Components/DarkModeToggle";

function App() {
  return (
    <>
      <div className="navbar">
        <DarkModeToggle />
      </div>
      <div className="content">
        <h1>
          <Content />
        </h1>
        <code>
          github:{" "}
          <a and href="https://github.com/ifission">
            github.com/ifission
          </a>
        </code>
        <br />
        <code>
          linkedin:{" "}
          <a href="https://linkedin.com/in/alexwwj">linkedin.com/in/alexwwj</a>
        </code>
        <br />
        <code>
          youtube:{" "}
          <a href="https://www.youtube.com/channel/UCY44kYV9xRSik4wovopbsMA">
            youtube.com/ifission
          </a>
        </code>
      </div>
    </>
  );
}

export default App;
