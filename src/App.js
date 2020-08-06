import React from "react";

import Navigation from "./components/layout/Navigation";
import Main from "./components/layout/Main/";

import styled from "styled-components";

const MainWrapper = styled.section`
  width: 100%;
  max-width: 1350px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 0.5rem;
`;

const PaginationWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: ${({ page }) => {
    if (page === "first") return "flex-end";
    else if (page === "middle") return "space-between";
    else return "flex-start";
  }};
`;

function App() {
  return (
    <MainWrapper>
      <Navigation />
      <Main />
    </MainWrapper>
  );
}

export default App;
