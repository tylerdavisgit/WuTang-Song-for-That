import React from "react";

export default function Form() {
  return (
    <div id="form">
      {/* <form onSubmit={handleSubmit}> */}
      <>
        <h2 id="form-call-to-action">
          Enter a phrase, Get a Wu-Tang Song and lyrics to match...
        </h2>
        <form>
          <input
            type="text"
            //   onChange={handleChange}
            placeholder="Enter Word or Phrase Here..."
          />
          {/* <button onClick={onSubmit}>SUBMIT</button> */}
          <button>SUBMIT</button>
        </form>
      </>
    </div>
  );
}
