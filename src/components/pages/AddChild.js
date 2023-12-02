import React, { useState } from "react";
import "../../styling/AddChild.css";

const AddChild = (onSubmit) => {
  const handleFormSubmit = (type, data) => {
    onSubmit(type, data);
  };
  const [childSponsor, setChildSponsor] = useState("");
  const handleChange = (event) => {
    setChildSponsor(event.target.value);
  };

  const AddChildForm = (
    <form className="AddChildForm" onSubmit={handleFormSubmit}>
      <label htmlFor="childFullName">Full Name</label>
      <input type="text" name="childFullName" />

      <label htmlFor="gender">Gender</label>
      <input type="text" name="gender" />

      <label htmlFor="birthdate">Birthdate</label>
      <input type="text" name="birthdate" />

      <label htmlFor="school">School</label>
      <input type="text" name="school" />

      <label htmlFor="schoolStart">School Start</label>
      <input type="text" name="schoolStart" />

      <label htmlFor="schoolClass">Class</label>
      <input type="text" name="schoolClass" />

      <div className="selectSponsorContainer">
        <p>Select Sponsor (Optional)</p>
        <select
          value={childSponsor}
          onChange={handleChange}
          id="sponsorSelect"
        ></select>
      </div>

      <button>Add child</button>
    </form>
  );

  const AddChildContainer = (
    <div className="addChildContainer">
      <h1>Add Child</h1>
      {AddChildForm}
    </div>
  );

  return AddChildContainer;
};

export default AddChild;
