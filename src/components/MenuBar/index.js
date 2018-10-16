import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const MenuBar = () => {
    return (
        <div className="menu-bar">
            <ul>
                <li><Link to="/people"><i className="zmdi zmdi-accounts infinite wobble"></i>People</Link></li>
                <li><Link to="/brands"><i className="zmdi zmdi-group infinite wobble"></i>Brands</Link></li>
                <li><Link to="/projects"><i className="zmdi zmdi-collection-folder-image infinite wobble"></i>Projects</Link></li>
                <li><Link to="/products"><i className="zmdi zmdi-shopping-basket infinite wobble"></i>Products</Link></li>
                <li><Link to="/jobs"><i className="zmdi zmdi-developer-board infinite wobble"></i>Jobs</Link></li>
                <li><Link to="/academy"><i className="zmdi zmdi-balance infinite wobble"></i>Academy</Link></li>
                <li><Link to="/apps"><i className="zmdi zmdi-dns infinite wobble"></i>Apps</Link></li>
            </ul>
        </div>
    )
};

export default MenuBar;

