import React, { useState } from "react";

import Navigation from "./components/layout/Navigation";
import Main from "./components/layout/Main/";
import Login from "./components/layout/Modals/Login";

import styled from "styled-components";

const MainWrapper = styled.section`
  width: 100%;
  max-width: 1350px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 0.5rem;
`;

const Transparent = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  background: rgba(0, 0, 0, 0.75);
  filter: blur(2px);
  z-index: 10;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

function App() {
  const [popUp, setPopUp] = useState(false);
  const [loginPopUp, setLoginPopUp] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const popUps = () => {
    setPopUp(loginPopUp);
  };

  const getLogin = () => {
    setLoginPopUp(!loginPopUp);
    console.log(loginPopUp);
    popUps();
  };
  return (
    <MainWrapper>
      <Navigation getLogin={getLogin} loggedIn={loggedIn} />
      {loginPopUp ? <Transparent /> : null}
      {loginPopUp ? <Login /> : null}
      <Main popUp={popUp} />
    </MainWrapper>
  );
}

export default App;
