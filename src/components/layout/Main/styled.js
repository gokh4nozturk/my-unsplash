import styled from "styled-components";

export const StyledContainer = styled.div`
  opacity: 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 200px 0px;
  border: 2px solid red;

  .buttons {
    border: 2px dotted green;
    grid: 1/2;
    display: grid;
    justify-content: flex-end;
    flex-direction: column;

    Button {
      padding: 0;
      width: 100%;

      font-size: ${({ theme }) => theme.fontSizes.small};
      border-radius: ${({ theme }) => theme.radius.secondary};
    }
  }
  p {
    border: 2px solid blue;
    margin: 0;
    padding: 0;
    grid: 3/4;
    display: flex;
    align-items: flex-end;
    font-weight: 600;

    font-size: ${({ theme }) => theme.fontSizes.large};
    color: ${({ theme }) => theme.colors.dark};
  }
`;

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

  &:hover ${StyledContainer} {
    opacity: 1;
  }
`;

export const StyledCard = styled.img`
  margin: 10px;
  border-radius: ${({ theme }) => theme.radius.secondary};
  width: 20%;
  height: 20%;

  &:hover {
    cursor: pointer;
  }
`;
