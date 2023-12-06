const HandlePaymentFormData = (data) => {
  console.log("Payment Form Input Data:", data);

  fetch("https://periamma-projekt-app.azurewebsites.net/payments/add", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        console.log("Response from POST request to payments failed.");
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

export default HandlePaymentFormData;
