// Essential
import React from 'react';
import { useNavigate } from 'react-router-dom';

// Styling
import GroupIcon from "@mui/icons-material/Group";
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
        <div className="detail-view-sponsor">
            <h1 className="detail-view-title">Customer ID: { sponsorObject.customerId }</h1>
            <div className="detail-card">
                <GroupIcon />
                <h2>Name: { sponsorObject.name }</h2>
                <h2>Sub item: { sponsorObject.subitems }</h2>
                <h2>E-mail: { sponsorObject.email }</h2>
                <h2>Phone: { sponsorObject.phone }</h2>
                <h2 style={sponsorObject.active ? {'color': "green"} : {'color': "red"}}>{ sponsorObject.active ? "Active" : "Inactive"}</h2>
                <p>Payment platform: { sponsorObject.paymentPlatform ? sponsorObject.paymentPlatform : "None"}</p>
                <p>Reepay handle (donations): { sponsorObject.reepayHandleDonations }</p>
                <p>Reepay handle (periamma): { sponsorObject.reepayHandlePeriamma }</p>
                <p>ForeningLetID: { sponsorObject.foreningLetId ? sponsorObject.foreningLetId : "None"}</p>
                <p>Type: { sponsorObject.type }</p>
                <p>CPR / CVR: { sponsorObject.cprCvr }</p>
                <p>Notes: { sponsorObject.notes }</p>
            </div>
            <Stack direction="row" spacing={2} className="detail-buttons">
                <Button variant="contained" onClick={handleEditButton}>Edit</Button>
                <Button variant="contained" onClick={handleDeleteButton}>
                    Delete
                </Button>
            </Stack>
        </div>
    );
};


export default SponsorDetailsRenderer;