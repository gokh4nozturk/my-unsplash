import React from "react";

import Button from "../../Button";
import { StyledPopUp, StyledTextBox } from "./styled";

function AddNewPhoto({ turnOfPopUps, getAddPhotos }) {
  return (
    <StyledPopUp>
      <h3>Add a new photo</h3>
      <br />
      <label>Label</label>
      <StyledTextBox
        type="text"
        placeholder="Suspendisse elit massa"
      ></StyledTextBox>
      <br />
      <label>Photo URL</label>
      <StyledTextBox
        type="text"
        placeholder="https://images.unsplash.com/photo-1584395630827-860eee694d7b?ixlib=r..."
      ></StyledTextBox>
      <br />
      <div className="buttons">
        <Button
          onClick={() => {
            getAddPhotos();
            turnOfPopUps();
          }}
        >
          Cancel
        </Button>
        <Button buttonSize="default" buttonStyle="primary">
          Submit
        </Button>
      </div>
    </StyledPopUp>
  );
}

export default AddNewPhoto;
