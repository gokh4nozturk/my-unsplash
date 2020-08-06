import React, { useEffect, useState } from "react";

import Button from "../../Button";

import { StyledMain, StyledCard } from "./styled";
import Unsplash from "unsplash-js";

const splash = new Unsplash({
  accessKey: "J4enJ_Ah3mO3N34aQt22i7Hg6_EWyfhmWvPPqkHk6ew",
});

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
        console.log(data);
      });
  };
  useEffect(() => {
    getPhotos(1);
  }, []);

  return (
    <StyledMain>
      <StyledCard>
        {images.map((image) => (
          <img key={`${image.id}`} src={`${image.urls.regular}`} />
        ))}
      </StyledCard>
      <Button
        className="load-more-button"
        buttonSize="default"
        buttonStyle="primary"
        onClick={() => getPhotos(page + 1)}
      >
        load more
      </Button>
    </StyledMain>
  );
}

export default Main;
