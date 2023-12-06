const HandleChildFormData = (data) => {
  console.log("Child Form Input Data:", data);

  fetch("https://periamma-projekt-app.azurewebsites.net/children/add", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        console.log("Response from POST request to children failed.");
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

export default HandleChildFormData;
