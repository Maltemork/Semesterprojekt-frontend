import { useState } from "react";
import { Link } from "react-router-dom";
import "../../styling/AddSponsor.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import HandleAddSubmit from "../crud/AddSubmit";

const AddSponsor = () => {
  const [sponsorFormData, setSponsorFormData] = useState({
    sponsorEmail: "",
    reepayHandlePeriamma: "",
    reepayHandleDonations: "",
    foreningLetId: "",
    sponsorName: "",
    privatErhverv: "",
    cprCvr: "",
    paymentPlatform: "",
    sponsorPhone: "",
    notes: "",
    active: false,
  });

  const handleSponsorFormChange = (event) => {
    const { name, value, type, checked } = event.target;
    setSponsorFormData((previousData) => ({
      ...previousData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSponsorAddFormSubmit = (event) => {
    event.preventDefault();
    HandleAddSubmit(sponsorFormData, "sponsors");
  };

  const AddSponsorForm = (
    <form className="addSponsorForm" onSubmit={handleSponsorAddFormSubmit}>
      <div className="form-holder right-border">
        <label htmlFor="sponsorName">Full Name</label>
        <input
          type="text"
          name="sponsorName"
          onChange={handleSponsorFormChange}
          placeholder="Full name"
          required
        />

        <label htmlFor="sponsorEmail">E-mail</label>
        <input
          type="text"
          name="sponsorEmail"
          onChange={handleSponsorFormChange}
          placeholder="E-mail"
          required
        />
          <label htmlFor="privatErhverv">Private / Business</label>
          <select
            type="text"
            name="privatErhverv"
            onChange={handleSponsorFormChange}
            placeholder="Privat/Erhverv"
          >
            <option value="Privat" default>
              Private
            </option>
            <option value="Erhverv">Business</option>
          </select>

        <label htmlFor="cprCvr"> CPR / CVR</label>
        <input
          type="number"
          name="cprCvr"
          onChange={handleSponsorFormChange}
          placeholder="CPR / CVR"
          min="0"
          max="9999999999"
          required
        />

        <label htmlFor="sponsorPhone">Phone nr.</label>
        <input
          type="number"
          name="sponsorPhone"
          onChange={handleSponsorFormChange}
          min="0"
          max="9999999999"
          placeholder="Sponsor Phone"
        />

        <label htmlFor="notes">Optional notes</label>
        <textarea
          type="text"
          name="notes"
          onChange={handleSponsorFormChange}
          placeholder="Optional notes"
          id="notes"
        />
      </div>

      <div className="form-holder">
        <label htmlFor="reepayHandlePeriamma">Reepay Handle - Periamma</label>
        <input
          type="text"
          name="reepayHandlePeriamma"
          onChange={handleSponsorFormChange}
          placeholder="Reepay Handle - Periamma"
        />

        <label htmlFor="reepayHandleDonations">Reepay Handle - Donations</label>
        <input
          type="text"
          name="reepayHandleDonations"
          onChange={handleSponsorFormChange}
          placeholder="Reepay Handle - Donations"
        />

        <label htmlFor="foreningLetId">ForeningLetId</label>
        <input
          type="text"
          name="foreningLetId"
          onChange={handleSponsorFormChange}
          placeholder="ForeningLetID"
        />

        <label htmlFor="paymentPlatform">Payment Platform (Optional)</label>
        <input
          type="text"
          name="paymentPlatform"
          onChange={handleSponsorFormChange}
          placeholder="Main payment platform"
        />

          <div className="double-holder">
            <label htmlFor="active">Active</label>
            <input
              type="checkbox"
              name="active"
              onChange={handleSponsorFormChange}
            />
        </div>
      </div>

      <button className="add-sponsor-button">Add Sponsor</button>
    </form>
  );

  const AddSponsorContainer = (
    <div className="addSponsorContainer">
      <Link to="../add">
        <ArrowBackIcon id="back-arrow" />
      </Link>
      <h1>Add Sponsor</h1>
      {AddSponsorForm}
    </div>
  );

  return AddSponsorContainer;
};

export default AddSponsor;
