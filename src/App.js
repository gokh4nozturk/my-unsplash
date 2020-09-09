import React, { useState } from "react";

import Navigation from "./components/layout/Navigation";
import Main from "./components/layout/Main/";
import Login from "./components/layout/Modals/Login";
import AddPhotoScreen from "./components/layout/Modals/AddPhotoScreen";

import { Transparent, MainWrapper } from "./components/layout/Main/styled";

function App() {
  const [popUp, setPopUp] = useState(false);
  const [loginPopUp, setLoginPopUp] = useState(false);
  const [addPhotoPopUp, setAddPhotoPopUp] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const popUps = () => {
    setPopUp(!popUp);
  };

  const getLogin = () => {
    setLoginPopUp(!loginPopUp);
    popUps();
  };
  const getAddPhotos = () => {
    setAddPhotoPopUp(!addPhotoPopUp);
    popUps();
  };

  return (
    <MainWrapper>
      <Navigation
        getLogin={getLogin}
        loggedIn={loggedIn}
        getAddPhotos={getAddPhotos}
      />
      {popUp ? (
        <Transparent
          onClick={() => {
            setPopUp(false);
            setAddPhotoPopUp(false);
            setLoginPopUp(false);
          }}
        />
      ) : null}
      {addPhotoPopUp ? <AddPhotoScreen /> : null}
      {loginPopUp ? <Login /> : null}
      <Main popUp={popUp} />
    </MainWrapper>
  );
}

export default App;
