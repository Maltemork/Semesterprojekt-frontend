import "../../styling/AddSponsor.css";
import React from "react";

const AddSponsor = () => {
  const addSponsorForm = (
    <form className="addSponsorForm">
      <h1>Add Sponsor</h1>
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

  const attachedPayment = (
    <form>
      <label></label>
      <input></input>
      <label></label>
      <input></input>
      <label></label>
      <input></input>
      <label></label>
      <input></input>
      <label></label>
      <input></input>
    </form>
  );

  return addSponsorForm;
};

export default AddSponsor;
