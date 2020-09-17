import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

import Unsplash from "unsplash-js";

const splash = new Unsplash({
  accessKey: "J4enJ_Ah3mO3N34aQt22i7Hg6_EWyfhmWvPPqkHk6ew",
  timeout: 1500,
});

const SearchResults = () => {
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

  return <></>;
};

export default SearchResults;
