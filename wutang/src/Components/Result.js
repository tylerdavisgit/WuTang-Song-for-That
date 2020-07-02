import React from "react";

export default function Result({ song }) {
  return (
    <li>
      <h3>Song: {song.trackname}</h3>
      <h3>Lyrics:</h3>
      <p>{song.lyrics}</p>
    </li>
  );
}
