import React from "react";

import styled from "styled-components";

const StyledLogo = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  flex-direction: column;
  font-style: normal;
  font-weight: 600;
  width: 45%;
  cursor: pointer;

  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  p:first-child {
    margin-bottom: 5px;
  }

  @media (max-width: 768px) {
    justify-content: center;
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
