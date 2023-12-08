import { useNavigate, useParams } from "react-router-dom";
import HandleEditSubmit from "../crud/EditSubmit";
import { useEffect, useState } from "react";
import { getObject } from "../crud/getData";
import { ConstructSponsorObject } from "../Renderers/sponsorObject";
import "../../styling/EditSponsor.css";

const EditSponsor = () => {
  const { id } = useParams();
  console.log("Editing: " + id);

  const [sponsorFormData, setSponsorFormData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSponsor = async () => {
      try {
        const res = await getObject("sponsors", id);
        const sponsorData = ConstructSponsorObject(res[0]);

        setSponsorFormData(sponsorData);
        console.log(sponsorData);
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
    setSponsorFormData(sponsorFormData);
    HandleEditSubmit(sponsorFormData, "sponsors");
    navigate("/sponsors");
  };

  const EditSponsorForm = (
    <form className="editSponsorForm" onSubmit={handleSponsorEditFormSubmit}>
      <label htmlFor="fullName">Fulde Navn</label>
      <input
        type="text"
        name="sponsorFullName"
        defaultValue={sponsorFormData.name || ""}
      />

      <label htmlFor="email">E-mail</label>
      <input
        type="text"
        name="email"
        defaultValue={sponsorFormData.email || ""}
      />

      <label htmlFor="businessPrivate">Privat / Erhverv</label>
      <input
        type="text"
        name="businessPrivate"
        defaultValue={sponsorFormData.type || ""}
      />

      <label htmlFor="cprCvr"> CPR / CVR</label>
      <input
        type="text"
        name="cprCvr"
        defaultValue={sponsorFormData.cprCvr || ""}
      />

      <label htmlFor="sponsorPhone">Sponsor Telefon</label>
      <input
        type="text"
        name="sponsorPhone"
        defaultValue={sponsorFormData.phone || ""}
      />

      <label htmlFor="notes">Noter</label>
      <input
        type="text"
        name="notes"
        defaultValue={sponsorFormData.notes || ""}
      />

      <label htmlFor="reepayHandlePeriamma">Reepay Handle - Periamma</label>
      <input
        type="text"
        name="reepayHandlePeriamma"
        defaultValue={sponsorFormData.reepayHandlePeriamma || ""}
      />

      <label htmlFor="foreningLetId">ForeningLetId</label>
      <input
        type="text"
        name="foreningLetId"
        defaultValue={sponsorFormData.foreningLetId || ""}
      />

      <label htmlFor="reepayHandleDonations">Reepay Handle - Donations</label>
      <input
        type="text"
        name="reepayHandleDonations"
        defaultValue={sponsorFormData.reepayHandleDonations || ""}
      />

      <label htmlFor="paymentPlatform">Payment Platform (Optional)</label>
      <input
        type="text"
        name="paymentPlatform"
        defaultValue={sponsorFormData.paymentPlatform || ""}
      />

      <label htmlFor="active">Active</label>
      <input
        type="checkbox"
        name="active"
        checked={sponsorFormData.active || false}
        onChange={handleSponsorFormChange} //Tilføj dette til alle inputs (dog reloader siden for hvert indtastet karakter)
      />

      <button>Submit Changes</button>
    </form>
  );

  const EditSponsorContainer = (
    <div className="editSponsorContainer">
      <h1>Edit {id}</h1>
      {EditSponsorForm}
    </div>
  );
  return EditSponsorContainer;
};

export default EditSponsor;
