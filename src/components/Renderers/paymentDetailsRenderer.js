// Essential
import React from 'react';
import { useNavigate } from 'react-router-dom';

// Styling
import GroupIcon from "@mui/icons-material/Group";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const SponsorDetailsRenderer = ({ sponsorObject: paymentObject }) => {
    const navigate = useNavigate();

    function handleEditButton() {
        navigate("./edit");
    }
    function handleDeleteButton() {
        console.log(`delete for ${paymentObject.id} clicked`)
    }

    return (
        <div className="detail-view-sponsor">
            <h1 className="detail-view-title">Invoice ID: { paymentObject.id }</h1>
            <div className="detail-card">
                <GroupIcon />
                <label for="customer">Customer:</label>
                <h2 name="customer">Customer: { paymentObject.customer }</h2>
                <h2>Subscription: { paymentObject.subscription }</h2>
                <h2>Amount: { paymentObject.amount }</h2>
                <h2>Plan: { paymentObject.planHandle }</h2>
                <h2>Created: { new Date(paymentObject.created).toString() }</h2>
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
    );
};


export default SponsorDetailsRenderer;