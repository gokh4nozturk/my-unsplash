import React from "react";

import styled from "styled-components";

export const StyledPopUp = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 32px;
  font-weight: 500;

  color: ${({ theme }) => theme.colors.dark};
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: ${({ theme }) => theme.radius.secondary};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: ${(props) => props.theme.fontSizes.xLarge};

  .buttons {
    display: flex;
    justify-content: flex-end;
  }
  label {
    font-size: ${(props) => props.theme.fontSizes.medium};
  }
`;

export const StyledTextBox = styled.input`
  box-sizing: border-box;
  filter: drop-shadow(0px 1px 6px rgba(0, 0, 0, 0.1));
  border: 1px solid #4f4f4f;
  margin-top: 10px;
  padding: 24px 24px;

  color: ${({ theme }) => theme.colors.gray};
  width: ${({ theme }) => theme.textBox.style.size.large};
  height: ${({ theme }) => theme.textBox.style.size.height};
  border-radius: ${({ theme }) => theme.radius.primary};
  font-size: ${(props) => props.theme.fontSizes.medium};
`;
