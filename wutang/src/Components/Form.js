import React from "react";
import { Link } from "react-router-dom";

export default function Form({ handleChange, handleSubmit }) {
  // console.log(handleChange);
  // console.log(handleSubmit);

  const handle = (e) => {
    e.preventDefault();
    handleSubmit();
  };

  return (
    <div id="form">
      <>
        <h2 id="form-call-to-action">
          Enter a phrase, Get a Wu-Tang Song and lyrics to match...
        </h2>
        <form onSubmit={(e) => handle(e)}>
          <input
            type="text"
            onChange={handleChange}
            placeholder="Enter Word or Phrase Here..."
          />
          <button type="submit">
            <Link
              to="/Results"
              style={{ textDecoration: "none", color: "white" }}
            >
              Submit
            </Link>
          </button>
        </form>
      </>
    </div>
  );
}
