import React from "react";
import { Link } from "react-router-dom";

import Button from "../../Button";
import SearchBox from "../../SearchBox";
import Logo from "../../Logo";
import { StyledNavigation } from "./style";

function Navigation({ getLogin, loggedIn, getAddPhotos }) {
  return (
    <StyledNavigation>
      <div className="nav__parts">
        <Link to="/" className="nav__links">
          <Logo />
        </Link>
        <SearchBox type="Search by name"></SearchBox>
      </div>
      <div className="nav__parts">
        <Button
          buttonStyle="primary"
          buttonSize="default"
          onClick={() => getAddPhotos()}
        >
          Add a photo
        </Button>
        {loggedIn ? (
          <p>avatar</p>
        ) : (
          <Button
            buttonStyle="ghost"
            buttonSize="default"
            onClick={() => getLogin()}
          >
            Login
          </Button>
        )}
      </div>
    </StyledNavigation>
  );
}
export default Navigation;
