import React from "react";

export default function BurgerMenu() {
  return (
    <div>
      <ul>
        <Link to="/About" style={{ textDecoration: "none" }}>
          <h3>About</h3>
        </Link>
        <Link to="/Members" style={{ textDecoration: "none" }}>
          <h3>Wu-Tang Members</h3>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <h3>X Close</h3>
        </Link>
      </ul>
    </div>
  );
}
