import React from "react";
import { Link } from "react-router-dom";
import Result from "./Result";

export default function Results({ resultsArr, resultsString }) {
  console.log("resultsArr", resultsArr);
  console.log("resultsString", resultsString);
  return (
    <div id="results-div">
      <button>
        <Link to="/" style={{ textDecoration: "none" }}>
          {" "}
          Search Again
        </Link>
      </button>
      <h2>Results for: {resultsString}</h2>
      <ul>
        <Result resultsArr={resultsArr} />
      </ul>
    </div>
  );
}
