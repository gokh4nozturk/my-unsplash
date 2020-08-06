import React from "react";

import styled from "styled-components";

const StyledLogo = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  flex-direction: column;
  font-style: normal;
  font-weight: 800;
  width: 180px;
  cursor: pointer;

  font-family: ${({ theme }) => theme.fontFamily.primary};
  p:first-child {
    margin-bottom: 5px;
  }
`;

function Logo() {
  return (
    <>
      <StyledLogo>
        <p>My unsplash</p>
        <p>devchallenges.io</p>
      </StyledLogo>
    </>
  );
}
export default Logo;
