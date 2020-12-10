import styled from "styled-components";

export const MainWrapper = styled.section`
  display: grid;
  grid-template-rows: auto 1fr auto;
  place-items: center;
  max-width: 85%;
  margin: 0 auto;
  margin-top: 0.5rem;
`;

export const Transparent = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  background: rgba(0, 0, 0, 0.75);
  filter: blur(2px);
  z-index: 10;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
