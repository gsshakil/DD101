import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import avatar1 from '../../../public/brand1.png';

const Cart = () => {
    $('.messages-list').slimscroll({
        height: '280px'
    });
    return (
        <div className="messages-list">
            <div className="d-flex align-items-center h-100 justify-content-center">
                <ul>
                    <li><Link to="">
                        <img src={avatar1} alt=""/>
                        <h3>Account Title</h3>
                        <p>32 Notifications</p>
                        <p>22 Messages</p>
                    </Link></li>
                    <li><Link to="">
                        <img src={avatar1} alt=""/>
                        <h3>Account Title</h3>
                        <p>32 Notifications</p>
                        <p>22 Messages</p>
                    </Link></li>
                    <li><Link to="">
                        <img src={avatar1} alt=""/>
                        <h3>Account Title</h3>
                        <p>32 Notifications</p>
                        <p>22 Messages</p>
                    </Link></li>
                </ul>
            </div>
        </div>
    )
};

export default Cart;

