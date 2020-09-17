import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router";

import Navigation from "../layout/Navigation";

import Button from "../Button";

import {
  StyledMain,
  StyledCard,
  Container,
  StyledPopUp,
} from "../layout/Main/styled";
import { MainWrapper } from "../Home/style";

import Unsplash from "unsplash-js";

const splash = new Unsplash({
  accessKey: "J4enJ_Ah3mO3N34aQt22i7Hg6_EWyfhmWvPPqkHk6ew",
  timeout: 1500,
});

const SearchResults = () => {
  const [images, setImages] = useState([]);
  const { searchKey = "" } = useParams();
  const [page, setPage] = useState(1);

  const fetchData = (page) => {
    setPage(page);
    splash.search
      .photos(searchKey, page, 30, {
        orientation: "portrait",
        color: "green",
      })
      .then((e) => e.json())
      .then((data) => {
        setImages([...images, ...data.results]);
        console.log(data.results);
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
    fetchData(1);
  }, [page]);

  return (
    <MainWrapper>
      <Navigation />
      <StyledMain>
        {images.map((image) => (
          <Container key={`${image.id}`} className="aspect-ratio-container">
            <StyledCard
              src={`${image.urls.regular}`}
              className="aspect-ratio-item"
            />
            <StyledPopUp className="aspect-ratio-item">
              <div className="buttons">
                <Button
                  buttonStyle="primary"
                  buttonSize="small"
                  onClick={() => copyToClipboard(image.links.html)}
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
          onClick={() => fetchData(page + 1)}
        >
          load more
        </Button>
      </div>
    </MainWrapper>
  );
};

export default SearchResults;
