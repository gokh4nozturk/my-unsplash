import React from "react";
import styled, { css } from "styled-components";

import { FadeIn } from "./styled";

const StyledButton = styled.button`
  /* position: absolute; */
  animation: 2s ${FadeIn} ease-in;
  border: 0;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: ${(props) => props.theme.radius.primary};
  font-family: Noto Sans;
  font-style: normal;
  font-weight: bold;
  line-height: 19px;
  font-size: ${(props) => props.theme.fontSizes.medium};
  color: ${(props) => props.theme.colors.light};

  ${({ primary }) =>
    primary &&
    css`
      width: 137px;
      height: 55px;
      /* left: 1204.87px;
      top: 32px; */
    `}

    ${({ primarySm }) =>
      primarySm &&
      css`
        width: 105px;
        height: 55px;
      `}

  ${({ deleteLg }) =>
    deleteLg &&
    css`
      width: 105px;
      height: 55px;
      background-color: ${(props) => props.theme.colors.secondary};
    `}
  
    ${({ deleteSm }) =>
      deleteSm &&
      css`
        width: 63px;
        height: 23px;
        border: 1px solid #eb5757;
        box-sizing: border-box;
        border-radius: 12px;
        background-color: transparent;
        color: ${(props) => props.theme.colors.secondary};
        /* font-family: Montserrat; */
        font-weight: 600;
        font-size: ${(props) => props.theme.fontSizes.small};
        line-height: 15px;
        text-transform: lowercase;
      `}
      
  ${({ btnCancel }) =>
    btnCancel &&
    css`
      background-color:transparent;
      width: 58px;
      height: 25px;
      font-weight: 500;
      font-size: ${(props) => props.theme.fontSizes.large}
      line-height: 25px;
      color: #bdbdbd;
      
    `}
      

    &:hover {
    cursor: pointer;
    transition-delay: 100ms;
  }
`;

const OutterWrapper = styled.div`
  width: 100%;
  background-color: blueviolet;
  margin-top: 2rem;

  /* &:hover ${StyledButton} {
    color: ${(props) => props.theme.colors.dark};
    cursor: pointer;
    font-size: ${(props) => props.theme.fontSizes.large};
  } */
`;

function Button({
  primary,
  primarySm,
  deleteLg,
  deleteSm,
  btnCancel,
  children,
}) {
  return (
    <StyledButton
      primary={primary}
      primarySm={primarySm}
      deleteLg={deleteLg}
      deleteSm={deleteSm}
      btnCancel={btnCancel}
      children
    >
      {children}
    </StyledButton>
  );
}
export default Button;
