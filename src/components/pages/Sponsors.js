import React from "react";
const Sponsors = () => {

  const Sponsors = [
    { Sub: 'Kenya', id: 'K1023', name: 'Kirsten Hansen', email: 'placeholder@periamma.org', Periamma: 'cust-0138', Donations: '', Active: true },
    { Sub: 'Kenya', id: 'K2386', name: 'Martin Jensen', email: 'Martin-j@havton', Periamma: 'cust-0821', Donations: '', Active: true },
    { Sub: 'Kenya', id: 'K6499', name: 'Adrianna Danielka', email: 'Ad.da@company.dk', Periamma: 'cust-1650', Donations: 'cust-6557', Active: true },
    { Sub: 'Kenya', id: 'K4085', name: 'Lucia Garofalo', email: 'lucia-garofalo@outlook.com', Periamma: '', Donations: 'cust-3789', Active: true },
    { Sub: 'Kenya', id: 'K0433', name: 'Sobieslaw Bulgarelli', email: 'sobieslaw.bulga@gmail.com', Periamma: 'cust-6070', Donations: '', Active: true },
    { Sub: 'Kenya', id: 'K4641', name: 'Khasan Nacimbene', email: 'doctorhasan@clinic.org', Periamma: 'cust-9080', Donations: '', Active: true },
    { Sub: 'Kenya', id: 'K6420', name: 'Markius Hoffsted', email: 'thebestbrewer@beer.dk', Periamma: 'cust-6139', Donations: 'cust-2067', Active: true },
    { Sub: 'Kenya', id: '4391', name: 'Anders Martinsen', email: 'am.am@anders.org', Periamma: 'cust-7682', Donations: 'cust-0387', Active: false },
    { Sub: 'Kenya', id: 'K7724', name: 'Peter Møller', email: 'peter.moller@stenhusene.dk', Periamma: 'cust-6854', Donations: '', Active: true },

  ];
  

  return (
    <div>
      <h1>Sponsors</h1>
      <table>
        <thead>
          <tr>
            <th>Sub</th>
            <th>id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Periamma</th>
            <th>Donations</th>
            <th>Active</th>
          </tr>
        </thead>
        <tbody>
          {Sponsors.map((sponsor) =>
            <tr key={sponsor.id}>
              <td>{sponsor.Sub}</td>
              <td>{sponsor.id}</td>
              <td>{sponsor.name}</td>
              <td>{sponsor.Email}</td>
              <td>{sponsor.Periamma}</td>
              <td>{sponsor.Donations}</td>
              <td>{sponsor.Active}</td>
            </tr>
          )}
        </tbody>
      </table>
    
    </div>
  );
 
};
export default Sponsors;

