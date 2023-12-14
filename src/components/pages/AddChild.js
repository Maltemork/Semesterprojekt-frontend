import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styling/AddChild.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import HandleAddSubmit from "../crud/AddSubmit";

const AddChild = () => {
  const navigate = useNavigate();

  const [childFormData, setChildFormData] = useState({
    fullname: "",
    gender: "",
    birthdate: "",
    school: "",
    type: "",
    schoolStart: "",
    class: 0,
  });

  const handleChildFormChange = (event) => {
    const { name, value } = event.target;
    setChildFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleChildAddFormSubmit = (event) => {
    event.preventDefault();
    HandleAddSubmit(childFormData, "children");
    setTimeout(() => {
      navigate("/children/");
    }, "500");
  };

  const AddChildForm = (
    <form className="addChildForm" onSubmit={handleChildAddFormSubmit}>
      <label htmlFor="fullname">Full Name</label>
      <input
        type="text"
        name="fullname"
        onChange={handleChildFormChange}
        placeholder="Full name"
        required
      />

      <label htmlFor="gender">Gender</label>
      <select
        name="gender"
        onChange={handleChildFormChange}
        placeholder="Gender"
        required
      >
        <option value="M">Male</option>
        <option value="F">Female</option>
      </select>

      <label htmlFor="birthdate">Birthdate</label>
      <input
        type="date"
        name="birthdate"
        onChange={handleChildFormChange}
        required
      />

      <label htmlFor="school">School</label>
      <input
        type="text"
        name="school"
        onChange={handleChildFormChange}
        placeholder="School name"
        required
      />

      <label htmlFor="type">School type</label>
      <input
        type="text"
        name="type"
        onChange={handleChildFormChange}
        placeholder="School type"
        required
      />

      <label htmlFor="schoolStart">School Start</label>
      <input
        type="date"
        name="schoolStart"
        onChange={handleChildFormChange}
        required
      />

      <label htmlFor="class">Class</label>
      <select
        name="class"
        onChange={handleChildFormChange}
        placeholder="Class"
        required
      >
        <option value={0} default>
          Choose Class
        </option>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
        <option value={6}>6</option>
        <option value={7}>7</option>
      </select>

      <button className="add-child-button">Add child</button>
    </form>
  );

  const AddChildContainer = (
    <div className="addChildContainer">
      <Link to="../add">
        <ArrowBackIcon id="back-arrow-child" />
      </Link>
      <h1>Add Child</h1>
      {AddChildForm}
    </div>
  );

  return AddChildContainer;
};

export default AddChild;
