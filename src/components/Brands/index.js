import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import PeopleFilter from '../Common/PeopleFilter';
import BrandCard from './BrandCard';

const BrandList = () => {
    return (
        <div className="brand-list">
            <div className="top-banner">
                <div className="content">
                    <h1>Connect with the Creative Industry</h1>
                    <p className="m-b-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates unde alias incidunt deleniti fugiat iure quod perferendis officia labore corporis, quasi a accusamus soluta laudantium ipsa necessitatibus tenetur ducimus?</p>            
                    <Link to='create-brand' className="btn btn-outline-light btn-lg">Create Bussiness Profile</Link>                    
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
                        <div className="brand-card-wrapper">
                            <div className="row m-b-sm">
                                <div className="col-md-4">
                                    <BrandCard></BrandCard>                                                            
                                </div>
                                <div className="col-md-4">
                                    <BrandCard></BrandCard>                                                            
                                </div>
                                <div className="col-md-4">
                                    <BrandCard></BrandCard>                                                            
                                </div>
                            </div>
                            <div className="row m-b-sm">
                                <div className="col-md-4">
                                    <BrandCard></BrandCard>                                                            
                                </div>
                                <div className="col-md-4">
                                    <BrandCard></BrandCard>                                                            
                                </div>
                                <div className="col-md-4">
                                    <BrandCard></BrandCard>                                                            
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default BrandList;

