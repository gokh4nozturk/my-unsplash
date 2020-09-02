import React from "react";

import Button from "../../Button";
import { StyledPopUp, StyledTextBox } from "./styled";

function Login() {
  return (
    <StyledPopUp>
      <h3>Giriş Yap</h3>
      <br />
      <label>Kullanıcı Adı</label>
      <StyledTextBox type="text" placeholder="Severus Snipe"></StyledTextBox>
      <br />
      <label>Parola</label>
      <StyledTextBox type="password" placeholder="************"></StyledTextBox>
      <br />
      <div className="buttons">
        <Button buttonSize="large" buttonStyle="primary">
          Giriş Yap - Kayıt ol
        </Button>
      </div>
    </StyledPopUp>
  );
}

export default Login;
