import React from 'react';
import { useNavigate } from 'react-router-dom';

const ChildRenderer = ({ child }) => {
    const navigate = useNavigate();

    const handleRowClick = () => {
        navigate(`./${child.childNo}`);
    };

    return (
        <tr key={child.childNo} className="table-item" onClick={handleRowClick}>
            <td>{child.childNo}</td>
            <td>{child.name}</td>
            <td>{child.subitems}</td>
            <td>{child.sponsor}</td>
            <td>{child.gender}</td>
            <td>{child.getAge()}</td>
            <td>{new Date(child.birthdate).toLocaleDateString("en-DE")}</td>
            <td>{child.type}</td>
            <td>{child.school}</td>
            <td>{new Date(child.schoolStart).toLocaleDateString("en-DE")}</td>
            <td>{child.class}</td>
        </tr>
    );
};


export default ChildRenderer;