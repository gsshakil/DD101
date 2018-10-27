import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import avatar1 from '../../../public/avatar1.png';

class ConnectionCard extends React.Component  {
    render(){
        return(
            <div className="connection-card">
                <div className="content">
                    <div className="avatar">
                        <img src={avatar1} alt=""/>
                    </div>
                    <div className="user-info m-b-xs">
                        <Link to="/people-details"><h3 className="name">Jhon Doe</h3></Link>
                        <p className="occupation">Architect, Serial Enterprenur</p>
                        <p className="location">Dhaka, Bangladesh</p>
                    </div>
                </div>
                <div className="button-group">
                    <button className="btn btn-outline-info">Disconnect</button>
                </div>
            </div>
        );
    }
}

export default ConnectionCard;