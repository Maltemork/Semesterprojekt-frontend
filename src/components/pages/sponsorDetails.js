import { useParams } from "react-router-dom";

export default function SponsorDetails() {

    const { id } = useParams()
    return (
        <div className="sponsor-details">
            <h2> {id}</h2>
        
        </div>
        
    );
}