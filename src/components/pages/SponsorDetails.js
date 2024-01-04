// Essential
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getObject } from "../crud/getData";
import * as SponsorObject from "../Renderers/SponsorObject.js";
import SponsorDetailsRenderer from "../Renderers/sponsorDetailsRenderer.js";
import CircularProgress from "@mui/material/CircularProgress";

// Styling
import "../../styling/DetailView.css";

export default function SponsorDetails() {
  const [sponsorObject, setSponsorObject] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);
  const { id } = useParams();

  const ShowLoader = () => {
    if (dataLoaded === false) {
      return <CircularProgress id="loader" />;
    } else {
      return (
        <SponsorDetailsRenderer
          key={sponsorObject.customerId}
          sponsorObject={sponsorObject}
        />
      );
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const dataArray = await getObject("sponsors", `${id}`);
      const data = new SponsorObject(
        dataArray[0].id,
        dataArray[0].sponsorId,
        dataArray[0].subitems,
        dataArray[0].sponsorName,
        dataArray[0].sponsorEmail,
        dataArray[0].sponsorPhone,
        dataArray[0].active,
        dataArray[0].paymentPlatform,
        dataArray[0].reepayHandlePeriamma,
        dataArray[0].foreningLetID,
        dataArray[0].type,
        dataArray[0].reepayHandleDonations,
        dataArray[0].cprCvr,
        dataArray[0].notes
      );
      setSponsorObject(data);
      setDataLoaded(true);
    };

    if (!dataLoaded) {
      fetchData();
    }
  }, [dataLoaded, id, setSponsorObject, sponsorObject]);

  useEffect(() => {
    console.log(sponsorObject);
  }, [sponsorObject]);

  return <ShowLoader />;
}
