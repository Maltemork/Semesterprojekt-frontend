// Essential
import React from 'react';
import { useNavigate } from 'react-router-dom';

// Styling
import PaymentIcon from "@mui/icons-material/Payment";
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const PaymentDetailsRenderer = ({ paymentObject }) => {
    const navigate = useNavigate();

    function handleEditButton() {
        navigate("./edit");
    }
    function handleDeleteButton() {
        console.log(`delete for ${paymentObject.id} clicked`)
    }

    return (
        <div className="detail-view">
            <h1>Payment:</h1>
            <div className="detail-card">
                <PaymentIcon id="icon"/>
                <div className="detail-text-container">
                    <h2 className="detail-view-title">Invoice: { paymentObject.id }</h2>

                    <label htmlFor="sponsor">Sponsor: </label>
                    <p name="sponsor">{ paymentObject.customer ? paymentObject.customer : "No sponsor registered." }</p>

                    <label htmlFor="subscription">Subscription:</label>
                    <p name="subscription"> { paymentObject.subscription ? paymentObject.subscription : "No subscription registered."}</p>

                    <label htmlFor="plan">Plan:</label>
                    <p name="plan" > { paymentObject.plan ? paymentObject.plan : "No plan registered."}</p>

                    <label htmlFor="authorized">Authorized:</label>
                    <p name="authorized" style={paymentObject.authorized ? {'color': "green"} : {'color': "red"}}> { paymentObject.authorized ? "✓" : "✕"}</p>

                    <label htmlFor="authorizedAmount">Authorized amount:</label>
                    <p name="authorizedAmount"> { paymentObject.authorizedAmount ? paymentObject.authorizedAmount : "None." }</p>

                    <label htmlFor="credited">Credited:</label>
                    <p name="credited"> { paymentObject.creditedAmount ? paymentObject.creditedAmount : "None." }</p>

                    <hr />

                    <label htmlFor="amount">Amount:</label>
                    <p name="amount"> { Number(paymentObject.amount / 100).toFixed(2) + " " + paymentObject.currency}</p>

                    <label htmlFor="created">Created:</label>
                    <p name="created"> {new Date(paymentObject.created).toString("en-DK", { timeZone: "UTC" })}</p>
                                        
                    <label htmlFor="currency">Currency:</label>
                    <p name="currency"> { paymentObject.currency }</p>


                    <label htmlFor="cancelled">Cancelled:</label>
                    <p name="cancelled" style={paymentObject.cancelled ? {'color': 'red'} : {'color': 'green'}}> { paymentObject.cancelled ? "Cancelled." : "Not cancelled." }</p>

                    <label htmlFor="state">State:</label>
                    <p name="state" style={paymentObject.state === "SETTLED" ? {'color': 'green'} : {'color': 'red'}}> { paymentObject.state }</p>

                    <label htmlFor="due">Due:</label>
                    <p name="due"> { paymentObject.due }</p>

                    <hr />

                    <label htmlFor="dunningStart">Dunning Start:</label>
                    <p name="dunningStart"> { paymentObject.dunningStart ? paymentObject.dunningStart : "None." }</p>

                    <label htmlFor="dunningSuccess">Dunning Success:</label>
                    <p name="dunningStart"> { paymentObject.dunningSuccess ? "Success" : "Failed." }</p>

                    <label htmlFor="failed">Failed:</label>
                    <p name="failed"> { paymentObject.dunningFailed ? "Failed." : "No." }</p>

                    <hr />

                    <label htmlFor="invoiceNumber">Invoice Number:</label>
                    <p name="invoiceNumber"> { paymentObject.invoiceNumber }</p>

                    <label htmlFor="refunded">Refunded:</label>
                    <p name="refunded"> { paymentObject.invoiceRefundedAmount }</p>

                    <label htmlFor="settled">Settled:</label>
                    <p name="settled" style={paymentObject.settled ? {'color': 'green'} : {'color': 'red'}}> { paymentObject.settled ? "Yes." : "No." }</p>

                    <label htmlFor="settledAmount">Settled Amount:</label>
                    <p name="settledAmount">{ paymentObject.settledAmount }</p>

                    <hr />

                    <label htmlFor="orgAmount">Org Amount:</label>
                    <p name="orgAmount">{  Number(paymentObject.orgAmount / 100).toFixed(2) + " " + paymentObject.currency }</p>

                    <label htmlFor="orgSubscription">Org subscription:</label>
                    <p name="orgSubscription">{ paymentObject.orgSubscription}</p>

                    <label htmlFor="periodFrom">Period From:</label>
                    <p name="periodFrom">{paymentObject.periodFrom}</p>

                    <label htmlFor="periodTo">Period To:</label>
                    <p name="periodTo">{ paymentObject.periodTo }</p>

                </div>
                <div>
                </div>
                <Stack direction="row" spacing={2} className="detail-buttons">
                    <Button variant="contained" onClick={handleEditButton}><EditIcon /></Button>
                    <Button variant="contained" onClick={handleDeleteButton} style={{'background-color': 'red'}}><DeleteForeverIcon /></Button>
                </Stack>
            </div>
            
        </div>
    );
};


export default PaymentDetailsRenderer;