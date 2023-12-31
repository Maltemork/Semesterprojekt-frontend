// Essential
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getObject } from "../crud/getData";
import { ConstructPaymentObject } from "../Renderers/paymentObject";
import PaymentDetailsRenderer from "../Renderers/paymentDetailsRenderer";
import CircularProgress from '@mui/material/CircularProgress';

// Styling
import "../../styling/DetailView.css";

export default function PaymentDetails() {
    const [paymentObject, setPaymentObject] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);
    const { id } = useParams();

    const ShowLoader = () => {
        if ( dataLoaded === false ) {
            return  <CircularProgress id="loader"/>;
        } else {
            return <PaymentDetailsRenderer key={paymentObject.id} paymentObject={paymentObject}/>
        }
    }

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
    [dataLoaded, id, setPaymentObject, paymentObject]);

    useEffect(() => {
        console.log(paymentObject);
      }, [paymentObject]);

      return (
        <ShowLoader />
    ) 
}