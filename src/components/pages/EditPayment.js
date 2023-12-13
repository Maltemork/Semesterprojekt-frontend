import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { getObject } from "../crud/getData";
import "../../styling/EditPayment.css";
import HandleEditSubmit from "../crud/EditSubmit";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const EditPayment = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const [paymentFormData, setPaymentFormData] = useState({});

  useEffect(() => {
    const fetchPayment = async () => {
      try {
        const paymentData = await getObject("payments", id);
        let updatedPaymentData = { ...paymentData[0] };
        console.log("1: ", updatedPaymentData);
        for (const key in updatedPaymentData) {
          if (
            typeof updatedPaymentData[key] === "string" &&
            /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/.test(
              updatedPaymentData[key]
            )
          ) {
            updatedPaymentData[key] = new Date(updatedPaymentData[key])
              .toISOString()
              .split("T")[0];
          }
        }
        setPaymentFormData({
          ...updatedPaymentData,
        });
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
    setTimeout(() => {
      navigate("/payments/" + paymentFormData.invoiceHandle);
    }, "500");
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

        <label htmlFor="subscriptionHandle">Subscription:</label>
        <input
          type="text"
          name="subscriptionHandle"
          value={paymentFormData.subscriptionHandle || ""}
          onChange={handlePaymentFormChange}
        />

        <label htmlFor="planHandle">Plan:</label>
        <input
          type="text"
          name="planHandle"
          value={paymentFormData.planHandle || ""}
          onChange={handlePaymentFormChange}
        />

        <div className="double-holder">
          <label htmlFor="invoiceAuthorized">Authorized:</label>
          <input
            type="checkbox"
            name="invoiceAuthorized"
            checked={paymentFormData.invoiceAuthorized || false}
            onChange={handlePaymentFormChange}
          />
        </div>

        <label htmlFor="invoiceAuthorizedAmount">Authorized Amount:</label>
        <input
          type="text"
          name="invoiceAuthorizedAmount"
          value={paymentFormData.invoiceAuthorizedAmount || ""}
          onChange={handlePaymentFormChange}
        />

        <label htmlFor="invoiceCreditedAmount">Credited:</label>
        <input
          type="text"
          name="invoiceCreditedAmount"
          value={paymentFormData.invoiceCreditedAmount || ""}
          onChange={handlePaymentFormChange}
        />

        <label htmlFor="invoiceAmount">Amount:</label>
        <input
          type="text"
          name="invoiceAmount"
          value={paymentFormData.invoiceAmount || ""}
          onChange={handlePaymentFormChange}
        />

        <label htmlFor="invoiceCreated">Created:</label>
        <input
          type="date"
          name="invoiceCreated"
          value={paymentFormData.invoiceCreated || ""}
          onChange={handlePaymentFormChange}
        />

        <label htmlFor="invoiceCurrency">Currency:</label>
        <input
          type="text"
          name="invoiceCurrency"
          value={paymentFormData.invoiceCurrency || ""}
          onChange={handlePaymentFormChange}
        />

        <div className="double-holder">
          <label htmlFor="invoiceCancelled">Cancelled:</label>
          <input
            type="checkbox"
            name="invoiceCancelled"
            checked={paymentFormData.invoiceCancelled || false}
            onChange={handlePaymentFormChange}
          />
        </div>

        <label htmlFor="invoiceState">State:</label>
        <input
          type="text"
          name="invoiceState"
          value={paymentFormData.invoiceState || ""}
          onChange={handlePaymentFormChange}
        />
      <label htmlFor="invoiceDue">Due:</label>
      <input
        type="date"
        name="invoiceDue"
        value={paymentFormData.invoiceDue || ""}
        onChange={handlePaymentFormChange}
      />

      <label htmlFor="invoiceDunningStart">Dunning Start:</label>
      <input
        type="date"
        name="invoiceDunningStart"
        value={paymentFormData.invoiceDunningStart || ""}
        onChange={handlePaymentFormChange}
      />

      <div className="double-holder">
          <label htmlFor="invoiceDunningSuccess">Dunning Success:</label>
          <input
            type="checkbox"
            name="invoiceDunningSuccess"
            checked={paymentFormData.invoiceDunningSuccess || false}
            onChange={handlePaymentFormChange}
          />
      </div>

      <div className="double-holder">
        <label htmlFor="invoiceDunningFailed">Dunning Failed:</label>
        <input
          type="checkbox"
          name="invoiceDunningFailed"
          checked={paymentFormData.invoiceDunningFailed || false}
          onChange={handlePaymentFormChange}
        />
      </div>

      <label htmlFor="invoiceNumber">Invoice Number:</label>
      <input
        type="text"
        name="invoiceNumber"
        value={paymentFormData.invoiceNumber || ""}
        onChange={handlePaymentFormChange}
      />

      <label htmlFor="invoiceRefundedAmount">Refunded Amount:</label>
      <input
        type="text"
        name="invoiceRefundedAmount"
        value={paymentFormData.invoiceRefundedAmount || ""}
        onChange={handlePaymentFormChange}
      />

      <div className="double-holder">
        <label htmlFor="invoiceSettled">Settled:</label>
        <input
          type="checkbox"
          name="invoiceSettled"
          checked={paymentFormData.invoiceSettled || false}
          onChange={handlePaymentFormChange}
        />
      </div>

      <label htmlFor="invoiceSettledAmount">Settled Amount:</label>
      <input
        type="text"
        name="invoiceSettledAmount"
        value={paymentFormData.invoiceSettledAmount || ""}
        onChange={handlePaymentFormChange}
      />

      <label htmlFor="invoiceOrgAmount">Org Amount:</label>
      <input
        type="text"
        name="invoiceOrgAmount"
        value={paymentFormData.invoiceOrgAmount || ""}
        onChange={handlePaymentFormChange}
      />

      <label htmlFor="invoiceOrgSubscription">Org Subscription:</label>
      <input
        type="text"
        name="invoiceOrgSubscription"
        value={paymentFormData.invoiceOrgSubscription || ""}
        onChange={handlePaymentFormChange}
      />

      <label htmlFor="invoicePeriodFrom">Period From:</label>
      <input
        type="date"
        name="invoicePeriodFrom"
        value={paymentFormData.invoicePeriodFrom || ""}
        onChange={handlePaymentFormChange}
      />

      <label htmlFor="invoicePeriodTo">Period To:</label>
      <input
        type="date"
        name="invoicePeriodTo"
        value={paymentFormData.invoicePeriodTo || ""}
        onChange={handlePaymentFormChange}
      />

      <button>Submit Changes</button>
    </form>
  );

  const EditPaymentContainer = (
    <div className="editPaymentContainer">
      <Link to={"../payments/" + paymentFormData.invoiceHandle}>
        <ArrowBackIcon id="back-arrow-payments"/>
      </Link>
      <h1>Edit {id}</h1>
      {EditPaymentForm}
    </div>
  );

  return EditPaymentContainer;
};

export default EditPayment;
