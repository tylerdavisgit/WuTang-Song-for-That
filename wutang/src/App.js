import React from "react";
import "./App.scss";
import Form from "./Components/Form";
import About from "./Components/About";
import Members from "./Components/Members";
import Burger from "./Components/Burger";
import { Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav id="deskNav">
        <Link to="/">
          <img
            src="https://res.cloudinary.com/tylerdavisfilms/image/upload/v1593205950/PROJECT%202/wulogo_gyxc70.png"
            alt="Wu-Tang Song for That..."
          />
        </Link>
        <Burger />
        <ul>
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
