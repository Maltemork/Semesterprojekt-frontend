import React, { useState } from 'react';
import '../App.css';
import "../styling/Sidebar.css";
import { SidebarData } from "./SidebarData";
import MenuIcon from '@mui/icons-material/Menu';

function Sidebar() {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);

    // Object for sidebar data.
    const sidebarList = SidebarData.map((val, key) => {
        return (
            <li key={key} onClick={()=> {window.location.pathname = val.link}}
            className={window.location.pathname === val.link ? "row active" : "row"}
            >
                <div className="row-icon" key={key.id}>{val.icon}</div>
                <div className="row-title" key={key.id} style={{display:isOpen ? "block" : "none"}}>{val.title}</div>                                                
            </li>
        )});

    // Render sidebar
    return (
            <div className="Sidebar" key="Sidebar-main" style={{width:isOpen ? "250px" : "75px"}}>
                <div className="MenuIcon" onClick={toggle}><MenuIcon /></div>
                <ul className='SidebarList'>
                    {sidebarList}
                </ul>
            </div>
    )
}



export default Sidebar;