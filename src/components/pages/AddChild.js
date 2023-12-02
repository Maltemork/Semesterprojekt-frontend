import React from "react";
import "../../styling/AddChild.css";

const AddChild = () => {
  const addChildForm = (
    <form className="AddChildForm">
      <label htmlFor=""></label>
      <input type="text" name=""></input>
      <label htmlFor=""></label>
      <input type="text" name=""></input>
      <label htmlFor=""></label>
      <input type="text" name=""></input>
      <label htmlFor=""></label>
      <input type="text" name=""></input>
      <label htmlFor=""></label>
      <input type="text" name=""></input>
      <label htmlFor=""></label>
      <input type="text" name=""></input>
      <div className="selectSponsorContainer">
        <select id="sponsorSelect"></select>
      </div>
      <button>Add child</button>
    </form>
  );

  const addChildContainer = (
    <div>
      <h1>Add Child</h1>
      {addChildForm}
    </div>
  );

  return addChildContainer;
};

export default AddChild;
