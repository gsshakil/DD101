import React from 'react';

import AppCard from './AppCard';
import PeopleFilter from '../Common/PeopleFilter';

const AppList = () => {
    return (
        <div className="app-list">
            <div className="top-banner">
                <div className="content">
                    <h1>Discover Add-ons</h1>
                    <p className="m-b-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates unde alias incidunt deleniti fugiat iure quod perferendis officia labore corporis, quasi a accusamus soluta laudantium ipsa necessitatibus tenetur ducimus?</p>            
                    <button className="btn btn-outline-light btn-lg">Become a Developer</button>                    
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <div className="filter-wrapper p-r">
                        <PeopleFilter></PeopleFilter>
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="row">
                        <div className="col-md-4 m-b-sm"><AppCard></AppCard></div>
                        <div className="col-md-4 m-b-sm"><AppCard></AppCard></div>
                        <div className="col-md-4 m-b-sm"><AppCard></AppCard></div>
                        <div className="col-md-4 m-b-sm"><AppCard></AppCard></div>
                        <div className="col-md-4 m-b-sm"><AppCard></AppCard></div>
                        <div className="col-md-4 m-b-sm"><AppCard></AppCard></div>
                        <div className="col-md-4 m-b-sm"><AppCard></AppCard></div>
                    </div>
                </div>
            </div>
        </div>            
    )
};

export default AppList;

