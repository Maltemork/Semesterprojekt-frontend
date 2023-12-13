// Essential
import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { deleteObject, getSponsorPayments } from "../crud/getData";
import { DeleteDialog } from "../crud/deleteDialog";

// Styling
import GroupIcon from "@mui/icons-material/Group";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const SponsorDetailsRenderer = ({ sponsorObject }) => {
  const navigate = useNavigate();

  const [sponsorPayments, setSponsorPayments] = useState([]);

  useEffect(() => {
    const fetchSponsorPaymentsData = async () => {
      try {
        const sponsorPaymentsData = await getSponsorPayments(
          sponsorObject.customerId
        );
        setSponsorPayments(sponsorPaymentsData);
      } catch (error) {
        console.error(
          "Couldn't fetch payments data for sponsor: " +
            sponsorObject.customerId,
          error
        );
      }
    };

    fetchSponsorPaymentsData();
  }, [sponsorObject.customerId]);

  console.log("Sponsor Payments: ", sponsorPayments);

  // DIALOG SECTION
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  // // BUTTONS SECTION // //
  // ROUTE USER TO THE EDIT PAGE FOR THE OBJECT.
  function handleEditButton() {
    navigate("./edit");
  }

  // OPEN DELETE DIALOG ON DELETE BUTTON CLICK
  function handleDeleteButton() {
    setOpen(true);
  }

  // SEND REQUEST TO DELETE OBJECT IN THE DATABASE
  function handleDelete() {
    deleteObject("sponsors", sponsorObject.customerId);
    setOpen(false);
    setTimeout(() => {
      navigate("../sponsors");
    }, "1000");
  }

  // DETAILS TEXT HTML
  function DetailsHTML() {
    return (
      <div className="detail-text-container">
        <h2 className="detail-view-title">{sponsorObject.name}</h2>

        <label htmlFor="sponsor">Sponsor name: </label>
        <p name="sponsor">{sponsorObject.name}</p>

        <label htmlFor="sponsorId">Sponsor id:</label>
        <p name="sponsorId">{sponsorObject.customerId}</p>

        <label htmlFor="subitems">Subscription:</label>
        <p name="subitems"> {sponsorObject.subitems}</p>

        <label htmlFor="sponsorChild">Sponsoring:</label>
        <Link
          to={
            sponsorObject.sponsoring &&
            `../children/` + sponsorObject.sponsoring
          }
        >
          {sponsorObject.sponsoring ? sponsorObject.sponsoring : ""}
        </Link>

        <label htmlFor="email">E-mail address:</label>
        <p name="email">{sponsorObject.email}</p>

        <label htmlFor="phone">Phone nr.:</label>
        <p name="phone">
          +{sponsorObject.phone ? sponsorObject.phone : "None"}
        </p>

        <label htmlFor="active"></label>
        <p
          name="active"
          style={
            sponsorObject.active
              ? {
                  color: "green",
                  fontWeight: "bold",
                }
              : {
                  color: "red",
                  fontWeight: "bold",
                }
          }
        >
          {sponsorObject.active ? "Active" : "Inactive"}
        </p>

        <hr />

        <label htmlFor="payment-platform">Payment platform: </label>
        <p name="payment-platform">
          {sponsorObject.paymentPlatform
            ? sponsorObject.paymentPlatform
            : "None"}
        </p>

        <label htmlFor="donations-handle">Reepay handle (donations):</label>
        <p name="donations-handle">
          {" "}
          {sponsorObject.reepayHandleDonations
            ? sponsorObject.reepayHandleDonations
            : "None"}
        </p>

        <label htmlFor="periamma-handle">Reepay handle (periamma): </label>
        <p name="periamma-handle">
          {sponsorObject.reepayHandlePeriamma
            ? sponsorObject.reepayHandlePeriamma
            : "None"}
        </p>

        <label htmlFor="foreningLetId">ForeningLetID: </label>
        <p name="foreningLetId">
          {sponsorObject.foreningLetID ? sponsorObject.foreningLetID : "None"}
        </p>

        <label htmlFor="type">Type:</label>
        <p name="type">{sponsorObject.type}</p>

        <label htmlFor="cpr">CPR / CVR: </label>
        <p name="cpr">{sponsorObject.cprCvr}</p>

        <hr />

        <label htmlFor="notes">Notes:</label>
        <p></p>
        <p name="notes" className="detail-notes">
          {sponsorObject.notes ? sponsorObject.notes : "No notes"}
        </p>
      </div>
    );
  }

  // async function sponsorPaymentsList() {
  //   return await getSponsorPayments(sponsorObject.customerId);
  // }

  return (
    <div className="detail-view">
      {/* BACK BUTTON */}
      <Link to="../sponsors">
        <ArrowBackIcon id="back-arrow-details" onClick={() => navigate(-1)} />
      </Link>
      <div className="detail-card">
        {/* SPONSOR ICON */}
        <GroupIcon id="icon" />
        {/* DETAILS TEXT */}
        <DetailsHTML />
        <div className="sponsor-payments-table">
          <h1>Payments</h1>
          <table>
            <thead>
              <tr>
                <th>Invoice</th>
                <th>Customer</th>
                <th>Amount</th>
                <th>Currency</th>
                <th>State</th>
                <th>Invoice Number</th>
                <th>Customer E-mail</th>
                <th>Subscription</th>
              </tr>
            </thead>
            <tbody>
              {/* { getSortedArray(paymentsArray).filter(searchInput).map(payment => (
                      <PaymentRenderer key={payment.id} payment={payment}/>
                            )) } */}
            </tbody>
          </table>
        </div>
        {/* BUTTONS */}
        <Stack direction="row" spacing={2} className="detail-buttons">
          <Button variant="contained" onClick={handleEditButton}>
            <EditIcon />
          </Button>
          <Button
            variant="contained"
            onClick={handleDeleteButton}
            style={{ backgroundColor: "red" }}
          >
            <DeleteForeverIcon />
          </Button>
        </Stack>
        {/* DIALOG SECTION */}
        <DeleteDialog
          open={open}
          handleClose={handleClose}
          handleDelete={handleDelete}
          object={sponsorObject}
        />
      </div>
    </div>
  );
};

export default SponsorDetailsRenderer;
