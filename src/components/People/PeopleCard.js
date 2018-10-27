import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import avatar1 from '../../../public/avatar1.png';

class PeopleCard extends React.Component  {
    render (){        
        return(
            <div className="people-card">
                <div className="content">
                    <div className="avatar">
                        <img src={avatar1} alt=""/>
                    </div>
                    <div className="user-info">
                        <Link to="/people-details"><h2 className="name">Jhon Doe</h2></Link>
                        <p className="occupation">Architect, Serial Enterprenur</p>
                        <p className="location">Dhaka, Bangladesh</p>
                    </div>
                    <div className="bio">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit....</p>
                    </div>
                </div>
                <div className="button-group">
                    <ul>
                        <li><button className="btn btn-outline-info btn-lg">Connect</button></li>
                        <li><button className="btn btn-outline-success btn-lg">Message</button></li>
                    </ul>
                </div>
            </div>
        );
    }    
};

export default PeopleCard;

