import React from "react";

import styled from "styled-components";

export const StyledMain = styled.main`
  width: 100%;
  height: 100%;

  margin-top: ${({ theme }) => theme.spacers.large};
  background-color: ${({ theme }) => theme.colors.light};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  color: ${({ theme }) => theme.colors.dark};
`;

export const StyledCard = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: stretch;
  align-items: center;

  img {
    margin: 15px;
    border-radius: ${({ theme }) => theme.radius.secondary};
  }
`;
