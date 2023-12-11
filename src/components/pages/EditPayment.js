import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getObject } from "../crud/getData";
import "../../styling/EditPayment.css";
import HandleEditSubmit from "../crud/EditSubmit";

const EditPayment = () => {
  const { id } = useParams();
  const [paymentFormData, setPaymentFormData] = useState({});

  useEffect(() => {
    const fetchPayment = async () => {
      try {
        const paymentData = await getObject("payments", id);
        //Converts mySql datetime types to to javascript date-objects
        const dateTypes = paymentData[0].map((parameter) => {
          if (
            typeof parameter === "string" &&
            //Checks if it's a mySql datetime type
            /^\d{4}-d{2}-d{2} d{2}:d{2}:d{2}$/.test(parameter)
          ) {
            //Returns the converted date
            return new Date(parameter).toISOString().split("T")[0];
          } else {
            return parameter;
          }
        });
        setPaymentFormData({
          ...paymentData[0],
          ...dateTypes,
        });

        setPaymentFormData(paymentData[0]);
        console.log("Payment Data: ", paymentData[0]);
      } catch (error) {
        console.error("Couldn't fetch payment data for: " + id, error);
      }
    };

    fetchPayment();
  }, [id]);

  const handlePaymentFormChange = (event) => {
    const { name, value, type, checked } = event.target;
    setPaymentFormData((previousData) => ({
      ...previousData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handlePaymentEditFormSubmit = (event) => {
    event.preventDefault();
    HandleEditSubmit(paymentFormData, "payments", id);
  };

  const EditPaymentForm = (
    <form className="editPaymentForm" onSubmit={handlePaymentEditFormSubmit}>
      <label htmlFor="">Sponsor:</label>
      <input
        type="text"
        name="customerHandle"
        value={paymentFormData.customerHandle || ""}
        onChange={handlePaymentFormChange}
      />

      <label htmlFor="subscription">Subscription:</label>
      <input
        type="text"
        name="subscription"
        value={paymentFormData.subscriptionHandle || ""}
        onChange={handlePaymentFormChange}
      />

      <label htmlFor="plan">Plan:</label>
      <input
        type="text"
        name="plan"
        value={paymentFormData.planHandle || ""}
        onChange={handlePaymentFormChange}
      />

      <label htmlFor="authorized">Authorized:</label>
      <input
        type="checkbox"
        name="authorized"
        value={paymentFormData.invoiceAuthorized || false}
        onChange={handlePaymentFormChange}
      />

      <label htmlFor="authorizedAmount">Authorized Amount:</label>
      <input
        type="text"
        name="authorizedAmount"
        value={paymentFormData.invoiceAuthorizedAmount || ""}
        onChange={handlePaymentFormChange}
      />

      <label htmlFor="credited">Credited:</label>
      <input
        type="date"
        name="credited"
        value={paymentFormData.invoiceCreated || ""}
        onChange={handlePaymentFormChange}
      />

      <label htmlFor="invoiceAmount">Amount:</label>
      <input
        type="text"
        name="invoiceAmount"
        value={paymentFormData.invoiceAmount || ""}
        onChange={handlePaymentFormChange}
      />

      <label htmlFor="created">Created:</label>
      <input
        type="date"
        name="created"
        value={paymentFormData.invoiceCreated || ""}
        onChange={handlePaymentFormChange}
      />

      <label htmlFor="currency">Currency:</label>
      <input
        type="text"
        name="currency"
        value={paymentFormData.invoiceCurrency || ""}
        onChange={handlePaymentFormChange}
      />

      <label htmlFor="cancelled">Cancelled</label>
      <input
        type="checkbox"
        name="cancelled"
        value={paymentFormData.invoiceCancelled || ""}
        onChange={handlePaymentFormChange}
      />

      <label htmlFor="state">State</label>
      <input
        type="text"
        name="state"
        value={paymentFormData.invoiceState || ""}
        onChange={handlePaymentFormChange}
      />

      <label htmlFor="due">Due</label>
      <input
        type="date"
        name="due"
        value={paymentFormData.invoiceDue || ""}
        onChange={handlePaymentFormChange}
      />

      <label htmlFor="dunningStart">Dunning Start</label>
      <input
        type="date"
        name="dunningStart"
        value={paymentFormData.invoiceDunningStart || ""}
        onChange={handlePaymentFormChange}
      />

      <label htmlFor="dunningSuccess">Dunning Success</label>
      <input
        type="checkbox"
        name="dunningSuccess"
        value={paymentFormData.invoiceDunningSuccess || ""}
        onChange={handlePaymentFormChange}
      />

      <label htmlFor="dunningFailed">Dunning Failed</label>
      <input
        type="checkbox"
        name="dunningFailed"
        value={paymentFormData.invoiceDunningFailed || ""}
        onChange={handlePaymentFormChange}
      />

      <label htmlFor="invoiceNumber">Invoice Number</label>
      <input
        type="text"
        name="invoiceNumber"
        value={paymentFormData.invoiceNumber || ""}
        onChange={handlePaymentFormChange}
      />

      <label htmlFor="refundedAmount">Refunded Amount</label>
      <input
        type="text"
        name="refundedAmount"
        value={paymentFormData.invoiceRefundedAmount || ""}
        onChange={handlePaymentFormChange}
      />

      <label htmlFor="settled">Settled</label>
      <input
        type="checkbox"
        name="settled"
        value={paymentFormData.invoiceSettled || false}
        onChange={handlePaymentFormChange}
      />

      <label htmlFor="settledAmount">Settled Amount</label>
      <input
        type="text"
        name="settledAmount"
        value={paymentFormData.invoiceSettledAmount || ""}
        onChange={handlePaymentFormChange}
      />

      <label htmlFor="orgAmount">Org Amount</label>
      <input
        type="text"
        name="orgAmount"
        value={paymentFormData.invoiceOrgAmount || ""}
        onChange={handlePaymentFormChange}
      />

      <label htmlFor="orgSubscription">Org Subscription:</label>
      <input
        type="text"
        name="orgSubscription"
        value={paymentFormData.invoiceOrgSubscription || ""}
        onChange={handlePaymentFormChange}
      />

      <label htmlFor="periodFrom">Period From</label>
      <input
        type="date"
        name="periodFrom"
        value={paymentFormData.invoicePeriodFrom || ""}
        onChange={handlePaymentFormChange}
      />

      <label htmlFor="periodTo">Period To</label>
      <input
        type="date"
        name="periodTo"
        value={paymentFormData.invoicePeriodTo || ""}
        onChange={handlePaymentFormChange}
      />
    </form>
  );

  const EditPaymentContainer = (
    <div className="editPaymentContainer">
      <h1>Edit {id}</h1>
      {EditPaymentForm}
    </div>
  );

  return EditPaymentContainer;
};

export default EditPayment;
