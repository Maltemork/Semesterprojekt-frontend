// Essential
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { deleteObject } from "../crud/getData";
import { DeleteDialog } from '../crud/deleteDialog';

// Styling
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import BedroomBabyIcon from '@mui/icons-material/BedroomBaby';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const ChildDetailsRenderer = ({ childObject }) => {
    const navigate = useNavigate();

    // // DIALOG SECTION // //
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
      };


    // // BUTTONS SECTION // //

    // ROUTE USER TO THE EDIT PAGE FOR THE OBJECT.
    function handleEditButton() {
        navigate("./edit");
    }


    // OPEN DELETE DIALOG ON DELETE BUTTON CLICK
    function handleDeleteButton() {
        setOpen(true);
    }

    // SEND REQUEST TO DELETE OBJECT IN THE DATABASE
    function handleDelete() {
        deleteObject("children", childObject.childNo)
        setOpen(false);
        setTimeout(() => {
            navigate("../children");
        }, "1000")
       
    }

    // HTML FOR DETAILS
    function DetailHTML({childObject}) {
        return (<div className="detail-text-container">
                    <h2 className="detail-view-title">{childObject.name}</h2>
    
                    <label htmlFor="name">Full name:</label>
                    <p name="name">{childObject.name}</p>
    
                    <label htmlFor="childNo">Child Number:</label>
                    <p name="childNo">{childObject.childNo}</p>
    
                    <label htmlFor="sponsor">Sponsor:</label>
                    <Link to={childObject.sponsoredBy && `../sponsors/` + childObject.sponsoredBy } name="sponsor">
                        {childObject.sponsoredBy ? childObject.sponsoredBy : ""}
                    </Link>
    
                    <label htmlFor="sponsor1">Previous sponsor:</label>
                    <Link to={childObject.previousSponsor && `../sponsors/` + childObject.previousSponsor } name="sponsor1">
                        {childObject.previousSponsor ? childObject.previousSponsor : ""}
                    </Link>
    
                    <label htmlFor="sponsor2">Additional sponsors:</label>
                    <Link to={childObject.additionalSponsor && `../sponsors/` + childObject.additionalSponsor } name="sponsor2">
                        {childObject.additionalSponsor ? childObject.additionalSponsor : ""}
                    </Link>
    
                    <hr></hr>
    
                    <label htmlFor="gender">Gender</label>
                    <p>{childObject.gender === "F" ? "Female" : "Male"}</p>
    
                    <label htmlFor="country">Country:</label>
                    <p name="country">{childObject.subitems}</p>
    
                    <label htmlFor="age">Age:</label>
                    <p>{childObject && childObject.getAge ? childObject.getAge() : "Unable to compute"}</p>
    
                    <label htmlFor="birthdate">Birthdate: </label>
                    <p>{new Date(childObject.birthdate).toLocaleDateString("en-DE")}</p>
                    
                    <label htmlFor="school">School:</label>
                    <p>{childObject.school}</p>
                    
                    <label htmlFor="schooltype">School type: </label>
                    <p name="schooltype">{childObject.type}</p>
    
                    <label htmlFor="schoolstart">School start: </label>
                    <p name="schoolstart">{new Date(childObject.schoolStart).toLocaleDateString("en-DE")}</p>  
    
                    <label htmlFor="class">Class:</label>
                    <p name="class">{childObject.class}</p>               
    
    
                    <hr></hr>
                    <label htmlFor="notes">Notes:</label>
                    <p></p>
                    <p name="notes" className="detail-notes"> {childObject.notes ? childObject.notes : "No notes yet."}</p>
                </div>);
    }


    return (
        <div className="detail-view">
            {/* BACK BUTTON */} 
            <Link to={"/children/"}>
                <ArrowBackIcon id="back-arrow-details" />
            </Link>
            <div className="detail-card">
                {/* DETAIL ICON */}
                <BedroomBabyIcon id="icon"/>
                {/* DETAIL TEXT */}
                <DetailHTML   childObject={childObject}  />
                {/* BUTTONS */}
                <Stack direction="row" spacing={2} className="detail-buttons">
                    <Button variant="contained" onClick={handleEditButton}><EditIcon /></Button>
                    <Button variant="contained" onClick={handleDeleteButton} style={{'backgroundColor': 'red'}}><DeleteForeverIcon /></Button>
                </Stack>
                {/* DIALOG */}
                <DeleteDialog   open={open} handleClose={handleClose} handleDelete={handleDelete} object={childObject} />
            </div>
            
        </div>
    );
};




  export default ChildDetailsRenderer;