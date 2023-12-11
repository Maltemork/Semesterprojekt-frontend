// Essential
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

// Styling
import GroupIcon from "@mui/icons-material/Group";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const SponsorDetailsRenderer = ({ sponsorObject }) => {
    const navigate = useNavigate();

    function handleEditButton() {
        
        console.log(`edit for ${sponsorObject.name} clicked`);
        navigate("./edit");
    }
    function handleDeleteButton() {
        console.log(`delete for ${sponsorObject.name} clicked`)
    }

    return (
        <div className="detail-view">
            <Link to="../sponsors">
                <ArrowBackIcon id="back-arrow-details"/>
            </Link>
            <div className="detail-card">
                <GroupIcon id="icon"/>
                <div className="detail-text-container">
                    <h2 className="detail-view-title">{ sponsorObject.name }</h2>

                    <label htmlFor="sponsor">Sponsor name: </label>
                    <p name="sponsor">{ sponsorObject.name }</p>

                    <label htmlFor="sponsorId">Sponsor id:</label>
                    <p name="sponsorId">{sponsorObject.customerId}</p>

                    <label htmlFor="subitems">Subscription:</label>
                    <p name="subitems"> { sponsorObject.subitems }</p>

                    <label htmlFor="email">E-mail address:</label>
                    <p name="email">{ sponsorObject.email }</p>

                    <label htmlFor="phone">Phone nr.:</label>
                    <p name="phone">+{ sponsorObject.phone ? sponsorObject.phone : "None" }</p>

                    <label htmlFor="active"></label>
                    <p name="active" style={sponsorObject.active ? {'color': "green", "fontWeight": "bold" } : {'color': "red", "fontWeight": "bold" }}>{ sponsorObject.active ? "Active" : "Inactive"}</p>

                    <hr />
                    
                    <label htmlFor="payment-platform">Payment platform: </label>
                    <p name="payment-platform">{ sponsorObject.paymentPlatform ? sponsorObject.paymentPlatform : "None"}</p>

                    <label htmlFor="donations-handle">Reepay handle (donations):</label>
                    <p name="donations-handle"> { sponsorObject.reepayHandleDonations ?  sponsorObject.reepayHandleDonations : "None"}</p>

                    <label htmlFor="periamma-handle">Reepay handle (periamma): </label>
                    <p name="periamma-handle">{ sponsorObject.reepayHandlePeriamma ? sponsorObject.reepayHandlePeriamma : "None"}</p>

                    <label htmlFor="foreningLetId">ForeningLetID: </label>
                    <p name="foreningLetId">{ sponsorObject.foreningLetId ? sponsorObject.foreningLetId : "None"}</p>

                    

                    <label htmlFor="type">Type:</label>
                    <p name="type">{ sponsorObject.type }</p>

                    <label htmlFor="cpr">CPR / CVR: </label>
                    <p name="cpr">{ sponsorObject.cprCvr }</p>

                    <hr />

                    <label htmlFor="payments">Payments:</label>
                    <p name="payments">{sponsorObject.payments}</p>
                    
                    <hr />

                    <label htmlFor="notes">Notes:</label><p></p>
                    <p name="notes" className="detail-notes">{ sponsorObject.notes ? sponsorObject.notes : "No notes"}</p>

                </div>
                <div>
                </div>
                <Stack direction="row" spacing={2} className="detail-buttons">
                    <Button variant="contained" onClick={handleEditButton}><EditIcon /></Button>
                    <Button variant="contained" onClick={handleDeleteButton} style={{'backgroundColor': 'red'}}><DeleteForeverIcon /></Button>
                </Stack>
            </div>
            
        </div>
    );
};


export default SponsorDetailsRenderer;