import { useState } from "react";
import "../../styling/AddChild.css";
import HandleAddSubmit from "../crud/AddSubmit";

const AddChild = () => {
  const [childFormData, setChildFormData] = useState({
    childFullName: "",
    gender: "",
    birthdate: "",
    school: "",
    schoolStart: "",
    schoolClass: "",
  });

  const handleChildFormChange = (event) => {
    const { name, value } = event.target;
    setChildFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleChildFormSubmit = (event) => {
    event.preventDefault();
    HandleAddSubmit(childFormData, "children");
  };

  const AddChildForm = (
    <form className="AddChildForm" onSubmit={handleChildFormSubmit}>
      <label htmlFor="childFullName">Full Name</label>
      <input
        type="text"
        name="childFullName"
        onChange={handleChildFormChange}
      />

      <label htmlFor="gender">Gender</label>
      <input type="text" name="gender" onChange={handleChildFormChange} />

      <label htmlFor="birthdate">Birthdate</label>
      <input type="date" name="birthdate" onChange={handleChildFormChange} />

      <label htmlFor="school">School</label>
      <input type="text" name="school" onChange={handleChildFormChange} />

      <label htmlFor="schoolStart">School Start</label>
      <input type="date" name="schoolStart" onChange={handleChildFormChange} />

      <label htmlFor="schoolClass">Class</label>
      <input type="text" name="schoolClass" onChange={handleChildFormChange} />

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
