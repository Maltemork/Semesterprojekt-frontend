import React from "react";
import { Link } from "react-router-dom";
import { AddSectionRoutes } from "../Routes";
import PersonIcon from "@mui/icons-material/Person";
import PublicIcon from "@mui/icons-material/Public";
import PaymentIcon from "@mui/icons-material/Payment";

const icons = [PersonIcon, PublicIcon, PaymentIcon];
const buttonTitles = ["Sponsor", "Child", "Payment"];

const Add = () => {
  console.log("Add Page");

  const addButtons = AddSectionRoutes.map((item, key) => {
    const Icon = icons[key];
    const buttonTitle = buttonTitles[key];
    return (
      <Link to={item.path} key={key}>
        <button>
          <Icon />
          {buttonTitle}
        </button>
      </Link>
    );
  });

  return (
    <>
      <h1>Add a new entry</h1>
      <br />
      <p>What would you like to add?</p>
      <br />
      <div className="addButtons">{addButtons}</div>
    </>
  );
};
export default Add;
