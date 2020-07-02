import React from "react";
import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div id="welcome-container">
      <Link to="/form" style={{ textDecoration: "none", color: "white" }}>
        <h1 id="welcome">There's a Wu-Tang Song for That</h1>
        <h2>click^</h2>
      </Link>
    </div>
  );
}
