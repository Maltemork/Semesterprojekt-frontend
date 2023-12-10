import { useState } from "react";
import "../../styling/AddSponsor.css";
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

  const handleFormSubmit = (event) => {
    event.preventDefault();
    HandleAddSubmit(sponsorFormData, "sponsors");
  };

  const AddSponsorForm = (
    <form className="addSponsorForm" onSubmit={handleFormSubmit}>
      <div className="form-holder">
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          name="sponsorFullName"
          onChange={handleSponsorFormChange}
          placeholder="Full name"
          required
        />

        <label htmlFor="email">E-mail</label>
        <input type="text" name="email" onChange={handleSponsorFormChange} placeholder="E-mail" required/>

        <label htmlFor="businessPrivate">Privat / Erhverv</label>
        <input
          type="text"
          name="businessPrivate"
          onChange={handleSponsorFormChange}
          placeholder="Privat/Erhverv"
        />

        <label htmlFor="cprCvr"> CPR / CVR</label>
        <input type="text" name="cprCvr" onChange={handleSponsorFormChange} placeholder="CPR / CVR" required/>

        <label htmlFor="sponsorPhone">Phone nr.</label>
        <input
          type="text"
          name="sponsorPhone"
          onChange={handleSponsorFormChange}
          placeholder="Sponsor Phone"
        />

        <label htmlFor="notes">Optional notes</label>
        <textarea type="text" name="notes" onChange={handleSponsorFormChange} placeholder="Optional notes" id="notes"/>
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
          name="foreningLetID"
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
          <input type="checkbox" name="active" onChange={handleSponsorFormChange} />
        </div>
      </div>

      <button className="add-sponsor-button">Add Sponsor</button>
    </form>
  );

  const AddSponsorContainer = (
    <div className="addSponsorContainer">
      <h1>Add Sponsor</h1>
      {AddSponsorForm}
    </div>
  );

  return AddSponsorContainer;
};

export default AddSponsor;