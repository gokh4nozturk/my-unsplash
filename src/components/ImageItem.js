import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

const StyledCard = styled.img`
  border-radius: ${({ theme }) => theme.radius.secondary};
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;

  &:hover {
    cursor: pointer;
  }
  @media (max-width: 768px) {
    border-radius: ${({ theme }) => theme.radius.thirty};
  }
`;

const ImageItem = (image) => {
  return (
    <>
      {/* <Link to={`/photos/${image.id}`}> */}
      <StyledCard src={`${image.urls.regular}`} />
      {/* </Link> */}
    </>
  );
};

export default ImageItem;
