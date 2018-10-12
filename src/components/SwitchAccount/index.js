import React from 'react';

const SwitchAccount = () => {
    $('.messages-list').slimscroll({
        height: '280px'
    });
    return (
        <div className="messages-list">
            <div className="d-flex align-items-center h-100 justify-content-center">
                Switch Account
            </div>
        </div>
    )
};

export default SwitchAccount;

