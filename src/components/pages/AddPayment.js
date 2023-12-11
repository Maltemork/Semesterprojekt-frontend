import React, { useState } from "react";
import { Link } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "../../styling/AddPayment.css";

import HandleAddSubmit from "../crud/AddSubmit";

const AddPayment = () => {
  const [paymentFormData, setPaymentFormData] = useState({
    invoiceAmount: "",
    invoiceCreated: "",
    currency: "",
    invoiceHandle: "",
    customerHandle: "",
    subscriptionHandle: "",
  });

  const handlePaymentFormChange = (event) => {
    const { name, value } = event.target;
    setPaymentFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handlePaymentFormSubmit = (event) => {
    event.preventDefault();
    HandleAddSubmit(paymentFormData, "payments");
  };

  const AddPaymentForm = (
    <form className="addPaymentForm" onSubmit={handlePaymentFormSubmit}>
      <label htmlFor="invoiceAmount">Invoice Amount</label>
      <input
        type="text"
        name="invoiceAmount"
        onChange={handlePaymentFormChange}
      />

      <label htmlFor="invoiceCreated">Invoice Created</label>
      <input
        type="date"
        name="invoiceCreated"
        onChange={handlePaymentFormChange}
      />

      <label htmlFor="currency">Currency</label>
      <input type="text" name="currency" onChange={handlePaymentFormChange} />

      <label htmlFor="customerHandle">Customer Handle</label>
      <input
        type="text"
        name="customerHandle"
        onChange={handlePaymentFormChange}
      />

      <label htmlFor="subscriptionHandle">Subscription Handle</label>
      <input
        type="text"
        name="subscriptionHandle"
        onChange={handlePaymentFormChange}
      />

      <button className="add-payment-button">Add Payment</button>
    </form>
  );

  const AddPaymentContainer = (
    <div className="addPaymentContainer">
      <Link to="../add">
        <ArrowBackIcon id="back-arrow-payments"/>
      </Link>
      <h1>Add Payment</h1>
      {AddPaymentForm}
    </div>
  );

  return AddPaymentContainer;
};

export default AddPayment;
