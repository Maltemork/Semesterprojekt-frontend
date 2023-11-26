import React from 'react';
import '../App.css';
import "../styling/Sidebar.css";
import { SidebarData } from "./SidebarData";
import MenuIcon from '@mui/icons-material/Menu';

const _menuIcon = [
    <div>{ MenuIcon }</div>
];

function Sidebar() {
    return (
        <div className="Sidebar">
            <ul className='SidebarList'>
                {_menuIcon}
                {SidebarData.map((val, key) => {
                    return (
                        <li key={key} onClick={()=> {window.location.pathname = val.link}} className="row" 
                        id={window.location.pathname === val.link ? "active" : ""}
                        >
                            <div className="row-icon">{val.icon}</div>
                            <div className="row-title">{val.title}</div>                                                
                        </li>
                    )})
                }
            </ul>
        </div>
    )
}

export default Sidebar;