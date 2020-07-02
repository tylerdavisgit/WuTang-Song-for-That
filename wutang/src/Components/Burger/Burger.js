import React from "react";
import "./Burger.scss";

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
