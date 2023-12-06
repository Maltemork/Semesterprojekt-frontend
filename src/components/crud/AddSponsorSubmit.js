const HandleSponsorFormData = (data) => {
  console.log("Sponsor Form Input Data:", data);

  fetch("https://periamma-projekt-app.azurewebsites.net/sponsors/add", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        console.log("Response from POST request to sponsors failed.");
      }
      return response.json();
    })
    .then((responseData) => {
      console.log("POST request successful", responseData);
    })
    .catch((err) => {
      console.log("POST request failed", err);
    });
};

export default HandleSponsorFormData;
