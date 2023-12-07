import { useLoaderData, useParams } from "react-router-dom";

export default function SponsorDetails() {

    const { id } = useParams()
    const sponsor = useLoaderData()
    return (
        <div className="sponsor-details">
            <h2> Sponsor Details for {sponsor.title}</h2>
            <p>Sponsor Full Name: {sponsor.name}</p>
            <p>Sponsor Email: {sponsor.email}</p>
            <p>Sponsor Private/business: {sponsor.state}</p>
            <p>Sponsor CPR/CVR: {sponsor.active}</p>
            <div className="details">
                <p></p>
        </div>
        
        </div>
        
    );
}

export const careerDetailsLoader = async ({ params }) => {
    const { id } = params

    const res = await fetch("http://localhost:3000/sponsors" + id);

    return res.json()
}