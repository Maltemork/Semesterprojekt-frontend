import React from "react";
import { Link } from "react-router-dom";
import { AddSectionRoutes } from "../Routes";
import "../../styling/Add.css";
import GroupIcon from "@mui/icons-material/Group";
import BedroomBabyIcon from "@mui/icons-material/BedroomBaby";
import PaymentIcon from "@mui/icons-material/Payment";

const icons = [GroupIcon, BedroomBabyIcon, PaymentIcon];
const buttonTitles = ["Sponsor", "Child", "Payment"];

const Add = () => {
  console.log("Add Page");

  const AddButtons = AddSectionRoutes.map((item, key) => {
    const Icon = icons[key];
    const buttonTitle = buttonTitles[key];
    return (
      <div key={key}>
        <Link to={item.path}>
          <button className="add-button">
            <Icon id={"add-button-icon"} />
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
