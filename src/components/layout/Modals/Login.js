import React, { useState } from "react";

import Button from "../../Button";
import { StyledPopUp, StyledTextBox } from "./styled";

function Login(loggedIn) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginFunc = (username, password) => {
    if (username && password !== "") {
      console.log(username);
      console.log(password);
      setUsername("");
      setPassword("");
      if (username === "severus snipe" && password === "slytherin") {
        //buraya bi şeyler gelecek.
      } else alert("yalaaaaann söylüyorsun!!");
    } else {
      alert("eksik bilgi girişi var");
    }
  };

  return (
    <StyledPopUp>
      <h3>Login - Sign Up</h3>
      <br />
      <label>Username</label>
      <StyledTextBox
        type="text"
        placeholder="Severus Snipe"
        usernameue={username}
        onChange={(e) => {
          setUsername(e.currentTarget.value);
        }}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            alert("say password!");
          }
        }}
        required
      ></StyledTextBox>
      <br />

      <label>Password</label>
      <StyledTextBox
        type="password"
        placeholder="************"
        onChange={(e) => {
          setPassword(e.currentTarget.value);
        }}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            loginFunc(username, password);
          }
        }}
        required
      ></StyledTextBox>
      <br />
      <div className="buttons">
        <Button
          buttonSize="large"
          buttonStyle="primary"
          onClick={() => {
            loginFunc(username, password);
          }}
        >
          Login - Sign Up
        </Button>
      </div>
    </StyledPopUp>
  );
}

export default Login;
