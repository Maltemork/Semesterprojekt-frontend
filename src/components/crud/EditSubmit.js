const HandleEditSubmit = async (data, table, id) => {
  console.log(`${table} Form Input Data:`, data);

  fetch(
    `https://periamma-projekt-app.azurewebsites.net/${table}/${id}/update`,
    {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    }
  )
    .then((response) => {
      if (!response.ok) {
        console.log(`Response from PUT request to ${table} failed.`);
      }
      return response.json();
    })
    .then((responseData) => {
      console.log(`PUT request to ${table} successful`, responseData);
    })
    .catch((err) => {
      console.log(`PUT request to ${table} failed`, err);
    });
};

export default HandleEditSubmit;
