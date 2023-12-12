// Essential
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { deleteObject } from "../crud/getData";

// Styling
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import BedroomBabyIcon from '@mui/icons-material/BedroomBaby';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const ChildDetailsRenderer = ({ childObject }) => {
    const navigate = useNavigate();

    // DIALOG SECTION
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
      };

    // BUTTONS SECTION

    function handleEditButton() {
        
        console.log(`edit for ${ childObject.id } clicked`);
        navigate("./edit");
    }

    function handleDeleteButton() {
        setOpen(true);
    }

    function handleDelete() {
        deleteObject("children", childObject.childNo)
        setOpen(false);
        setTimeout(() => {
            navigate("../children");
        }, "1000")
       
    }


    return (
        
        <div className="detail-view">
            <Link to="../children">
                <ArrowBackIcon id="back-arrow-details"/>
            </Link>
            <div className="detail-card">
                
                <BedroomBabyIcon id="icon"/>
                <div className="detail-text-container">
                    <h2 className="detail-view-title">{ childObject.name }</h2>

                    <label htmlFor="name">Full name:</label>
                    <p name="name">{ childObject.name }</p>

                    <label htmlFor="childNo">Child Number:</label>
                    <p name="childNo">{ childObject.childNo }</p>

                    <label htmlFor="sponsor">Sponsor:</label>
                    <p name="sponsor">{ childObject.sponsor ? childObject.sponsor : "None"}</p>

                    <label htmlFor="sponsor1">Previous sponsor:</label>
                    <p name="sponsor">{ childObject.previousSponsor ? childObject.previousSponsor : "None"}</p>

                    <label htmlFor="sponsor2">Additional sponsors:</label>
                    <p name="sponsor">{ childObject.additionalSponsor ? childObject.additionalSponsor : "None"}</p>

                    <hr></hr>

                    <label htmlFor="gender">Gender</label>
                    <p>{ childObject.gender === "F" ? "Female" : "Male" }</p>

                    <label htmlFor="country">Country:</label>
                    <p name="country">{ childObject.subitems}</p>

                    <label htmlFor="age">Age:</label>
                    <p>{ childObject && childObject.getAge ? childObject.getAge() : "Unable to compute" }</p>

                    <label htmlFor="birthdate">Birthdate: </label>
                    <p>{new Date(childObject.birthdate).toLocaleDateString("en-DE")}</p>
                    
                    <label htmlFor="school">School:</label>
                    <p>{ childObject.school }</p>
                    
                    <label htmlFor="schooltype">School type: </label>
                    <p name="schooltype">{ childObject.type }</p>

                    <label htmlFor="schoolstart">School start: </label>
                    <p name="schoolstart">{ new Date(childObject.schoolStart).toLocaleDateString("en-DE") }</p>  

                    <label htmlFor="class">Class:</label>
                    <p name="class">{childObject.class}</p>               


                    <hr></hr>
                    <label htmlFor="notes">Notes:</label>
                    <p></p>
                    <p name="notes" className="detail-notes"> {childObject.notes ? childObject.notes : "No notes yet."}</p>
                    </div>
                <div>
                </div>
                <Stack direction="row" spacing={2} className="detail-buttons">
                    <Button variant="contained" onClick={handleEditButton}><EditIcon /></Button>
                    <Button variant="contained" onClick={handleDeleteButton} style={{'backgroundColor': 'red'}}><DeleteForeverIcon /></Button>
                </Stack>
                {/* DIALOG SECTION */}
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    className="dialog"
                >
                    <DialogTitle id="alert-dialog-title">
                    Delete { childObject.name } from the database?
                    </DialogTitle>
                    <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        You are about to delete { childObject.name }. This deletion is irreversible and will completely remove all relations to this child in the database. <br/>
                        Are you sure you want to delete { childObject.name }?
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} id="disagree" autoFocus>Cancel</Button>
                        <Button onClick={handleDelete} id="agree">
                            Delete { childObject.name }
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
            
        </div>
    );
};


export default ChildDetailsRenderer;