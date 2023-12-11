import { useState } from "react";
import { Link } from "react-router-dom";
import "../../styling/AddChild.css";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HandleAddSubmit from "../crud/AddSubmit";

const AddChild = () => {
  const [childFormData, setChildFormData] = useState({
    childFullName: "",
    gender: "",
    birthdate: "",
    school: "",
    schoolType: "",
    schoolStart: "",
    schoolClass: ""
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
    <form className="addChildForm" onSubmit={handleChildFormSubmit}>
      <label htmlFor="childFullName">Full Name</label>
      <input
        type="text"
        name="childFullName"
        onChange={handleChildFormChange}
        placeholder="Full name"
        required
      />

      <label htmlFor="gender">Gender</label>
      <select name="gender" onChange={handleChildFormChange} placeholder="Gender" required>
        <option>Male</option>
        <option>Female</option>
      </select>

      <label htmlFor="birthdate">Birthdate</label>
      <input type="date" name="birthdate" onChange={handleChildFormChange} required />

      <label htmlFor="school">School</label>
      <input type="text" name="school" onChange={handleChildFormChange} placeholder="School name" required/>

      <label htmlFor="schoolType">School type</label>
      <input type="text" name="schoolType" onChange={handleChildFormChange} placeholder="School type" required/>

      <label htmlFor="schoolStart">School Start</label>
      <input type="date" name="schoolStart" onChange={handleChildFormChange} required/>

      <label htmlFor="schoolClass">Class</label>
      <select name="schoolClass" onChange={handleChildFormChange} placeholder="Class" required>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
      </select>

      <button className="add-child-button">Add child</button>
    </form>
  );

  const AddChildContainer = (
    <div className="addChildContainer">
      <Link to="../add">
        <ArrowBackIcon id="back-arrow-child"/>
      </Link>
      <h1>Add Child</h1>
      {AddChildForm}
    </div>
  );

  return AddChildContainer;
};

export default AddChild;
