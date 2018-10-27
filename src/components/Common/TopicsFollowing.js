import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import TopicFollowingCard from './ToppicFollowingCard';

import avatar1 from '../../../public/avatar1.png';


class TopicsFollowing extends React.Component  {

    render (){

        return(
            <div className="topics-following">
                <div className="row">
                    <div className="col-md-3 m-b-sm"><TopicFollowingCard></TopicFollowingCard></div>
                    <div className="col-md-3 m-b-sm"><TopicFollowingCard></TopicFollowingCard></div>
                    <div className="col-md-3 m-b-sm"><TopicFollowingCard></TopicFollowingCard></div>
                    <div className="col-md-3 m-b-sm"><TopicFollowingCard></TopicFollowingCard></div>
                    <div className="col-md-3 m-b-sm"><TopicFollowingCard></TopicFollowingCard></div>
                    <div className="col-md-3 m-b-sm"><TopicFollowingCard></TopicFollowingCard></div>
                    <div className="col-md-3 m-b-sm"><TopicFollowingCard></TopicFollowingCard></div>
                    <div className="col-md-3 m-b-sm"><TopicFollowingCard></TopicFollowingCard></div>
                </div>
            </div>
        );
    }    
};

export default TopicsFollowing;

