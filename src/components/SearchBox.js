import React from "react";

import styled from "styled-components";

const StyledSearchBox = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  filter: drop-shadow(0px 1px 6px rgba(0, 0, 0, 0.1));
  font-style: normal;
  font-weight: 500;

  border-radius: ${({ theme }) => theme.radius.primary};

  width: ${({ theme }) => theme.textBox.style.size.default};

  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: ${({ theme }) => theme.fontSizes.medium};

  color: ${({ theme }) => theme.colors.gray};
`;

function SearchBox({ type }) {
  return (
    <>
      <StyledSearchBox placeholder={type}></StyledSearchBox>
    </>
  );
}

export default SearchBox;
