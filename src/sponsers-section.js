async function buildSponsersList() {
  const sponsersData = await getData("sponsers");
  const sponsersArray = sponsersData.map((sponsers) => constructSponsersObject(sponsers));
  return sponsersArray;
}

module.exports = {
  buildSponsersList,
  // Other functions related to payments if needed
};
