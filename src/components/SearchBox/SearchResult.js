import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router";

import Navigation from "../Navigation";

import Button from "../Button";
import ImageItem from "../ImageItem";

import { StyledMain, Container, StyledPopUp } from "../Photos/styled";
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

  const fetchData = useCallback(
    (page) => {
      setPage(page);
      splash.search
        .photos(searchKey, page, 30, {
          orientation: "portrait",
          color: "green",
        })
        .then((e) => e.json())
        .then((data) => {
          setImages(data.results);
          // console.log(data.results);
        });
    },
    [page, searchKey]
  );

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
  }, [fetchData]);

  return (
    <MainWrapper>
      <Navigation />
      <StyledMain>
        {images.map((image) => (
          <Container className="aspect-ratio-container">
            <ImageItem className="aspect-ratio-item" {...image} />
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
    </MainWrapper>
  );
};

export default SearchResults;
