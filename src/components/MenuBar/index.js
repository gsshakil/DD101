import React from 'react';

const MenuBar = () => {
    return (
        <div className="menu-bar">
            <ul>
                <li><a href=""><i className="zmdi zmdi-accounts infinite wobble"></i>People</a></li>
                <li><a href=""><i className="zmdi zmdi-group infinite wobble"></i>Brands</a></li>
                <li><a href=""><i className="zmdi zmdi-collection-folder-image infinite wobble"></i>Projects</a></li>
                <li><a href=""><i className="zmdi zmdi-shopping-basket infinite wobble"></i>Products</a></li>
                <li><a href=""><i className="zmdi zmdi-developer-board infinite wobble"></i>Jobs</a></li>
                <li><a href=""><i className="zmdi zmdi-balance infinite wobble"></i>Academy</a></li>
                <li><a href=""><i className="zmdi zmdi-dns infinite wobble"></i>Apps</a></li>
            </ul>
        </div>
    )
};

export default MenuBar;

