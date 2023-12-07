// Essential
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getObject } from "../crud/getData";
import { ConstructSponsorObject } from "../Renderers/sponsorObject";

// Styling
import GroupIcon from "@mui/icons-material/Group";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import "../../styling/DetailView.css";

export default function SponsorDetails() {
    const [sponsorObject, setSponsorObject] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);
    const { id } = useParams();
    const navigate = useNavigate();

    function handleEditButton() {
        
        console.log(`edit for ${sponsorObject.name} clicked`);
        navigate("./edit");
    }
    function handleDeleteButton() {
        console.log(`delete for ${sponsorObject.name} clicked`)
    }

    useEffect(() => {

        const fetchData = async () => {
          const dataArray = await getObject("sponsors", `${id}`);
          const data = ConstructSponsorObject(dataArray[0]);
          setSponsorObject(data);
          setDataLoaded(true);
            }

        if (!dataLoaded) {
            fetchData();
            }
        },
    [dataLoaded, id, setSponsorObject, sponsorObject]);

    useEffect(() => {
        console.log(sponsorObject);
      }, [sponsorObject]);

    return (
        <div className="detail-view-sponsor">
            <h1 className="detail-view-title">Customer ID: { sponsorObject.customerId }</h1>
            <div className="sponsor-card">
                <GroupIcon />
                <h2>Name: { sponsorObject.name }</h2>
                <h2>Sub item: { sponsorObject.subitems }</h2>
                <h2>E-mail: { sponsorObject.email }</h2>
                <h2>Phone: { sponsorObject.phone }</h2>
                <h2>{ sponsorObject.active ? "Active" : "Inactive"}</h2>
                <h2>Payment platform: { sponsorObject.paymentPlatform ? sponsorObject.paymentPlatform : "None"}</h2>
                <h2>Reepay handle (donations): { sponsorObject.reepayHandleDonations }</h2>
                <h2>Reepay handle (periamma): { sponsorObject.reepayHandlePeriamma }</h2>
                <h2>ForeningLetID: { sponsorObject.foreningLetId ? sponsorObject.foreningLetId : "None"}</h2>
                <h2>Type: { sponsorObject.type }</h2>
                <h2>CPR / CVR: { sponsorObject.cprCvr }</h2>
                <h2>Notes: { sponsorObject.notes }</h2>
            </div>
            <Stack direction="row" spacing={2} className="detail-buttons">
                <Button variant="contained" onClick={handleEditButton}>Edit</Button>
                <Button variant="contained" onClick={handleDeleteButton}>
                    Delete
                </Button>
            </Stack>
        </div>
    ) 
}