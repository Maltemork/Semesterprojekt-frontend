// Essential
import React, { useEffect } from "react";
import { getData } from "../crud/getData";
// Specific
import PaymentRenderer from "../Renderers/paymentRenderer.js";
import { ConstructPaymentObject } from "../Renderers/paymentObject";
// Styling & CSS
import PaymentIcon from "@mui/icons-material/Payment";
import Caret from "../icons/Caret.jsx";
import "../../styling/Table.css";

const PaymentsPage = () => {
  const [paymentsArray, setPaymentsArray] = React.useState([]);

  useEffect(() => {
    const buildPaymentsList = async () => {
      try {
        const data = await getData("payments");
        const constructedPayments = data.map((payment) =>
          ConstructPaymentObject(payment)
        );
        setPaymentsArray(constructedPayments);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    buildPaymentsList();
  }, []);

  const [search, setSearch] = React.useState("");
  const [sort, setSort] = React.useState({
    keyToSort: "created",
    direction: "desc",
  });

  const headers = [
    {
      id: 1,
      KEY: "id",
      LABEL: "ID",
    },
    {
      id: 2,
      KEY: "customer",
      LABEL: "Customer",
    },
    {
      id: 3,
      KEY: "amount",
      LABEL: "Amount",
    },
    {
      id: 4,
      KEY: "currency",
      LABEL: "Currency",
    },
    {
      id: 5,
      KEY: "state",
      LABEL: "State",
    },
    {
      id: 6,
      KEY: "invoiceNumber",
      LABEL: "Invoice Number",
    },
    {
      id: 7,
      KEY: "customerEmail",
      LABEL: "Customer Email",
    },
    {
      id: 8,
      KEY: "subscription",
      LABEL: "Subscription",
    },
    {
      id: 9,
      KEY: "created",
      LABEL: "Created",
    },
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
          : "desc",
    });
  }

  function getSortedArray(arrayToSort) {
    if (sort.direction === "asc") {
      return arrayToSort.sort((a, b) =>
        a[sort.keyToSort] > b[sort.keyToSort] ? 1 : -1
      );
    }
    return arrayToSort.sort((a, b) =>
      a[sort.keyToSort] > b[sort.keyToSort] ? -1 : 1
    );
  }

  const searchInput = (item) => {
    return search.toLowerCase() === ""
      ? item
      : item.id.toLowerCase().includes(search.toLowerCase());
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <div id="table-container">
        <div id="functions-container">
          <div id="table-title">
            <PaymentIcon />
            <h1> Payments</h1>
          </div>
          <div className="search-sort-container">
            <input
              placeholder="Search"
              id="search"
              type="text"
              onChange={handleSearch}
            ></input>
          </div>
        </div>
        <table id="table">
          <thead id="table-head">
            <tr>
              {headers.map((header, index) => (
                <th key={index} onClick={() => HandleHeaderClick(header)}>
                  <span className="text">{header.LABEL}</span>

                  {header.KEY === sort.keyToSort && (
                    <Caret
                      direction={
                        sort.keyToSort === header.KEY ? sort.direction : "asc"
                      }
                    />
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody id="table-body">
            {getSortedArray(paymentsArray)
              .filter(searchInput)
              .map((payment) => (
                <PaymentRenderer key={payment.id} payment={payment} />
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default PaymentsPage;
