// Essential
import React, { useEffect } from 'react';
import { getData } from "../crud/getData";
// Specific
import { SponsorRenderer } from "../Renderers/sponsorRenderer.js";
import { ConstructSponsorObject } from "../Renderers/sponsorObject";
// Styling & CSS
import GroupIcon from "@mui/icons-material/Group";
import Caret from "../icons/Caret.jsx"
import "../../styling/Table.css"



// Sponsors object
const SponsorsPage = 
  () => {
    const [sponsorsArray, setSponsorsArray] = React.useState([]);

    useEffect(() => {
      const buildSponsorsList = async () => {
        try {
          const data = await getData("sponsors");
          const constructedSponsors = data.map(sponsor => ConstructSponsorObject(sponsor));
          setSponsorsArray(constructedSponsors);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }

      buildSponsorsList();
    }, []);
    
    const [search, setSearch] = React.useState('');
    const [sort, setSort] = React.useState({ keyToSort: "ID", direction: "asc"});

    const headers = [
      {
        id: 1,
        KEY: "customerId",
        LABEL: "ID"
      },
      
      {
        id: 2,
        KEY: "name",
        LABEL: "Name"
      },
      {
        id: 3,
        KEY: "subitems",
        LABEL: "Subitems"
      },
      {
        id: 4,
        KEY: "email",
        LABEL: "E-mail"
      },
      {
        id: 5,
        KEY: "phone",
        LABEL: "Phone"
      },
      {
        id: 6,
        KEY: "type",
        LABEL: "Type"
      },
      {
        id: 7,
        KEY: "reepayHandleDonations",
        LABEL: "RP Handle Donations"
      },
      {
        id: 8,
        KEY: "reepayHandlePeriamma",
        LABEL: "RP Handle Periamma"
      },
      {
        id: 9,
        KEY: "foreningLetID",
        LABEL: "ForeningLetID"
      },
      {
        id: 10,
        KEY: "active",
        LABEL: "Active"
      }
    ];

    function HandleHeaderClick(header) {
      console.log(header.KEY);
      setSort({
        keyToSort: header.KEY,
        direction: 
          header.KEY === sort.keyToSort
           ? sort.direction === "asc" 
              ? "desc" 
              : "asc"
          :  "desc",
      });
    }

    function getSortedArray(arrayToSort) {
      if (sort.direction === "asc") {
        return arrayToSort.sort((a, b) => (a[sort.keyToSort] > b[sort.keyToSort] ? 1 : -1));
      }
      return arrayToSort.sort((a, b) => (a[sort.keyToSort] > b[sort.keyToSort] ? -1 : 1));
    }
  
    const searchInput = (item) => {
      return search.toLowerCase() === "" ? item : 
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.email.toLowerCase().includes(search.toLowerCase()) ||
      item.customerId.toLowerCase().includes(search.toLowerCase()) ||
      item.subitems.toLowerCase().includes(search.toLowerCase()) ||
      item.phone.includes(search)
    };

    const handleSearch = (e) => {
      setSearch(e.target.value);
    };
    
    return (
            <>
              
              <div id="table-container">
                
                <div id="functions-container">
                  <div id="table-title">
                    <GroupIcon />
                    <h1> Sponsors</h1>
                  </div>
                  <div className="search-sort-container">
                    <input placeholder="Search" id="search" type="text" onChange={handleSearch}></input>
                  </div>
                </div>
                <div id="table-body-container">
                  <table id="table">
                    <thead id="table-head">
                      <tr>
                      {
                        headers.map((header, index) => (
                          <th key={index} onClick={() => HandleHeaderClick(header)}>
                            <span className="text">
                              {header.LABEL}
                              {header.KEY === sort.keyToSort && (
                              <Caret direction={sort.keyToSort === header.KEY ? sort.direction : "asc" }/>
                            ) }  
                            </span>
                          </th>
                        ))
                      }
                      </tr>
                    </thead>
                    <tbody id="table-body">
                      { getSortedArray(sponsorsArray).filter(searchInput).map(sponsor => (
                      <SponsorRenderer key={sponsor.id} sponsor={sponsor}/>
                    )) }
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          );
        };

  export default SponsorsPage;