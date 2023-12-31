// Essential
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getObject } from "../crud/getData";
import { ConstructChildObject } from "../Renderers/childObject";
import ChildDetailsRenderer from "../Renderers/childDetailsRenderer.js";
import CircularProgress from '@mui/material/CircularProgress';


// Styling
import "../../styling/DetailView.css";

export default function ChildDetails() {
    const [childObject, setChildObject] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);
    const { id } = useParams();

    const ShowLoader = () => {
        if ( dataLoaded === false ) {
            return  <CircularProgress id="loader"/>;
        } else {
            return <ChildDetailsRenderer key={childObject.childNo} childObject={childObject}/>
        }
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
        <ShowLoader />
    ) 
}