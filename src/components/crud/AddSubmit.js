const HandleAddSubmit = (data, table) => {
  console.log(`${table} Form Input Data:`, data);

  fetch(`https://periamma-projekt-app.azurewebsites.net/${table}/add`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        console.log(`Response from POST request to ${table} failed.`);
      }
      return response.json();
    })
    .then((responseData) => {
      console.log(`POST request to ${table} successful`, responseData);
    })
    .catch((err) => {
      console.log(`POST request to ${table} failed`, err);
    });
};

export default HandleAddSubmit;
