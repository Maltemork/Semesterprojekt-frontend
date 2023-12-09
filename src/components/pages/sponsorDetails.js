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

    try {
        const res = await fetch("http://localhost:3000/sponsors" + id);

        if (!res.ok) {
            throw new Error('failed to fetch detiails');
        }

        const sponsorData = await res.json();
        return sponsorData;
    } catch (error) {
        console.error(error);
    }
    return {
        title: 'sponsor Not found',
        name: 'try again',
        email: 'try again',
        state: 'try again',
        active: 'try again',
    }
}