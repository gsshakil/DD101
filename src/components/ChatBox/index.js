import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import avatar1 from '../../../public/avatar1.png';

class ChatBox extends React.Component{
    render(){
        return(
            <div className="chatbox">
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="user-list">
                                    <ul>
                                        <li className="o-h">
                                            <div className="user-info pull-left m-r-sm">
                                                <img className="profile-pic" src={avatar1} alt="" width="48px" height="48px"/>
                                            </div>
                                            <a href="">username</a><br/>
                                            <small>Lorem ipsum dolor sit...</small><br/>
                                            <small className="gloomy">on July 7, 2017</small>
                                        </li>
                                        <li className="o-h">
                                            <div className="user-info pull-left m-r-sm">
                                                <img className="profile-pic" src={avatar1} alt="" width="48px" height="48px"/>
                                            </div>
                                            <a href="">username</a><br/>
                                            <small>Lorem ipsum dolor sit...</small><br/>
                                            <small className="gloomy">on July 7, 2017</small>
                                        </li>
                                        <li className="o-h">
                                            <div className="user-info pull-left m-r-sm">
                                                <img className="profile-pic" src={avatar1} alt="" width="48px" height="48px"/>
                                            </div>
                                            <a href="">username</a><br/>
                                            <small>Lorem ipsum dolor sit...</small><br/>
                                            <small className="gloomy">on July 7, 2017</small>
                                        </li>
                                        <li className="o-h">
                                            <div className="user-info pull-left m-r-sm">
                                                <img className="profile-pic" src={avatar1} alt="" width="48px" height="48px"/>
                                            </div>
                                            <a href="">username</a><br/>
                                            <small>Lorem ipsum dolor sit...</small><br/>
                                            <small className="gloomy">on July 7, 2017</small>
                                        </li>
                                        <li className="o-h">
                                            <div className="user-info pull-left m-r-sm">
                                                <img className="profile-pic" src={avatar1} alt="" width="48px" height="48px"/>
                                            </div>
                                            <a href="">username</a><br/>
                                            <small>Lorem ipsum dolor sit...</small><br/>
                                            <small className="gloomy">on July 7, 2017</small>
                                        </li>
                                        <li className="o-h">
                                            <div className="user-info pull-left m-r-sm">
                                                <img className="profile-pic" src={avatar1} alt="" width="48px" height="48px"/>
                                            </div>
                                            <a href="">username</a><br/>
                                            <small>Lorem ipsum dolor sit...</small><br/>
                                            <small className="gloomy">on July 7, 2017</small>
                                        </li>
                                        <li className="o-h">
                                            <div className="user-info pull-left m-r-sm">
                                                <img className="profile-pic" src={avatar1} alt="" width="48px" height="48px"/>
                                            </div>
                                            <a href="">username</a><br/>
                                            <small>Lorem ipsum dolor sit...</small><br/>
                                            <small className="gloomy">on July 7, 2017</small>
                                        </li>
                                        <li className="o-h">
                                            <div className="user-info pull-left m-r-sm">
                                                <img className="profile-pic" src={avatar1} alt="" width="48px" height="48px"/>
                                            </div>
                                            <a href="">username</a><br/>
                                            <small>Lorem ipsum dolor sit...</small><br/>
                                            <small className="gloomy">on July 7, 2017</small>
                                        </li>
                                        <li className="o-h">
                                            <div className="user-info pull-left m-r-sm">
                                                <img className="profile-pic" src={avatar1} alt="" width="48px" height="48px"/>
                                            </div>
                                            <a href="">username</a><br/>
                                            <small>Lorem ipsum dolor sit...</small><br/>
                                            <small className="gloomy">on July 7, 2017</small>
                                        </li>
                                        <li className="o-h">
                                            <div className="user-info pull-left m-r-sm">
                                                <img className="profile-pic" src={avatar1} alt="" width="48px" height="48px"/>
                                            </div>
                                            <a href="">username</a><br/>
                                            <small>Lorem ipsum dolor sit...</small><br/>
                                            <small className="gloomy">on July 7, 2017</small>
                                        </li>
                                    </ul>
                                </div>
                                
                            </div>    
                            <div className="col-md-8 p-a-sm">
                                <div className="conversation">
                                    <div className="user-1">
                                        <div className="profile-pic">
                                            <img className="profile-pic" src={avatar1} alt="" width="48px" height="48px"/>                                                                                                                                                 
                                        </div>
                                        <div className="msg">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat voluptatibus sapiente corrupti laboriosam maxime quae nam dicta, totam facere, esse voluptas odit, officia voluptatum asperiores accusamus doloribus dolorem assumenda tempore?</p>
                                        </div>
                                    </div>
                                    <div className="user-2">
                                        <div className="msg">
                                            <p>Placeat voluptatibus sapiente corrupti laboriosam maxime quae nam dicta, totam facere</p>
                                        </div>
                                    </div>
                                    <div className="user-1">
                                        <div className="profile-pic">
                                            <img className="profile-pic" src={avatar1} alt="" width="48px" height="48px"/>                                                                                                                                                 
                                        </div>
                                        <div className="msg">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                                        </div>
                                    </div>
                                    <div className="user-2">
                                        <div className="msg">
                                            <p>Ok</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="msg-input-box m-t-sm">
                                    <textarea name="" id="" className="form-control" rows="2" placeholder="Share what is in your mind!"></textarea>
                                    <div className="keyboard">
                                        <ul className="list-inline pull-left">
                                            <li><a href=""><i className="fa fa-camera fa-md"></i></a></li>
                                            <li><a href=""><i className="fa fa-smile-o fa-md"></i></a></li>
                                            <li><a href=""><i className="fa fa-tags fa-md"></i></a></li>
                                            <li><a href=""><i className="fa fa-location-arrow fa-md"></i></a></li>
                                        </ul>
                                        
                                    </div>
                                    <div className="input-box-footer">
                                        <a href="" className="btn btn-primary pull-right m-t-sm">Send</a>
                                    </div>
                                </div>
                            </div>                        
                        </div>
                    </div>                    
                </div>
            </div>
        );
    }
}

export default ChatBox;