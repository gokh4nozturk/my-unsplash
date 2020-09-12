import React, { useEffect, useState } from "react";

import Button from "../../Button";

import { StyledMain, StyledCard, Container, StyledPopUp } from "./styled";
import Unsplash from "unsplash-js";

const splash = new Unsplash({
  accessKey: "J4enJ_Ah3mO3N34aQt22i7Hg6_EWyfhmWvPPqkHk6ew",
  timeout: 1500,
});

function Main({ popUp, getDeletePhotos }) {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);

  const getImgUrl = (image) => {
    const html = image.links.html;
    alert(`Kopyalayınız : ${html}`);
  };

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
    <StyledMain popUp={popUp}>
      {images.map((image) => (
        <Container key={`${image.id}`} className="aspect-ratio-container">
          <StyledCard
            src={`${image.urls.regular}`}
            className="aspect-ratio-item"
          />
          <StyledPopUp className="aspect-ratio-item">
            <div className="buttons">
              <Button
                buttonStyle="thirty"
                buttonSize="small"
                onClick={() => {
                  getDeletePhotos();
                }}
              >
                Delete
              </Button>
              <Button
                buttonStyle="primary"
                buttonSize="small"
                onClick={() => getImgUrl(image)}
              >
                Copy
              </Button>
              <a href={`${image.links.download}`} target="_blank">
                download
              </a>
            </div>
            <div className="description">
              <p>{image.alt_description}</p>
            </div>
          </StyledPopUp>
        </Container>
      ))}
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
