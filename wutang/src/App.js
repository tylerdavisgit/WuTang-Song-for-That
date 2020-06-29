import React, { useState } from "react";
import "./App.scss";
import Form from "./Components/Form";
import About from "./Components/About";
import Members from "./Components/Members";
import Burger from "./Components/Burger";
import BurgerMenu from "./Components/BurgerMenu";
import { Route, Link, Switch } from "react-router-dom";

function App() {
  // Toggle Mobile Nav
  const [open, setOpen] = useState(false);
  const handleOpen = (open) => {
    setOpen(open);
  };

  return (
    <div className="App">
      <nav id="deskNav">
        <Link to="/">
          <img
            src="https://res.cloudinary.com/tylerdavisfilms/image/upload/v1593205950/PROJECT%202/wulogo_gyxc70.png"
            alt="Wu-Tang Song for That..."
          />
        </Link>
        <Burger open={open} setOpen={handleOpen} />
        <BurgerMenu open={open} setOpen={handleOpen} />
        <ul id="desk-ul">
          <Link to="/" style={{ textDecoration: "none" }}>
            <h3>Home</h3>
          </Link>
          <Link to="/About" style={{ textDecoration: "none" }}>
            <h3>About</h3>
          </Link>
          <Link to="/Members" style={{ textDecoration: "none" }}>
            <h3>Wu-Tang Members</h3>
          </Link>
        </ul>
      </nav>

      <Switch>
        <Route path="/" exact component={Form} />
        <Route path="/About" component={About} />
        <Route path="/Members" component={Members} />
      </Switch>
    </div>
  );
}

export default App;
