import React from "react";

export default function Result(resultsArr) {
  console.log(resultsArr);
  return (
    <div>
      <li>
        Song: {resultsArr.track_name}
        Lyrics: {resultsArr.lyrics}
      </li>
    </div>
  );
}
