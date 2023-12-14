const HandleEditSubmit = async (data, table, id) => {
  console.log(`${table} Form Input Data:`, data);

  const endpoint = "https://periamma-projekt-app.azurewebsites.net";

  if (table === "children") {
    if (data.sponsoredBy) {
      updateChildSponsor(data.sponsoredBy);
    }

    if (data.secondSponsor) {
      updateChildSponsor(data.secondSponsor);
    }
  }

  function updateChildSponsor(sponsorId) {
    const sponsorBody = {
      sponsoredBy: sponsorId,
    };
    fetch(`${endpoint}/${table}/${data.childNo}/addSponsor`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(sponsorBody),
    })
      .then((res) => {
        if (!res.ok) {
          console.log(
            `Response from POST to children_sponsors (childNo, sponsorId)(${data.childNo}, ${sponsorId}) failed`,
            res
          );
        }
        return res.json();
      })
      .then(() => {
        console.log("POST Request to children_sponsors successful");
      })
      .catch((err) => {
        console.log("POST Request to children_sponsors failed", err);
      });
  }

  fetch(`${endpoint}/${table}/${id}/update`, {
    method: "PUT",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((res) => {
      if (!res.ok) {
        console.log(`Response from PUT request to ${table} failed.`);
      }
      return res.json();
    })
    .then((responseData) => {
      console.log(`PUT request to ${table} successful`, responseData);
    })
    .catch((err) => {
      console.log(`PUT request to ${table} failed`, err);
    });
};

export default HandleEditSubmit;
