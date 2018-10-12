import React from 'react';;
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
                        <h2 className="name">Jhon Doe</h2>
                        <p className="occupation">Architect, Serial Enterprenur</p>
                        <p className="location">Dhaka, Bangladesh</p>
                    </div>
                    <div className="bio">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit....</p>
                    </div>
                    <div className="skills">
                        <ul className="list-inline">
                            <li>skill</li>
                            <li>skill</li>
                            <li>skill</li>
                            <li>skill</li>
                            <li>skill</li>
                            <li>skill</li>
                            <li>skill</li>
                            <li>skill</li>
                            <li>skill</li>
                            <li>skill</li>
                        </ul>
                    </div>
                </div>
                <div className="sample-works">
                    <ul className="list-inline">
                        <li><img src={avatar1} alt=""/></li>
                        <li><img src={avatar1} alt=""/></li>
                        <li><img src={avatar1} alt=""/></li>
                    </ul>
                </div>
            </div>
        );
    }    
};

export default PeopleCard;

