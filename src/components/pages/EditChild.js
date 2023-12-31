import { useEffect, useState } from "react";
import "../../styling/EditChild.css";
import HandleEditSubmit from "../crud/EditSubmit";
import { GetChildSponsorsIds, getObject } from "../crud/getData";
import { useParams, useNavigate, Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const EditChild = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const [childFormData, setChildFormData] = useState({});

  const childSponsors = GetChildSponsorsIds(id);
  const sponsor1 = childSponsors[0]?.sponsorId;
  const sponsor2 = childSponsors[1]?.sponsorId;

  useEffect(() => {
    const fetchChild = async () => {
      try {
        const childData = await getObject("children", id);
        let updatedChildData = { ...childData[0] };
        for (const key in updatedChildData) {
          if (
            typeof updatedChildData[key] === "string" &&
            /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/.test(
              updatedChildData[key]
            )
          ) {
            updatedChildData[key] = new Date(updatedChildData[key])
              .toISOString()
              .split("T")[0];
          }
        }

        setChildFormData({
          ...updatedChildData,
        });
        console.log("Child Data: ", childData[0]);
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
    setTimeout(() => {
      navigate("/children/" + childFormData.childNo);
    }, "500");
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
      <select
        type="text"
        name="gender"
        value={childFormData.gender || "none"}
        onChange={handleChildFormChange}
        required
      >
        <option default>Pick a gender</option>
        <option value="female">Female</option>
        <option value="male">Male</option>
      </select>

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
        defaultValue={sponsor1 || ""}
        onChange={handleChildFormChange}
      />

      <label htmlFor="secondSponsor">Second Sponsor</label>
      <input
        type="text"
        name="secondSponsor"
        defaultValue={sponsor2 || ""}
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
      <Link to={"/children/" + childFormData.childNo}>
        <ArrowBackIcon id="back-arrow-edit-child" />
      </Link>
      <h1>Edit {id}</h1>
      {EditChildForm}
    </div>
  );

  return EditChildContainer;
};

export default EditChild;
