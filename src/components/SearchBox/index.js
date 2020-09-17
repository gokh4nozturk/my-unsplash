import React from "react";

import { StyledSearchBox } from "./style";

function SearchBox({ type }) {
  return (
    <>
      <StyledSearchBox placeholder={type}></StyledSearchBox>
    </>
  );
}

export default SearchBox;
