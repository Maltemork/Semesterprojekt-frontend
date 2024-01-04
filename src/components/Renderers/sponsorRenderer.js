import { useNavigate } from "react-router-dom";

export const SponsorRenderer = ({ sponsor }) => {
  const navigate = useNavigate();

  const handleRowClick = () => {
    navigate(`./${sponsor.sponsorId}`);
  };

  return (
    <tr key={sponsor.id} className="table-item" onClick={handleRowClick}>
      <td>{sponsor.sponsorId}</td>
      <td>{sponsor.name}</td>
      <td>{sponsor.subitems ? sponsor.subitems : "None"}</td>
      <td>{sponsor.email}</td>
      <td>+{sponsor.phone}</td>
      <td>{sponsor.type}</td>
      <td>{sponsor.reepayHandleDonations}</td>
      <td>{sponsor.reepayHandlePeriamma}</td>
      <td>{sponsor.foreningLetID}</td>
      <td style={sponsor.active ? { color: "green" } : { color: "red" }}>
        {sponsor.active ? "✓" : "✕"}
      </td>
    </tr>
  );
};
