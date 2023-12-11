import { useEffect, useState } from "react";
import "../../styling/EditChild.css";
import HandleEditSubmit from "../crud/EditSubmit";
import { getObject } from "../crud/getData";
import { useParams } from "react-router-dom";

const EditChild = () => {
  const { id } = useParams();
  const [childFormData, setChildFormData] = useState({});

  useEffect(() => {
    const fetchChild = async () => {
      try {
        const ChildData = await getObject("children", id);

        const formattedBirthdate = new Date(ChildData[0].birthdate)
          .toISOString()
          .split("T")[0];
        const formattedSchoolStart = new Date(ChildData[0].schoolStart)
          .toISOString()
          .split("T")[0];

        setChildFormData({
          ...ChildData[0],
          birthdate: formattedBirthdate,
          schoolStart: formattedSchoolStart,
        });
        console.log("Child Data: ", ChildData[0]);
      } catch (error) {
        console.error("Couldn't fetch child data for: " + id, error);
      }
    };

    fetchChild();
  }, [id]);

  const handleChildFormChange = (event) => {
    const { name, value } = event.target;
    setChildFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleChildEditFormSubmit = (event) => {
    event.preventDefault();
    HandleEditSubmit(childFormData, "children", id);
  };

  const EditChildForm = (
    <form className="editChildForm" onSubmit={handleChildEditFormSubmit}>
      <label htmlFor="fullname">Full Name</label>
      <input
        type="text"
        name="fullname"
        value={childFormData.fullname || ""}
        onChange={handleChildFormChange}
      />

      <label htmlFor="school">School</label>
      <input
        type="text"
        name="school"
        value={childFormData.school || ""}
        onChange={handleChildFormChange}
      />

      <label htmlFor="gender">Gender</label>
      <input
        type="text"
        name="gender"
        value={childFormData.gender || ""}
        onChange={handleChildFormChange}
      />

      <label htmlFor="subitems">Country</label>
      <input
        type="text"
        name="subitems"
        value={childFormData.subitems || ""}
        onChange={handleChildFormChange}
      />

      <label htmlFor="birthdate">Birthdate</label>
      <input
        type="date"
        name="birthdate"
        value={childFormData.birthdate || ""}
        onChange={handleChildFormChange}
      />

      <label htmlFor="type">Type</label>
      <input
        type="text"
        name="type"
        value={childFormData.type || ""}
        onChange={handleChildFormChange}
      />

      <label htmlFor="schoolStart">School Start</label>
      <input
        type="date"
        name="schoolStart"
        value={childFormData.schoolStart || ""}
        onChange={handleChildFormChange}
      />

      <label htmlFor="sponsoredBy">Sponsored By</label>
      <input
        type="text"
        name="sponsoredBy"
        value={childFormData.sponsoredBy || ""}
        onChange={handleChildFormChange}
      />

      <label htmlFor="secondSponsor">Second Sponsor</label>
      <input
        type="text"
        name="secondSponsor"
        value={childFormData.secondSponsor || ""}
        onChange={handleChildFormChange}
      />

      <label htmlFor="class">Class</label>
      <input
        type="text"
        name="class"
        value={childFormData.class || ""}
        onChange={handleChildFormChange}
      />

      <label htmlFor="notes">Notes</label>
      <input
        type="text"
        name="notes"
        value={childFormData.notes || ""}
        onChange={handleChildFormChange}
      />

      <button>Submit Changes</button>
    </form>
  );

  const EditChildContainer = (
    <div className="editChildContainer">
      <h1>Edit {id}</h1>
      {EditChildForm}
    </div>
  );

  return EditChildContainer;
};

export default EditChild;
