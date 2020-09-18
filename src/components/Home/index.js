import React, { useState } from "react";

import { Transparent, MainWrapper } from "./style";

import Navigation from "../Navigation";
import Photos from "../Photos/";
import Login from "../Modals/Login";
import AddPhotoScreen from "../Modals/AddPhotoScreen";
import DeleteScreen from "../Modals/DeleteScreen";

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

        <Photos popUp={popUp} getDeletePhotos={getDeletePhotos} />
      </MainWrapper>
    </>
  );
};

export default Home;
