import React, { useState, useEffect } from 'react';
import '../App.css';
import "../styling/Sidebar.css";
import { SidebarData } from "./SidebarData";
import MenuIcon from '@mui/icons-material/Menu';

function Sidebar() {
    // These functions remember the state of the sidebar across pages. This way the sidebar won't change when the page changes.

    const [isOpen, setIsOpen] = useState(() => {
      // Retrieve the stored value from local storage or default to false
      return localStorage.getItem('isOpenState') === 'true';
    });
  
    // useEffect to update local storage whenever isOpen changes
    useEffect(() => {
      localStorage.setItem('isOpenState', isOpen);
    }, [isOpen]);
  
    const toggle = () => {
      // Update the state based on the current value
      setIsOpen((prevIsOpen) => !prevIsOpen);
    };
  
    const sidebarList = SidebarData.map((val, key) => {
      return (
        <li
          key={key}
          onClick={() => {
            window.location.pathname = val.link;
          }}
          className={window.location.pathname === val.link ? 'row active' : 'row'}
        >
          <div className="row-icon" key={key.id}>
            {val.icon}
          </div>
          <div
            className="row-title"
            key={key.id}
            style={{ display: isOpen ? 'block' : 'none' }}
          >
            {val.title}
          </div>
        </li>
      );
    });
  
    return (
      <div
        className="Sidebar"
        style={{ width: isOpen ? '200px' : '75px' }}
      >
        <div className="MenuIcon" onClick={toggle}>
          <MenuIcon />
        </div>
        <ul className="SidebarList">{sidebarList}</ul>
      </div>
    );
  }
  
  export default Sidebar;