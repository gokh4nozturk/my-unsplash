import React, { useState } from "react";

import Navigation from "./components/layout/Navigation";
import Main from "./components/layout/Main/";
import Login from "./components/layout/Modals/Login";
import AddPhotoScreen from "./components/layout/Modals/AddPhotoScreen";
import DeleteScreen from "./components/layout/Modals/DeleteScreen";

import { Transparent, MainWrapper } from "./components/layout/Main/styled";

function App() {
  const [popUp, setPopUp] = useState(false);
  const [loginPopUp, setLoginPopUp] = useState(false);
  const [addPhotoPopUp, setAddPhotoPopUp] = useState(false);
  const [deletePopUp, setDeletePopUp] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const turnOfPopUps = () => {
    setPopUp(!popUp);
  };

  const getLogin = () => {
    setLoginPopUp(!loginPopUp);
    turnOfPopUps();
  };
  const getAddPhotos = () => {
    setAddPhotoPopUp(!addPhotoPopUp);
    turnOfPopUps();
  };
  const getDeletePhotos = () => {
    setDeletePopUp(!deletePopUp);
    turnOfPopUps();
  };

  const transparentClear = () => {
    setPopUp(false);
    setAddPhotoPopUp(false);
    setLoginPopUp(false);
    setDeletePopUp(false);
  };

  const setLogged = (logged) => {
    logged && setLoggedIn(!loggedIn);
    transparentClear();
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
            transparentClear();
          }}
        />
      ) : null}
      {addPhotoPopUp ? (
        <AddPhotoScreen
          turnOfPopUps={turnOfPopUps}
          getAddPhotos={getAddPhotos}
        />
      ) : null}
      {loginPopUp ? <Login setLogged={setLogged} /> : null}
      {deletePopUp ? (
        <DeleteScreen
          turnOfPopUps={turnOfPopUps}
          getDeletePhotos={getDeletePhotos}
        />
      ) : null}

      <Main popUp={popUp} getDeletePhotos={getDeletePhotos} />
    </MainWrapper>
  );
}

export default App;
