// Essential
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getObject } from "../crud/getData";
import { ConstructPaymentObject } from "../Renderers/paymentObject";
import PaymentDetailsRenderer from "../Renderers/paymentDetailsRenderer";

// Styling
import "../../styling/DetailView.css";

export default function PaymentDetails() {
    const [sponsorObject, setPaymentObject] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);
    const { id } = useParams();

    useEffect(() => {

        const fetchData = async () => {
          const dataArray = await getObject("payments", `${id}`);
          const data = ConstructPaymentObject(dataArray[0]);
          setPaymentObject(data);
          setDataLoaded(true);
            }

        if (!dataLoaded) {
            fetchData();
            }
        },
    [dataLoaded, id, setPaymentObject, sponsorObject]);

    useEffect(() => {
        console.log(sponsorObject);
      }, [sponsorObject]);

      return (
        <PaymentDetailsRenderer key={sponsorObject.customerId} sponsorObject={sponsorObject}/>
    ) 
}