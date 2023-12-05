// Essential
import React from 'react';
import { getData } from "../crud/getData";
// Specific
import { PaymentRenderer } from "../Renderers/paymentRenderer.js";
import * as payment from "../Renderers/paymentObject";
// Styling & CSS
import PublicIcon from "@mui/icons-material/Public";
import Caret from "../icons/Caret.jsx"
import "../../styling/Table.css"

// Array
let paymentsArray = [];
await buildPaymentsList();

// Build array
async function buildPaymentsList() {
  const data = await getData("payments");
  paymentsArray = data.map(payment.ConstructPaymentObject);
  console.log(paymentsArray);
}

// Childrens object
const PaymentsPage = 
  () => {
    const [search, setSearch] = React.useState('');
    const [sort, setSort] = React.useState({ keyToSort: "ID", direction: "asc"});

    const headers = [
      {
        id: 1,
        KEY: "id",
        LABEL: "ID"
      },
      {
        id: 2,
        KEY: "customer",
        LABEL: "Customer"
      },
      {
        id: 3,
        KEY: "amount",
        LABEL: "Amount"
      },
      {
        id: 4,
        KEY: "currency",
        LABEL: "Sponsor"
      },
      {
        id: 5,
        KEY: "state",
        LABEL: "State"
      },
      {
        id: 6,
        KEY: "invoiceNumber",
        LABEL: "Invoice Number"
      },
      {
        id: 7,
        KEY: "subscription",
        LABEL: "Subscription"
      },
      {
        id: 8,
        KEY: "created",
        LABEL: "Date"
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
      item.type.toLowerCase().includes(search.toLowerCase()) ||
      item.subitems.toLowerCase().includes(search.toLowerCase())
    };

    const handleSearch = (e) => {
      setSearch(e.target.value);
    };


    return (
            <>
              <div id="table-title">
                <PublicIcon />
                <h1> Children</h1>
              </div>
              <div id="table-container">
                <div id="functions-container">
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
                    { getSortedArray(paymentsArray).filter(searchInput).map(PaymentRenderer.render) }
                  </tbody>
                </table>
              </div>
            </>
          );
        };


export default PaymentsPage;
