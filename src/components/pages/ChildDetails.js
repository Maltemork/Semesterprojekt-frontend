// Essential
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getObject } from "../crud/getData";
import { ConstructChildObject } from "../Renderers/childObject";

// Styling
import GroupIcon from "@mui/icons-material/Group";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import "../../styling/DetailView.css";

export default function ChildDetails() {
    const [childObject, setChildObject] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);
    const { id } = useParams();
    const navigate = useNavigate();

    function handleEditButton() {
        
        console.log(`edit for ${childObject.name} clicked`);
        navigate("./edit");
    }
    function handleDeleteButton() {
        console.log(`delete for ${childObject.name} clicked`)
    }

    useEffect(() => {

        const fetchData = async () => {
          const dataArray = await getObject("children", `${id}`);
          const data = ConstructChildObject(dataArray[0]);
          setChildObject(data);
          setDataLoaded(true);
            }

        if (!dataLoaded) {
            fetchData();
            }
        },
    [dataLoaded, id, setChildObject, childObject]);

    useEffect(() => {
        console.log(childObject);
      }, [childObject]);

    return (
        <div className="detail-view-sponsor">
            <h1 className="detail-view-title">Child no.: { childObject.childNo }</h1>
            <div className="sponsor-card">
                <GroupIcon />
                <h2>Name: { childObject.name }</h2>
                <h2>Sub item: { childObject.subitems }</h2>
                <h2>E-mail: { childObject.email }</h2>
                <h2>Phone: { childObject.phone }</h2>
                <h2>{ childObject.active ? "Active" : "Inactive"}</h2>
                <h2>Payment platform: { childObject.paymentPlatform ? childObject.paymentPlatform : "None"}</h2>
                <h2>Reepay handle (donations): { childObject.reepayHandleDonations }</h2>
                <h2>Reepay handle (periamma): { childObject.reepayHandlePeriamma }</h2>
                <h2>ForeningLetID: { childObject.foreningLetId ? childObject.foreningLetId : "None"}</h2>
                <h2>Type: { childObject.type }</h2>
                <h2>CPR / CVR: { childObject.cprCvr }</h2>
                <h2>Notes: { childObject.notes }</h2>
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