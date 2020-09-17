import React, { useState } from "react";

import { Transparent, MainWrapper } from "./style";

import Navigation from "../layout/Navigation";
import Main from "../layout/Main/";
import Login from "../layout/Modals/Login";
import AddPhotoScreen from "../layout/Modals/AddPhotoScreen";
import DeleteScreen from "../layout/Modals/DeleteScreen";

const Home = () => {
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
    <>
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
    </>
  );
};

export default Home;
