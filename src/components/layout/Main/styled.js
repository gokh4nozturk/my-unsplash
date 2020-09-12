import Button from "../../Button";
import styled from "styled-components";
import { FadeIn } from "../../styled";

export const StyledPopUp = styled.div`
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: ${({ theme }) => theme.radius.secondary};

  .buttons {
    flex: 1;
    padding: 5px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: flex-end;

    ${Button} {
      padding: 1px;
      margin: 2px;
      width: 20%;

      font-size: ${({ theme }) => theme.fontSizes.small};
      border-radius: ${({ theme }) => theme.radius.secondary};
    }
  }
  .description {
    flex: 2;
    margin: 0;
    padding: 5px;
    display: flex;
    align-items: flex-end;

    font-family: ${({ theme }) => theme.fontFamily.primary};
    color: ${({ theme }) => theme.colors.light};
  }

  a {
    margin-top: 4px;
    text-decoration: none;
    color: goldenrod;
  }
  a:hover {
    text-decoration: underline;
    color: white;
    transform: rotate3d(1, 2, 3, -10deg);
  }
`;

export const StyledMain = styled.main`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  z-index: 1;
  width: 100%;

  margin-top: ${({ theme }) => theme.spacers.large};
  background-color: ${({ theme }) => theme.colors.light};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  color: ${({ theme }) => theme.colors.dark};
`;

export const StyledCard = styled.img`
  border-radius: ${({ theme }) => theme.radius.secondary};
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;

  &:hover {
    cursor: pointer;
  }
  @media (max-width: 768px) {
    border-radius: ${({ theme }) => theme.radius.thirty};
  }
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 4px;

  &:hover ${StyledPopUp} {
    opacity: 1;
  }
  @media (max-width: 768px) {
    width: 100%;
    margin: 2px;
  }
`;

// this part of App.js
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
