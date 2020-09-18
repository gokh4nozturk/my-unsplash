import styled from "styled-components";
import Button from "../Button";

export const StyledNavigation = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  width: 100%;
  align-content: center;

  .nav__parts:nth-child(1) {
    grid: 1 / 2;
    display: flex;
    @media (max-width: 768px) {
      justify-content: center;
      align-items: center;
    }
  }
  .nav__parts:nth-child(2) {
    display: flex;
    grid: 2/3;
    justify-content: flex-end;
    @media (max-width: 768px) {
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
    }
  }

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.xSmall};
  }
  ${Button} {
    margin: 2px;
  }
`;
