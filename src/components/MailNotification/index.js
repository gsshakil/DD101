import React from 'react';

const MailNotification = () => {
    $('.messages-list').slimscroll({
        height: '280px'
    });
    return (
        <div className="messages-list profile-menu">
            <div className="d-flex align-items-center h-100 justify-content-center">
                Profile-menu
            </div>
        </div>
    )
};

export default MailNotification;

