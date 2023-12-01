import { getData } from "../crud/getData";
import "../../styling/sponsors.css";
import React from 'react';
import { constructSponsorObject } from "../Renderers/sponsorObject";
import GroupIcon from "@mui/icons-material/Group";

let sponsorsArray = [];
await buildSponsorsList();

const sponsorRenderer = (sponsor) => {
  return <tr key={sponsor.id} className="sponsor-list-item">
           <td>{sponsor.customerId}</td>
           <td>{sponsor.name}</td>
           <td>{sponsor.email}</td>
           <td>{sponsor.phone}</td>
           <td>{sponsor.type}</td>
           <td>{sponsor.reepayHandleDonations}</td>
           <td>{sponsor.reepayHandlePeriamma}</td>
           <td>{sponsor.foreningLetID}</td>
           <td>{sponsor.active}</td>
         </tr>;
         };

async function buildSponsorsList() {
  const data = await getData("sponsors");
  sponsorsArray = data.map((sponsordata) => constructSponsorObject(sponsordata));
}

const Sponsors = () => {
  return (
    <>
      <div id="table-title">
        <GroupIcon />
        <h1> Sponsors</h1>
      </div>
      <div id="sponsors-container">
        <div id="functions-container">
          <div className="search-sort-container">
            <select id="sponsor-sort">
              <option>ID</option>
              <option>Name</option>
              <option>E-mail</option>
              <option>Type</option>
              <option>Active</option>
            </select>
            <input placeholder="Search" id="sponsor-search" ></input>
          </div>
        </div>
        <table id="sponsors-table">
          <thead id="sponsors-table-head">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Type</th>
              <th>Reepay Handle Donations</th>
              <th>Reepay Handle Periamma</th>
              <th>foreningLetID</th>
              <th>Active</th>
            </tr>
          </thead>
          <tbody id="sponsors-table-body">
            { sponsorsArray.map(sponsorRenderer) }
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Sponsors;