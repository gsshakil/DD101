import React from 'react';
import { elastic as Menu } from 'react-burger-menu';

const ProfileMenu = () => {
    return (
    <div id="outer-container">
        <Menu right elastic width={ 280 } disableCloseOnEsc pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
           <main id="page-wrap">

           </main>
 
            <div className="profile-menu">
                <div className="d-flex align-items-center h-100 justify-content-center">
                    Profile-menu
                </div>
            </div>
        </Menu>
    </div>
    )
};

export default ProfileMenu;

