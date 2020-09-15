import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const LoginForm = (props) => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState("");

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const login = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/login", credentials)
      .then((res) => {
        // Set token in local storage
        localStorage.setItem("token", res.data.payload);
        // Navigate to frinds component
        props.history.push("/friends");
        setErrors("");
      })
      .catch((err) => {
        setErrors(err.response.data.error);
      });
  };
  return (
    <div className="form-wrapper">
      <Form onSubmit={login}>
        <FormGroup>
          <Label for="username" hidden>
            username
          </Label>
          <Input
            type="username"
            name="username"
            id="username"
            placeholder="Username"
            onChange={(e) => handleChange(e)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password" hidden>
            Password
          </Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={(e) => handleChange(e)}
          />
        </FormGroup>
        <Button>Login</Button>
      </Form>
      {errors != "" ? <p>{errors}</p> : null}
    </div>
  );
};

export default LoginForm;
