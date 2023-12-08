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

  const handleSponsorAddFormSubmit = (event) => {
    event.preventDefault();
    HandleAddSubmit(sponsorFormData, "sponsors");
  };

  const AddSponsorForm = (
    <form className="addSponsorForm" onSubmit={handleSponsorAddFormSubmit}>
      <label htmlFor="fullName">Fulde Navn</label>
      <input
        type="text"
        name="sponsorFullName"
        onChange={handleSponsorFormChange}
      />

      <label htmlFor="email">E-mail</label>
      <input type="text" name="email" onChange={handleSponsorFormChange} />

      <label htmlFor="businessPrivate">Privat / Erhverv</label>
      <input
        type="text"
        name="businessPrivate"
        onChange={handleSponsorFormChange}
      />

      <label htmlFor="cprCvr"> CPR / CVR</label>
      <input type="text" name="cprCvr" onChange={handleSponsorFormChange} />

      <label htmlFor="sponsorPhone">Sponsor Telefon</label>
      <input
        type="text"
        name="sponsorPhone"
        onChange={handleSponsorFormChange}
      />

      <label htmlFor="notes">Noter</label>
      <input type="text" name="notes" onChange={handleSponsorFormChange} />

      <label htmlFor="reepayHandlePeriamma">Reepay Handle - Periamma</label>
      <input
        type="text"
        name="reepayHandlePeriamma"
        onChange={handleSponsorFormChange}
      />

      <label htmlFor="foreningLetId">ForeningLetId</label>
      <input
        type="text"
        name="foreningLetId"
        onChange={handleSponsorFormChange}
      />

      <label htmlFor="reepayHandleDonations">Reepay Handle - Donations</label>
      <input
        type="text"
        name="reepayHandleDonations"
        onChange={handleSponsorFormChange}
      />

      <label htmlFor="paymentPlatform">Payment Platform (Optional)</label>
      <input
        type="text"
        name="paymentPlatform"
        onChange={handleSponsorFormChange}
      />

      <label htmlFor="active">Active</label>
      <input type="checkbox" name="active" onChange={handleSponsorFormChange} />

      <button>Add Sponsor</button>
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
