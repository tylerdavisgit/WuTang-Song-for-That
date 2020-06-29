import React from "react";

export default function Burger({ open, setOpen }) {
  return (
    <div id="burger">
      <div id="burger-span" onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}
