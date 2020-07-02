import React from "react";
import { Link } from "react-router-dom";
import Result from "./Result";

export default function Results({ resultsArr, resultsString }) {
  console.log("resultsArr", resultsArr);
  console.log("resultsString", resultsString);

  function refresh() {
    window.location.reload(false);
  }

  return (
    <div id="results-div">
      <button onClick={refresh}>SEARCH AGAIN </button>
      <h2>Results for: {resultsString}</h2>

      <ul>
        {resultsArr.map((song, i) => {
          return <Result song={song} />;
        })}
      </ul>
    </div>
  );
}
