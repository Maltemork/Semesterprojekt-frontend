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
            <h1 className="detail-view-title">Invoice ID: { sponsorObject.id }</h1>
            <div className="detail-card">
                <GroupIcon />
                <h2>Customer: { sponsorObject.customer }</h2>
                <h2>Subscription: { sponsorObject.subscription }</h2>
                <h2>Amount: { sponsorObject.amount }</h2>
                <h2>Plan: { sponsorObject.planHandle }</h2>
                <h2>Created: { new Date(sponsorObject.created).toString() }</h2>
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