import { useEffect, useState } from "react";

const endpoint = "https://periamma-projekt-app.azurewebsites.net";

// Get data based on 'type' (could be "sponsors", "children" or "payments").
async function getData(type) {
  // Get data from endpoint.
  const response = await fetch(`${endpoint}/${type}`);
  const data = await response.json();
  // Map data into an array.
  const dataArray = Object.keys(data).map((key) => ({ id: key, ...data[key] }));
  // Return the mapped data.
  return dataArray;
}

// Get a specific object
async function getObject(table, objectId) {
  const response = await fetch(`${endpoint}/${table}/${objectId}`);
  const data = await response.json();
  return data;
}

// Delete a specific object
async function deleteObject(table, objectId) {
  await fetch(`${endpoint}/${table}/${objectId}/delete`, {
    method: "DELETE",
  });
}

async function getSponsorPayments(sponsorId) {
  const response = await fetch(`${endpoint}/sponsors/${sponsorId}/payments`);
  const data = await response.json();
  return data;
}

function GetChildSponsorsIds(childNo) {
  const [childSponsors, setChildSponsors] = useState({});

  useEffect(() => {
    const fetchChildSponsors = async () => {
      try {
        const response = await fetch(
          `${endpoint}/children/${childNo}/sponsors`
        );
        const data = await response.json();
        setChildSponsors(data);
        console.log(`SponsorIds for ${childNo}:`, data);
      } catch (error) {
        console.error("Couldn't fetch sponsorIds for: " + childNo, error);
      }
    };

    fetchChildSponsors();
  }, [childNo]);
  return childSponsors;
}

export {
  getData,
  getObject,
  deleteObject,
  getSponsorPayments,
  GetChildSponsorsIds,
};
