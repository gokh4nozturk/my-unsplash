import styled from "styled-components";

export const StyledPopUp = styled.div`
  opacity: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  width: 210px;

  .buttons {
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
    margin: 0;
    padding: 5px;
    display: flex;
    align-items: flex-end;
    font-weight: 600;

    font-size: ${({ theme }) => theme.fontSizes.large};
    color: ${({ theme }) => theme.colors.light};
  }
`;

export const StyledMain = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  margin-top: ${({ theme }) => theme.spacers.large};
  background-color: ${({ theme }) => theme.colors.light};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  color: ${({ theme }) => theme.colors.dark};

  .load-more-button {
    margin: 10px;
    width: 300px;
  }

  &:hover ${StyledPopUp} {
    opacity: 1;
  }
`;

export const StyledCard = styled.img`
  /* margin: 10px; */
  border-radius: ${({ theme }) => theme.radius.secondary};
  width: 20%;
  height: 20%;

  &:hover {
    cursor: pointer;
  }
`;

export const StyledContainer = styled.div`
  display: inline;
`;
