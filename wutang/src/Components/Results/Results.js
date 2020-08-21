import React from "react";
import "./Results.scss";
import Result from "../Result/Result";
import { Redirect } from "react-router";

export default function Results({ resultsArr, resultsString, backToForm }) {
  console.log(resultsArr);
  if (resultsString === "") {
    return <Redirect to="/form" />;
  } else if (resultsArr.length > 0) {
    return (
      <div id="results-div">
        <h2>Results for: {resultsString}</h2>
        <button onClick={backToForm}>Search Again</button>
        <ul>
          {resultsArr.map((song) => {
            return <Result song={song} />;
          })}
        </ul>
      </div>
    );
  } else {
    return (
      <div id="results-div">
        <h2>Results for: {resultsString}</h2>
        <button onClick={backToForm}>SEARCH AGAIN</button>
      </div>
    );
  }
}
