import React from "react";

import Button from "../Button";
import { StyledPopUp, StyledTextBox } from "./styled";

function DeleteScreen({ getDeletePhotos, turnOfPopUps }) {
  return (
    <>
      <StyledPopUp>
        <h3>Are you sure?</h3>
        <br />
        <label>Password</label>
        <StyledTextBox
          type="text"
          placeholder="********************"
        ></StyledTextBox>
        <br />
        <div className="buttons">
          <Button
            onClick={() => {
              turnOfPopUps();
              getDeletePhotos();
            }}
          >
            Cancel
          </Button>
          <Button buttonSize="default" buttonStyle="secondary">
            Delete
          </Button>
        </div>
      </StyledPopUp>
    </>
  );
}

export default DeleteScreen;
