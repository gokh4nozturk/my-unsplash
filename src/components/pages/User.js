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
`;

function User() {
  return <UserWrapper></UserWrapper>;
}

export default User;
