import "../../styling/AddSponsor.css";
import React from "react";

const AddSponsor = () => {
  const addSponsorForm = (
    <form className="addSponsorForm">
      <label htmlFor="fullName">Fulde Navn</label>
      <input type="text" name="fullName"></input>
      <label htmlFor="email">E-mail</label>
      <input type="text" name="email"></input>
      <label htmlFor="businessPrivate">Privat / Erhverv</label>
      <input type="text" name="businessPrivate"></input>
      <label htmlFor="cprCvr"> CPR / CVR</label>
      <input type="text" name="cprCvr"></input>
      <label htmlFor="sponsorPhone">Sponsor Telefon</label>
      <input type="text" name="sponsorPhone"></input>
      <label htmlFor="notes">Noter</label>
      <input type="text" name="notes"></input>
      <button>Add Sponsor</button>
    </form>
  );

  const attachedPaymentForm = (
    <form className="attachedPaymentForm">
      <label htmlFor="reepayHandlePeriamma">Reepay Handle - Periamma</label>
      <input type="text" name="reepayHandlePeriamma"></input>
      <label htmlFor="foreningLetId">ForeningLetId</label>
      <input type="text" name="foreningLetId"></input>
      <label htmlFor="reepayHandleDonations">Reepay Handle - Donations</label>
      <input type="text" name="reepayHandleDonations"></input>
      <label htmlFor="paymentPlatform">Payment Platform</label>
      <input type="text" name="paymentPlatform"></input>
      <label htmlFor="active">Active</label>
      <input type="checkbox" name="active"></input>
      <button>Attach Payment</button>
    </form>
  );
  const addSponsorPayment = (
    <div>
      <h1>Add Sponsor</h1>
      <div className="addSponsorPayment">
        {addSponsorForm}
        {attachedPaymentForm}
      </div>
    </div>
  );

  return addSponsorPayment;
};

export default AddSponsor;
