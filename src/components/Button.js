import styled, { css } from "styled-components";

import { FadeIn } from "./styled";

const Button = styled.button`
  font-style: normal;
  font-weight: bold;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  animation: 1s ${FadeIn} ease-in;

  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: ${(props) => props.theme.fontSizes.medium};
  border-radius: ${({ theme }) => theme.radius.primary};

  background-color: ${({ theme, buttonStyle = "ghost" }) =>
    theme.button.style.color[buttonStyle]};
  color: ${({ theme, buttonStyle = "ghost" }) =>
    theme.button.style.text[buttonStyle]};
  border: ${({ theme, buttonStyle = "ghost" }) =>
    theme.button.style.border[buttonStyle]};

  min-width: ${({ theme, buttonSize = "default" }) =>
    theme.button.style.size[buttonSize]};
  padding: 18px 26px;
`;

// function Button({ buttonSize = "default", buttonStyle = "ghost", children }) {
//   return (
//     <StyledButton buttonSize={buttonSize} buttonStyle={buttonStyle}>
//       {children}
//     </StyledButton>
//   );
// }
export default Button;
