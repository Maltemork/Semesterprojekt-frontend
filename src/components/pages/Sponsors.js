const Sponsors = () => {

  const sponsorDetails = {
    name: 'Sponsor Name',
    email: 'sponsor@email',

  };

  return (
    <div>
      <h1>Sponsors</h1>

    <div>
    <h2>Sponsor Details</h2>
    <p>Name: {sponsorDetails.name}</p>
    <p>Email: {sponsorDetails.email}</p>
      </div>
      </div>
  )
 
};
export default Sponsors;

