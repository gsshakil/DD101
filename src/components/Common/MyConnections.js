import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import ConnectionCard from './ConnectionCard';
import avatar1 from '../../../public/avatar1.png';


class MyConnections extends React.Component  {

    render (){

        return(
            <div className="my-connections">
               <div className="row">
                    <div className="col-md-3 m-b-sm">
                        <ConnectionCard></ConnectionCard>
                    </div>
                    <div className="col-md-3 m-b-sm">
                        <ConnectionCard></ConnectionCard>
                    </div>
                    <div className="col-md-3 m-b-sm">
                        <ConnectionCard></ConnectionCard>
                    </div>
                    <div className="col-md-3 m-b-sm">
                        <ConnectionCard></ConnectionCard>
                    </div>
                    <div className="col-md-3 m-b-sm">
                        <ConnectionCard></ConnectionCard>
                    </div>
                    <div className="col-md-3 m-b-sm">
                        <ConnectionCard></ConnectionCard>
                    </div>
                    <div className="col-md-3 m-b-sm">
                        <ConnectionCard></ConnectionCard>
                    </div>
                    <div className="col-md-3 m-b-sm">
                        <ConnectionCard></ConnectionCard>
                    </div>
               </div> 
            </div>
        );
    }    
};

export default MyConnections;



