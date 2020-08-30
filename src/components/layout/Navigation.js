import React from "react";

import styled from "styled-components";
import Button from "../Button";
import SearchBox from "../SearchBox";
import Logo from "../Logo";

const StyledNavigation = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  width: 100%;
  align-content: center;
`;

function Navigation({ getLogin, loggedIn }) {
  return (
    <StyledNavigation>
      <div style={{ grid: 1 / 2, display: "flex" }}>
        <Logo />
        <SearchBox type="Search by name"></SearchBox>
      </div>
      <div style={{ grid: 2 / 3, display: "flex", justifyContent: "flex-end" }}>
        <Button buttonStyle="primary" buttonSize="default">
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
            Giriş Yap
          </Button>
        )}
      </div>
    </StyledNavigation>
  );
}
export default Navigation;
