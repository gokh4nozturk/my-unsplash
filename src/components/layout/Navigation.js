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

  .nav__parts:nth-child(1) {
    grid: 1 / 2;
    display: flex;
    @media (max-width: 768px) {
      justify-content: center;
      align-items: center;
    }
  }
  .nav__parts:nth-child(2) {
    display: flex;
    grid: 2/3;
    justify-content: flex-end;
    @media (max-width: 768px) {
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
    }
  }

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.xSmall};
  }
`;

function Navigation({ getLogin, loggedIn, getAddPhotos }) {
  return (
    <StyledNavigation>
      <div className="nav__parts">
        <Logo />
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
