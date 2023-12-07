// Essential
import React from 'react';
import { useNavigate } from 'react-router-dom';

// Styling
import PublicIcon from "@mui/icons-material/Public";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const ChildDetailsRenderer = ({ childObject }) => {
    const navigate = useNavigate();

    function handleEditButton() {
        
        console.log(`edit for ${childObject.name} clicked`);
        navigate("./edit");
    }
    function handleDeleteButton() {
        console.log(`delete for ${childObject.name} clicked`)
    }

    return (
        <div className="detail-view-sponsor">
            <h1 className="detail-view-title">Child no.: { childObject.childNo }</h1>
            <div className="detail-card">
                <PublicIcon />
                <h2>Full name: { childObject.name }</h2>
                <h2>School: { childObject.school }</h2>
                <h2>Age: { childObject && childObject.getAge ? childObject.getAge() : "Unable to compute" }</h2>
                <h2>Gender: { childObject.gender === "F" ? "Female" : "Male" }</h2>
                <h2>Country: { childObject.subitems}</h2>
                <p>Birthdate: {new Date(childObject.birthdate).toLocaleDateString("en-DE")}</p>
                <p>Type: { childObject.type }</p>
                <p>School start: { new Date(childObject.schoolStart).toLocaleDateString("en-DE") }</p>
                <p>Sponsor: { childObject.sponsor ? childObject.sponsor : "None"}</p>
                <p>Notes: { childObject.notes }</p>
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


export default ChildDetailsRenderer;