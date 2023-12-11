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

async function getObject(table, objectId) {
    const response = await fetch(`${endpoint}/${table}/${objectId}`);
    const data = await response.json();
    return data;
}

async function deleteObject(table, objectId) {
    const response = await fetch(`${endpoint}/${table}/${objectId}/delete`, {
        method: "DELETE",
    });

    if (response.ok) {
        console.log(`Object ${objectId} has been deleted.`);
    }
}

export {
    getData,
    getObject,
    deleteObject
};