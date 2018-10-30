import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import avatar1 from '../../../public/avatar1.png';
import feed1 from '../../../public/feed1.jpg';

class NewsFeed extends React.Component{
    render(){
        return(
            <div className="news-feed">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="feed-card">
                            <div className="feed-header">
                                <div className="byAvatar">
                                    <img src={avatar1} alt=""/>
                                </div>
                                <Link to="">Jhon Doe</Link> posted a new Project.
                                <small>29 Oct, 2018 12:10 PM</small>
                            </div>
                            <div className="feed content">
                                <img src={feed1} alt=""/>
                            </div>
                            <div className="feed-footer">
                                <ul>
                                    <li><Link to="">Like</Link></li>
                                    <li><Link to="">Comment</Link></li>
                                    <li><Link to="">Share</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewsFeed;