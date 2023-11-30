import { getData } from "../crud/getData";
import React from 'react';
import * as sponsor from '../Renderers/sponsorObject.js';

let sponsorsArray = [];
buildSponsorsList();


async function buildSponsorsList() {
  const data = await getData("sponsors");
  sponsorsArray = data.map(sponsor.constructSponsorObject);
  console.log(sponsorsArray);
}

const Sponsors = () => {
  return (
    <div id="sponsors-table">
      <table>
        <thead id="sponsors-table-head">
          <tr>
            <th id="sort-tracks-title">Title</th>
            <th id="sort-tracks-artist">Artist</th>
            <th id="sort-tracks-album">Album</th>
            <th id="sort-tracks-duration">Duration</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    </div>
  );
};

export default Sponsors;