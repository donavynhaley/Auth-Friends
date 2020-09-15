import React, { use } from "react";
import logo from "./images/logo.png";
import "./App.css";
import LoginForm from "./components/LoginForm";
import { Route, Link, Switch } from "react-router-dom";
import { Button } from "reactstrap";
import Friends from "./components/Friends";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <form className="form-inline">
          <Link to="/login">
            <button className="btn btn-outline-success" type="button">
              Login
            </button>
          </Link>
          <Link to="/friends">
            <button className="btn btn-outline-success" type="button">
              Friends
            </button>
          </Link>
        </form>
      </nav>
      <div className="content">
        <img src={logo} height="500px" width="500px" />
        <Switch>
          <PrivateRoute exact path="/friends" component={Friends} />
          <Route path="/login" component={LoginForm} />
          <Route component={LoginForm} />
        </Switch>
      </div>
    </div>
  );
}

export default App;

//        <div>Logo made by <a href="https://www.designevo.com/logo-maker/" title="Free Online Logo Maker">DesignEvo free logo creator</a></div>
