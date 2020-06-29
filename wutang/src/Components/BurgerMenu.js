import React from "react";
import { Link } from "react-router-dom";

export default function BurgerMenu({ open, setOpen }) {
  return (
    <div id="burger-menu">
      <ul id={open ? "open" : "closed-burger-menu-list"}>
        <Link
          to="/"
          style={{ textDecoration: "none" }}
          onClick={() => setOpen(!open)}
        >
          <h3 className="burger-menu-item">Home</h3>
        </Link>
        <Link
          to="/About"
          style={{ textDecoration: "none" }}
          onClick={() => setOpen(!open)}
        >
          <h3 className="burger-menu-item">About</h3>
        </Link>
        <Link
          to="/Members"
          style={{ textDecoration: "none" }}
          onClick={() => setOpen(!open)}
        >
          <h3 className="burger-menu-item">Wu-Tang Members</h3>
        </Link>

        <h3 className="burger-menu-item" onClick={() => setOpen(!open)}>
          X Close
        </h3>
      </ul>
    </div>
  );
}
