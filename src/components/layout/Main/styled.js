import Button from "../../Button";
import styled from "styled-components";

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
`;

// display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-wrap: wrap;

export const StyledMain = styled.main`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  z-index: 1;

  margin-top: ${({ theme }) => theme.spacers.large};
  background-color: ${({ theme }) => theme.colors.light};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  color: ${({ theme }) => theme.colors.dark};

  .load-more-button {
    margin: 10px;
    width: 300px;
  }

  @media (max-width: 768px) {
    display: inline;
    justify-content: center;
    align-items: center;
  }
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
  max-width: 85%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
