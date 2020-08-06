import React from "react";

import styled from "styled-components";

export const StyledMain = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  flex-flow: wrap;

  margin-top: ${({ theme }) => theme.spacers.large};
  background-color: ${({ theme }) => theme.colors.light};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  color: ${({ theme }) => theme.colors.dark};

  .load-more-button {
    margin: 10px;
    width: 300px;
  }
  img {
    margin: 10px;
    border-radius: ${({ theme }) => theme.radius.secondary};
    width: 20%;
    height: 20%;
  }

  img:hover {
    cursor: pointer;
  }
`;

export const StyledCard = styled.img`
  display: grid;
`;
