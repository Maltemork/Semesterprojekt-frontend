const endpoint = "https://periamma-projekt-app.azurewebsites.net";

// Get data based on 'type' (could be "artists", "albums" or "tracks").
async function getData(type) {
    // Get data from endpoint.
    const response = await fetch(`${endpoint}/${type}`);
    const data = await response.json();
    // Map data into an array.
    const dataArray = Object.keys(data).map(key => ({ id: key, ...data[key] }));
    // Return the mapped data.
    return dataArray;
}

async function getSponsor(sponsorID) {
    const response = await fetch(`${endpoint}/sponsors/${sponsorID}`);
    const data = await response.json();
    return data;
}

export {
    getData,
    getSponsor
};