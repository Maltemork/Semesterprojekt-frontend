import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../App.css";
import "../styling/Sidebar.css";
import { SidebarData } from "./SidebarData";
import { AppRoutes } from "./Routes";
import MenuIcon from "@mui/icons-material/Menu";

function Sidebar() {
  // These functions remember the state of the sidebar across pages. This way the sidebar won't change when the page changes.

  const [isOpen, setIsOpen] = useState(() => {
    // Retrieve the stored value from local storage or default to false
    return localStorage.getItem("isOpenState") === "true";
  });

  // useEffect to update local storage whenever isOpen changes

  const toggle = () => {
    // Update the state based on the current value
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const location = useLocation();

  const sidebarDataAndRoutes = SidebarData.map((item, key) => {
    const correspondingRoute = AppRoutes[key].path;
    return {
      ...item,
      route: correspondingRoute,
    };
  });

  const sidebarList = sidebarDataAndRoutes.map((item, key) => {
    return (
      <li
        key={key}
        className={location.pathname.slice(0, location.pathname.lastIndexOf("/")) === item.route || location.pathname === item.route ? "row active" : "row"}
      >
        <Link to={item.route}>
          <div className="row-icon"> {item.icon} </div>
          <div
            className="row-title"
            style={{ display: isOpen ? "block" : "none" }}
          >
            <p>{item.title}</p> 
          </div>
        </Link>
      </li>
    );
  });

  return (
    <div className="Sidebar" style={{ width: isOpen ? "200px" : "75px" } } onMouseEnter={setIsOpen} onMouseLeave={toggle}>
      <div className="MenuIcon">
        <MenuIcon />
      </div>
      <ul className="SidebarList">{sidebarList}</ul>
    </div>
  );
}

export default Sidebar;
