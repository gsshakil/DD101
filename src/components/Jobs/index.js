import React from 'react';
import PeopleFilter from '../Common/PeopleFilter';
import JobCard from './JobCard';

const JobList = () => {
    return (
        <div className="job-list">
            <div className="top-banner">
                <div className="content">
                    <h1>Find Jobs</h1>
                    <p className="m-b-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates unde alias incidunt deleniti fugiat iure quod perferendis officia labore corporis, quasi a accusamus soluta laudantium ipsa necessitatibus tenetur ducimus?</p>            
                    <button className="btn btn-outline-light btn-lg">Post Jobs</button>                    
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
                                    <JobCard></JobCard>                                                            
                                </div>
                                <div className="col-md-4">
                                    <JobCard></JobCard>                                                            
                                </div>
                                <div className="col-md-4">
                                    <JobCard></JobCard>                                                            
                                </div>
                            </div>
                            <div className="row m-b-sm">
                                <div className="col-md-4">
                                    <JobCard></JobCard>                                                            
                                </div>
                                <div className="col-md-4">
                                    <JobCard></JobCard>                                                            
                                </div>
                                <div className="col-md-4">
                                    <JobCard></JobCard>                                                            
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default JobList;

