// Essential
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getObject } from "../crud/getData";
import { ConstructSponsorObject } from "../Renderers/sponsorObject";
import SponsorDetailsRenderer from "../Renderers/sponsorDetailsRenderer.js";

// Styling
import "../../styling/DetailView.css";

export default function SponsorDetails() {
    const [sponsorObject, setSponsorObject] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);
    const { id } = useParams();

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
        <SponsorDetailsRenderer key={sponsorObject.customerId} sponsorObject={sponsorObject}/>
    ) 
}