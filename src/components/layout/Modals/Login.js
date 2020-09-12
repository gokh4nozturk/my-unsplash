import React from "react";

import Button from "../../Button";
import { StyledPopUp, StyledTextBox } from "./styled";

function Login() {
  return (
    <StyledPopUp>
      <h3>Login - Sign Up</h3>
      <br />
      <label>Username</label>
      <StyledTextBox type="text" placeholder="Severus Snipe"></StyledTextBox>
      <br />
      <label>Password</label>
      <StyledTextBox type="password" placeholder="************"></StyledTextBox>
      <br />
      <div className="buttons">
        <Button buttonSize="large" buttonStyle="primary">
          Login - Sign Up
        </Button>
      </div>
    </StyledPopUp>
  );
}

export default Login;
