import "../../styling/AddSponsor.css";

const AddSponsor = (onSubmit) => {
  const handleFormsSubmit = (data) => {
    onSubmit(data);
  };

  const AddSponsorForm = (
    <form className="addSponsorForm" onSubmit={handleFormsSubmit}>
      <label htmlFor="fullName">Fulde Navn</label>
      <input type="text" name="sponsorFullName" />

      <label htmlFor="email">E-mail</label>
      <input type="text" name="email" />

      <label htmlFor="businessPrivate">Privat / Erhverv</label>
      <input type="text" name="businessPrivate" />

      <label htmlFor="cprCvr"> CPR / CVR</label>
      <input type="text" name="cprCvr" />

      <label htmlFor="sponsorPhone">Sponsor Telefon</label>
      <input type="text" name="sponsorPhone" />

      <label htmlFor="notes">Noter</label>
      <input type="text" name="notes" />

      <label htmlFor="reepayHandlePeriamma">Reepay Handle - Periamma</label>
      <input type="text" name="reepayHandlePeriamma" />

      <label htmlFor="foreningLetId">ForeningLetId</label>
      <input type="text" name="foreningLetId" />

      <label htmlFor="reepayHandleDonations">Reepay Handle - Donations</label>
      <input type="text" name="reepayHandleDonations" />

      <label htmlFor="paymentPlatform">Payment Platform (Optional)</label>
      <input type="text" name="paymentPlatform" />

      <label htmlFor="active">Active</label>
      <input type="checkbox" name="active" />

      <button>Add Sponsor</button>
    </form>
  );

  const AddSponsorPayment = (
    <div className="addSponsorContainer">
      <h1>Add Sponsor</h1>
      <div className="addSponsorPayment">{AddSponsorForm}</div>
    </div>
  );

  return AddSponsorPayment;
};

export default AddSponsor;
