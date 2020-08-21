import React from "react";
import "./Form.scss";

export default function Form({ handleChange, handleSubmit }) {
  return (
    <div id="form">
      <>
        <h2 id="form-call-to-action">
          Enter a phrase, Get a Wu-Tang Song and lyrics to match...
        </h2>
        <form onSubmit={(e) => handleSubmit()}>
          <input
            type="text"
            onChange={handleChange}
            placeholder="Enter Word or Phrase Here..."
          />
          <input type="submit" value="Submit" id="submit" />
        </form>
      </>
    </div>
  );
}
