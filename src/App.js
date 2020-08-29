import React,{useState} from "react";

import Navigation from "./components/layout/Navigation";
import Main from "./components/layout/Main/";
import Login from "./components/layout/Modals/Login";

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
  const [popUp, setPopUp] = useState(false);
  const [loginPopUp, setLoginPopUp] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  
  const popUps =()=>{
    setPopUp(loginPopUp);
  }
  
  const getLogin = ()=>{
    setLoginPopUp(!loginPopUp);
    console.log(loginPopUp);
    popUps();
  }
  return (
    <MainWrapper>
      <Navigation getLogin={getLogin} loggedIn={loggedIn}/>
      {loginPopUp ? <Login/> : null}
      <Main popUp={popUp}/>
    </MainWrapper>
  );
}

export default App;
