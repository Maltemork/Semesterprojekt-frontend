export const SponsorRenderer = {
    HandleItemClick(location) {
        window.location.href = `./sponsors/${location}`;
      },

    render(sponsor) {
        const sponsorHTML =
            <tr key={sponsor.id} className="table-item" onClick={() => window.location.href = `./sponsors/${sponsor.customerId}`}>
                <td>{sponsor.customerId}</td>
                <td>{sponsor.subitems}</td>
                <td>{sponsor.name}</td>
                <td>{sponsor.email}</td>
                <td>+{sponsor.phone}</td>
                <td>{sponsor.type}</td>
                <td>{sponsor.reepayHandleDonations}</td>
                <td>{sponsor.reepayHandlePeriamma}</td>
                <td>{sponsor.foreningLetID}</td>
                <td>{sponsor.active ? "✔️" : "❌"}</td>
            </tr>;
        return sponsorHTML;
    }
}