import styled from "styled-components";

export const StyledPopUp = styled.div`
  opacity: 0;
  position: absolute;
  margin: 5px;
  width: 17%;
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .buttons {
    display: grid;
    flex: 1;
    justify-content: flex-end;
    flex-direction: column;
    padding: 5px;

    Button {
      padding: 1px;
      margin: 2px;
      width: 100%;

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

export const StyledMain = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
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
`;

export const StyledCard = styled.img`
  border-radius: ${({ theme }) => theme.radius.secondary};
  max-width: 100%;
  max-height: 100%;

  &:hover {
    cursor: pointer;
  }
`;

export const StyledContainer = styled.div`
  width: 24%;
  height: 24%;
  padding: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  &:hover ${StyledPopUp} {
    opacity: 1;
  }
`;

// bu kısım App.js için
export const MainWrapper = styled.section`
  width: 100%;
  max-width: 1350px;
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
