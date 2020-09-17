import React from "react";
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
      <StyledCard src={`${image.urls.regular}`} className="aspect-ratio-item" />
    </>
  );
};

export default ImageItem;
