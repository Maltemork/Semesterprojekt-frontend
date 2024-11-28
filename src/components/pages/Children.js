// Essential
import React, { useEffect } from 'react';
import { getData } from "../crud/getData";
// Specific
import ChildRenderer from "../Renderers/childRenderer.js";
import { ConstructChildObject } from "../Renderers/childObject";
// Styling & CSS
import BedroomBabyIcon from '@mui/icons-material/BedroomBaby';
import Caret from "../icons/Caret.jsx"
import "../../styling/Table.css"

// Childrens object
const ChildrensPage = 
  () => {
    const [childrensArray, setChildrensArray] = React.useState([]);

    useEffect(() => {
      const buildChildrensList = async () => {
        try {
          const data = await getData("children");
          const constructedChildren = data.map(child => ConstructChildObject(child));
          setChildrensArray(constructedChildren);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }

      buildChildrensList();
    }, []);

    const [search, setSearch] = React.useState('');
    const [sort, setSort] = React.useState({ keyToSort: "ID", direction: "asc"});

    const headers = [
      {
        id: 1,
        KEY: "childNo",
        LABEL: "ChildNo"
      },
      
      {
        id: 2,
        KEY: "name",
        LABEL: "Name"
      },
      {
        id: 3,
        KEY: "subitems",
        LABEL: "Country"
      },
      {
        id: 4,
        KEY: "gender",
        LABEL: "Gender"
      },
      {
        id: 5,
        KEY: "birthdate",
        LABEL: "Age"
      },
      {
        id: 6,
        KEY: "birthdate",
        LABEL: "Birthdate"
      },
      {
        id: 7,
        KEY: "type",
        LABEL: "Type"
      },
      {
        id: 8,
        KEY: "school",
        LABEL: "School"
      },
      {
        id: 9,
        KEY: "schoolStart",
        LABEL: "School Start"
      },
      {
        id: 10,
        KEY: "class",
        LABEL: "Class"
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
        item.childNo.toLowerCase().includes(search.toLowerCase()) ||
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.school.toLowerCase().includes(search.toLowerCase()) ||
        item.subitems.toLowerCase().includes(search.toLowerCase()) 
      };

    const handleSearch = (e) => {
      setSearch(e.target.value);
    };


    return (
            <>
              <div id="table-container">
                <div id="functions-container">
                  <div id="table-title">
                    <BedroomBabyIcon />
                    <h1> Children</h1>
                  </div>
                  <div className="search-sort-container">
                    <input placeholder="Search" id="search" type="text" onChange={handleSearch}></input>
                  </div>
                </div>
                <table id="table">
                  <thead id="table-head">
                    <tr>
                     {
                      headers.map((header, index) => (
                        <th key={index} onClick={() => HandleHeaderClick(header)}>
                          <span className="text">{header.LABEL}</span>

                          { header.KEY === sort.keyToSort && (
                            <Caret direction={sort.keyToSort === header.KEY ? sort.direction : "asc" }/>
                          )}

                        </th>
                      ))
                     }
                    </tr>
                  </thead>
                  <tbody id="table-body">
                    { getSortedArray(childrensArray).filter(searchInput).map(child => (
                      <ChildRenderer key={child.id} child={child}/>
                    )) }
                  </tbody>
                </table>
              </div>
            </>
          );
        };

export default ChildrensPage;