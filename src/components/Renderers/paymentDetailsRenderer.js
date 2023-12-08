// Essential
import React from 'react';
import { useNavigate } from 'react-router-dom';

// Styling
import GroupIcon from "@mui/icons-material/Group";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const PaymentDetailsRenderer = ({ sponsorObject: paymentObject }) => {
    const navigate = useNavigate();

    function handleEditButton() {
        navigate("./edit");
    }
    function handleDeleteButton() {
        console.log(`delete for ${paymentObject.id} clicked`)
    }

    return (
        <div className="detail-view-sponsor">
            <div className="detail-card">
                <GroupIcon id="icon"/>
                <div className="detail-text-container">
                    <h2 className="detail-view-title">{ paymentObject.name } | {paymentObject.customerId}</h2>

                    <label htmlFor="customer">Customer: </label>
                    <p name="customer">{ paymentObject.name }</p>

                    <label htmlFor="subitems">Subscription:</label>
                    <p name="subitems"> { paymentObject.subitems }</p>

                    <label htmlFor="email">E-mail address:</label>
                    <p name="email">{ paymentObject.email }</p>

                    <label htmlFor="phone">Phone nr.:</label>
                    <p name="phone">{ paymentObject.phone ? paymentObject.phone : "None" }</p>

                    <label htmlFor="active"></label>
                    <p name="active" style={paymentObject.active ? {'color': "green"} : {'color': "red"}}>{ paymentObject.active ? "Active" : "Inactive"}</p>

                    <hr />
                    
                    <label htmlFor="payment-platform">Payment platform: </label>
                    <p name="payment-platform">{ paymentObject.paymentPlatform ? paymentObject.paymentPlatform : "None"}</p>

                    <label htmlFor="donations-handle">Reepay handle (donations):</label>
                    <p name="donations-handle"> { paymentObject.reepayHandleDonations ?  paymentObject.reepayHandleDonations : "None"}</p>

                    <label htmlFor="periamma-handle">Reepay handle (periamma): </label>
                    <p name="periamma-handle">{ paymentObject.reepayHandlePeriamma ? paymentObject.reepayHandlePeriamma : "None"}</p>

                    <label htmlFor="foreningLetId">ForeningLetID: </label>
                    <p name="foreningLetId">{ paymentObject.foreningLetId ? paymentObject.foreningLetId : "None"}</p>

                    

                    <label htmlFor="type">Type:</label>
                    <p name="type">{ paymentObject.type }</p>

                    <label htmlFor="cpr">CPR / CVR: </label>
                    <p name="cpr">{ paymentObject.cprCvr }</p>

                    <hr />
                    <label htmlFor="notes">Notes:</label>
                    <p></p>
                    <p name="notes" className="detail-notes">{ paymentObject.notes ? paymentObject.notes : "No notes"}</p>
                    <hr />


                    <label htmlFor="payments">Payments:</label>
                    <p name="payments">{paymentObject.payments}</p>
                </div>
                <div>
                </div>
                <Stack direction="row" spacing={2} className="detail-buttons">
                    <Button variant="contained" onClick={handleEditButton}>Edit</Button>
                    <Button variant="contained" onClick={handleDeleteButton}>
                        Delete
                    </Button>
                </Stack>
            </div>
            
        </div>
    );
};


export default PaymentDetailsRenderer;