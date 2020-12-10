import React, { useEffect, useState } from "react";

import Button from "../Button";
import ImageItem from "../ImageItem";

import { StyledMain, Container, StyledPopUp } from "./styled";
import Unsplash from "unsplash-js";

const splash = new Unsplash({
  accessKey: "J4enJ_Ah3mO3N34aQt22i7Hg6_EWyfhmWvPPqkHk6ew",
  timeout: 1500,
});

function Main({ popUp, getDeletePhotos }) {
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

  const copyToClipboard = (str) => {
    const el = document.createElement("textarea");
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    alert("Copied!");
  };

  useEffect(() => {
    getPhotos(1);
  }, []);

  return (
    <>
      <StyledMain popUp={popUp}>
        {images.map((image) => (
          <Container className="aspect-ratio-container">
            <ImageItem className="aspect-ratio-item" {...image} />
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
                  onClick={() => copyToClipboard(image.links.html)}
                >
                  Copy
                </Button>
                <a href={`${image.links.download}`} download>
                  download
                </a>
              </div>
              <div className="description">
                <p>{image.alt_description}</p>
              </div>
            </StyledPopUp>
          </Container>
        ))}
      </StyledMain>
      <div
        className="load-more-button"
        style={{
          display: "grid",
          placeItems: "center",
        }}
      >
        <Button
          buttonSize="xLarge"
          buttonStyle="primary"
          onClick={() => getPhotos(page + 1)}
        >
          load more
        </Button>
      </div>
    </>
  );
}

export default Main;
