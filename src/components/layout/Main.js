import React from "react";

import styled from "styled-components";

const StyledMain = styled.main`
  width: 100%;
  height: 100%;

  margin-top: ${({ theme }) => theme.spacers.large};
  background-color: ${({ theme }) => theme.colors.light};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  color: ${({ theme }) => theme.colors.dark};
`;

function Main() {
  return <StyledMain>fdgkdşfgk</StyledMain>;
}

export default Main;
