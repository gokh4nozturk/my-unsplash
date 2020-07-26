import React from "react";
import styled, { css } from "styled-components";

import { FadeIn } from "./styled";

/* animation: 2s ${FadeIn} ease-in; */
const StyledButton = styled.button`
  font-family: Noto Sans;
  font-style: normal;
  font-weight: bold;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  font-size: ${(props) => props.theme.fontSizes.medium};
  border-radius: ${({ theme }) => theme.radius.primary};

  background-color: ${({ theme, buttonStyle }) =>
    theme.button.style.color[buttonStyle]};
  color: ${({ theme, buttonStyle }) => theme.button.style.text[buttonStyle]};
  border: ${({ theme, buttonStyle }) => theme.button.style.border[buttonStyle]};

  min-width: ${({ theme, buttonSize }) => theme.button.style.size[buttonSize]};
  padding: 18px 26px;
`;

function Button({ buttonSize = "default", buttonStyle = "ghost", children }) {
  return (
    <StyledButton buttonSize={buttonSize} buttonStyle={buttonStyle}>
      {children}
    </StyledButton>
  );
}
export default Button;
