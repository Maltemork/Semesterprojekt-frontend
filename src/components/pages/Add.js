import React from "react";
import { Link } from "react-router-dom";
import { AddSectionRoutes } from "../Routes";
import "../../styling/Add.css"
import PersonIcon from "@mui/icons-material/Person";
import PublicIcon from "@mui/icons-material/Public";
import PaymentIcon from "@mui/icons-material/Payment";

const icons = [PersonIcon, PublicIcon, PaymentIcon];
const buttonTitles = ["Sponsor", "Child", "Payment"];

const Add = () => {
  console.log("Add Page");

  const AddButtons = AddSectionRoutes.map((item, key) => {
    const Icon = icons[key];
    const buttonTitle = buttonTitles[key];
    return (
      
        <div>
          <Link to={item.path} key={key}>
          <button className="add-button">
            <Icon id={"add-button-icon"}/>
          </button>
          </Link>
          <p className="add-title">{buttonTitle}</p>
        </div>
      
    );
  });

  return (
    <div className="add-section">
      <h1>Add a new entry</h1>
      <br />
      <p>What would you like to add?</p>
      <br />
      <div className="addButtons">{AddButtons}</div>
    </div>
  );
};
export default Add;
