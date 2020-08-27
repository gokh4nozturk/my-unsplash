import React from "react";

import styled from "styled-components";

const UserWrapper = styled.section`
  width: 100%;
  max-width: 1350px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 0.5rem;
  
  border: 2px solid red;

  font-family: ${({ theme }) => theme.fontFamily.primary};
`;

function User() {
  return <UserWrapper>selam ben user</UserWrapper>;
}

export default User;
