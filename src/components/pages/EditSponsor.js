import { useParams, useNavigate, Link } from "react-router-dom";
import HandleEditSubmit from "../crud/EditSubmit";
import { useEffect, useState } from "react";
import { getObject } from "../crud/getData";
import "../../styling/EditSponsor.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const EditSponsor = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  console.log("Editing: " + id);

  const [sponsorFormData, setSponsorFormData] = useState({});
  // const navigate = useNavigate();

  useEffect(() => {
    const fetchSponsor = async () => {
      try {
        const sponsorData = await getObject("sponsors", id);
        setSponsorFormData(sponsorData[0]);
        console.log("Sponsor Data: ", sponsorData[0]);
      } catch (error) {
        console.error("Couldn't fetch sponsor data for: " + id, error);
      }
    };

    fetchSponsor();
  }, [id]);

  const handleSponsorFormChange = (event) => {
    const { name, value, type, checked } = event.target;
    setSponsorFormData((previousData) => ({
      ...previousData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSponsorEditFormSubmit = (event) => {
    event.preventDefault();
    HandleEditSubmit(sponsorFormData, "sponsors", id);
    setTimeout(() => {
      navigate("/sponsors/" + sponsorFormData.sponsorId);
    }, "500");
  };

  const EditSponsorForm = (
    <form className="editSponsorForm" onSubmit={handleSponsorEditFormSubmit}>
      <label htmlFor="sponsorName">Full name:</label>
      <input
        type="text"
        name="sponsorName"
        value={sponsorFormData.sponsorName || ""}
        onChange={handleSponsorFormChange}
      />

      <label htmlFor="sponsorEmail">E-mail</label>
      <input
        type="text"
        name="sponsorEmail"
        value={sponsorFormData.sponsorEmail || ""}
        onChange={handleSponsorFormChange}
      />

      <label htmlFor="privatErhverv">Privat / Erhverv</label>
      <input
        type="text"
        name="privatErhverv"
        value={sponsorFormData.privatErhverv || ""}
        onChange={handleSponsorFormChange}
      />

      <label htmlFor="cprCvr"> CPR / CVR</label>
      <input
        type="text"
        name="cprCvr"
        value={sponsorFormData.cprCvr || ""}
        onChange={handleSponsorFormChange}
      />

      <label htmlFor="sponsorPhone">Sponsor phone:</label>
      <input
        type="text"
        name="sponsorPhone"
        value={sponsorFormData.sponsorPhone || ""}
        onChange={handleSponsorFormChange}
      />

      <label htmlFor="notes">Notes:</label>
      <input
        type="text"
        name="notes"
        value={sponsorFormData.notes || ""}
        onChange={handleSponsorFormChange}
      />

      <label htmlFor="reepayHandlePeriamma">Reepay Handle - Periamma:</label>
      <input
        type="text"
        name="reepayHandlePeriamma"
        value={sponsorFormData.reepayHandlePeriamma || ""}
        onChange={handleSponsorFormChange}
      />

      <label htmlFor="foreningLetId">ForeningLetId:</label>
      <input
        type="text"
        name="foreningLetId"
        value={sponsorFormData.foreningLetId || ""}
        onChange={handleSponsorFormChange}
      />

      <label htmlFor="reepayHandleDonations">Reepay Handle - Donations:</label>
      <input
        type="text"
        name="reepayHandleDonations"
        value={sponsorFormData.reepayHandleDonations || ""}
        onChange={handleSponsorFormChange}
      />

      <label htmlFor="paymentPlatform">Payment Platform (Optional):</label>
      <input
        type="text"
        name="paymentPlatform"
        value={sponsorFormData.paymentPlatform || ""}
        onChange={handleSponsorFormChange}
      />

      <div className="double-holder">
        <label htmlFor="active">Active:</label>
        <input
          type="checkbox"
          name="active"
          onChange={handleSponsorFormChange}
        />
      </div>

      <button>Submit Changes</button>
    </form>
  );

  const EditSponsorContainer = (
    <div className="editSponsorContainer">
      <Link to={"../sponsors/" + sponsorFormData.sponsorId}>
        <ArrowBackIcon id="back-arrow-edit-sponsor" />
      </Link>
      <h1>Edit {id}</h1>
      {EditSponsorForm}
    </div>
  );
  return EditSponsorContainer;
};

export default EditSponsor;
