import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";

import { StyledSearchBox } from "./style";

function SearchBox({ type }) {
  const { push } = useHistory();
  const { searchKey: searchKeyParam = "" } = useParams();
  const [searchKey, setSearchKey] = useState(searchKeyParam);

  const search = useCallback(() => {
    if (!searchKey) return;
    push(`/search/${searchKey}`);
  }, [searchKey, push]);

  useEffect(() => {
    const newTimeout = setTimeout(search, 500);
    return () => {
      clearTimeout(newTimeout);
    };
  }, [search, searchKey]);
  return (
    <>
      <StyledSearchBox
        placeholder={type}
        value={searchKey}
        onChange={(e) => {
          setSearchKey(e.currentTarget.value);
        }}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            search();
          }
        }}
      ></StyledSearchBox>
    </>
  );
}

export default SearchBox;
