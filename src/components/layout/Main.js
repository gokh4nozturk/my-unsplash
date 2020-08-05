import React, { useEffect, useState } from "react";

import styled from "styled-components";
import Unsplash from "unsplash-js";

const splash = new Unsplash({
  accessKey: "J4enJ_Ah3mO3N34aQt22i7Hg6_EWyfhmWvPPqkHk6ew",
});

const StyledMain = styled.main`
  width: 100%;
  height: 100%;

  margin-top: ${({ theme }) => theme.spacers.large};
  background-color: ${({ theme }) => theme.colors.light};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  color: ${({ theme }) => theme.colors.dark};
`;

function Main() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);

  const getPhotos = (page) => {
    setPage(page);
    splash.photos
      .listPhotos(page, 20, "latest")
      .then((e) => e.json())
      .then((data) => {
        setImages([...images, ...data]);
      });
  };
  useEffect(() => {
    getPhotos(1);
  }, []);

  return (
    <StyledMain>
      {images.map((image) => (
        <img src={`${image.urls.regular}`} height={100} />
      ))}
      <button onClick={() => getPhotos(page + 1)}>load more</button>
    </StyledMain>
  );
}

export default Main;
