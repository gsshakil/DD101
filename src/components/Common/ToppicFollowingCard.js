import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import avatar1 from '../../../public/avatar1.png';


class TopicFollowingCard extends React.Component  {

    render (){

        return(
            <div className="my-connections">
                <div className="topic-following-card">
                    <div className="content">
                        <div className="avatar">
                            <img src={avatar1} alt=""/>
                        </div>
                        <div className="user-info">
                            <Link to="/people-details"><h3 className="name">Architecture</h3></Link>
                        </div>
                    </div>
                    <div className="button-group">
                        <ul>
                            <button className="btn btn-outline-info">Unfollow</button>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }    
};

export default TopicFollowingCard;

