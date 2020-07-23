import React from "react";
import styled, { css } from "styled-components";

import { FadeIn } from "./styled";

const StyledButton = styled.button`
  background-color: ${(props) => props.theme.colors.light};
  color: ${(props) => props.theme.colors.main};
  font-size: ${(props) => props.theme.fontSizes.small};
  margin: ${({ margin }) => margin || "2rem"};
  padding: 0.5rem 1rem;
  border: 1px solid palevioletred;
  border-radius: 3px;
  animation: 2s ${FadeIn} ease-in;

  ${({ primary }) =>
    primary &&
    css`
      background-color: palevioletred;
      color: white;
      box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.2);
    `}

  &:hover {
    cursor: pointer;
    color: palevioletred;
    background-color: white;
    transition-delay: 100ms;
  }

  @media ${({ theme }) => theme.mediaQueries.bellow786} {
    font-size: 0.4rem;
    color: blue;
  }
`;

const OutterWrapper = styled.div`
  width: 100%;
  background-color: blueviolet;
  margin-top: 2rem;

  &:hover ${StyledButton} {
    color: red;
  }
`;

function Button({ primary, margin, children }) {
  return (
    <OutterWrapper>
      <StyledButton margin={margin} primary={primary}>
        {children}
      </StyledButton>
    </OutterWrapper>
  );
}
export default Button;
