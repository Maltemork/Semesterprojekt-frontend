import React from "react";
import "../../styling/AddPayment.css";

const AddPayment = (onSubmit) => {
  const handleFormSubmit = (data) => {
    onSubmit(data);
  };
  const AddPaymentForm = (
    <form className="addPaymentForm" onSubmit={handleFormSubmit}>
      <label htmlFor="invoiceAmount">Invoice Amount</label>
      <input type="text" name="invoiceAmount" />

      <label htmlFor="invoiceDate">Invoice Date</label>
      <input type="text" name="invoiceDate" />

      <label htmlFor="currency">Currency</label>
      <input type="text" name="currency" />

      <label htmlFor="invoiceHandle">Invoice Handle</label>
      <input type="text" name="invoiceHandle" />

      <label htmlFor="customerHandle">Customer Handle</label>
      <input type="text" name="customerHandle" />

      <label htmlFor="subscriptionHandle">Subscription Handle</label>
      <input type="text" name="subscriptionHandle" />

      <button>Add Payment</button>
    </form>
  );

  const AddPaymentContainer = (
    <div className="addPaymentContainer">
      <h1>Add Payment</h1>
      {AddPaymentForm}
    </div>
  );

  return AddPaymentContainer;
};

export default AddPayment;
