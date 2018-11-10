import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { elastic as Menu } from 'react-burger-menu';

import avatar1 from '../../../public/avatar1.png';

class ProfileMenu extends React.Component {

    render(){
        
        let profileMenuClassName;                    
        const onToggleProfileMenu = () => {
            profileMenuClassName = this.state.profileMenuOpen ? 'profile-menu open' : 'profile-menu'; 
        }

        return (
            <div id="outer-container">
                <Menu right elastic width={ 280 } disableCloseOnEsc pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
                <main id="page-wrap">

                </main>
        
                    <div className="profile-menu">

                        <div className="profile-wrapper">
                            <div className="profile-image">
                                <img src={avatar1} alt=""/>
                            </div>
                            <h1><Link to="">Jhon Doe</Link></h1>
                            <small>20000 Credits</small>
                        </div>
                        <hr/>
                        <div className="d-flex align-items-center h-100 justify-content-center">
                            <ul className="menu-items">
                                <li><Link to="/admin/dashboard" onClick={onToggleProfileMenu}>Dashboard</Link></li>
                                <li><Link to="/userprofile" onClick={onToggleProfileMenu}>View Profile</Link></li>
                                <li><Link to="edit-profile" onClick={onToggleProfileMenu}>Edit Profile</Link></li>
                                <li><Link to="connect-brand" onClick={onToggleProfileMenu}>Create/Connect Brands</Link></li>
                                <li><Link to="create-job" onClick={onToggleProfileMenu}>Post a Job</Link></li>
                                <li><Link to="create-shop" onClick={onToggleProfileMenu}>Create a Shop</Link></li>
                                <li><Link to="/become-instructor" onClick={onToggleProfileMenu}>Become an Instructor</Link></li>
                                <li><Link to="/account-settings" onClick={onToggleProfileMenu}>Account Settings</Link></li>
                                <li><Link to="">Log Out</Link></li>
                            </ul>
                        </div>
                    </div>
                </Menu>
            </div>
        )
    }
};

export default ProfileMenu;

