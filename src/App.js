import React from "react";
import styled from "styled-components";

import Button from "./components/Button";

const MainWrapper = styled.section`
  width: 100%;
  max-width: 1350px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

const Link = styled.a.attrs((props) => ({ target: "_blank" }))`
  color: violet;
  font-size: 1.5rem;
`;

function App() {
  return (
    <MainWrapper>
      <p>dfjgdlfkg</p>
      <Button primary>Click Me!</Button>
      <Button margin="3rem">Click Me!</Button>
      <PaginationWrapper page="middle">
        <Button>Page 1</Button>
        <Button>Page 2</Button>
        <Button>Page 3</Button>
        <Button>Page 4</Button>
        <Button>Page 1</Button>
        <Button>Page 2</Button>
        <Button>Page 3</Button>
        <Button>Page 4</Button>
      </PaginationWrapper>
      <Link href="https://www.google.com">One Link</Link>
      <Link href="https://www.google.com">Another Link</Link>
    </MainWrapper>
  );
}

export default App;
