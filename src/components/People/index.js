import React from 'react';
import PeopleFilter from '../Common/PeopleFilter';
import PeopleCard from './PeopleCard';

const PeopleList = () => {
    return (
        <div className="people-list">
            <div className="top-banner">
                <div className="content">
                    <h1>Connect with Creative Professionals</h1>
                    <p className="m-b-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates unde alias incidunt deleniti fugiat iure quod perferendis officia labore corporis, quasi a accusamus soluta laudantium ipsa necessitatibus tenetur ducimus?</p>            
                    <button className="btn btn-outline-light btn-lg">Create Your Profile</button>                    
                </div>
            </div>
            <div className="list-wrapper">
                <div className="row">
                    <div className="col-md-3 p-r">
                        <div className="filter-wrapper">
                            <PeopleFilter></PeopleFilter>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="people-card-wrapper">
                            <div className="row m-b-sm">
                                <div className="col-md-4">
                                    <PeopleCard></PeopleCard>                                                            
                                </div>
                                <div className="col-md-4">
                                    <PeopleCard></PeopleCard>                                                            
                                </div>
                                <div className="col-md-4">
                                    <PeopleCard></PeopleCard>                                                            
                                </div>
                            </div>
                            <div className="row m-b-sm">
                                <div className="col-md-4">
                                    <PeopleCard></PeopleCard>                                                            
                                </div>
                                <div className="col-md-4">
                                    <PeopleCard></PeopleCard>                                                            
                                </div>
                                <div className="col-md-4">
                                    <PeopleCard></PeopleCard>                                                            
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default PeopleList;

