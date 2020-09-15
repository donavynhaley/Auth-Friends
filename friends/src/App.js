import React, { use } from "react";
import logo from "./images/logo.png";
import "./App.css";
import LoginForm from "./components/LoginForm";
import { Route, Link, Switch } from "react-router-dom";
import { Button } from "reactstrap";
import Friends from "./components/Friends";
function App() {
  return (
    <div className="App">
      <header>
        <ul>
          <li>
            <Link to="/login">
              <Button color="primary">Login</Button>
            </Link>
          </li>
          <li>
            <Link to="/friends">
              <Button color="success">Friends</Button>
            </Link>
          </li>
        </ul>
      </header>
      <div className="content">
        <img src={logo} height="500px" width="500px" />
        <h2>Please login to see your Friends</h2>
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/friends" component={Friends} />
        </Switch>
      </div>
    </div>
  );
}

export default App;

//        <div>Logo made by <a href="https://www.designevo.com/logo-maker/" title="Free Online Logo Maker">DesignEvo free logo creator</a></div>
