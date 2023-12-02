import React from "react";
import "../../styling/AddChild.css";

const AddChild = () => {
  const addChildForm = (
    <form className="AddChildForm">
      <label htmlFor="childFullName">Full Name</label>
      <input type="text" name="childFullName"></input>
      <label htmlFor="gender">Gender</label>
      <input type="text" name="gender"></input>
      <label htmlFor="birthdate">Birthdate</label>
      <input type="text" name="birthdate"></input>
      <label htmlFor="school">School</label>
      <input type="text" name="school"></input>
      <label htmlFor="schoolStart">School Start</label>
      <input type="text" name="schoolStart"></input>
      <label htmlFor="schoolClass">Class</label>
      <input type="text" name="schoolClass"></input>
      <div className="selectSponsorContainer">
        <p>Select Sponsor (Optional)</p>
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
