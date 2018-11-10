import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import avatar1 from '../../../public/brand1.png';

class ConnectBrand extends React.Component  {
    render (){        
        return(
            <div className="connect-brand">
               <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <h1>Connect with a Brand</h1>
                        <input type="text" className='form-control' value='Enter Brand Name'/>
                        <input type="text" className='form-control' value='Enter your Role in the Brand'/>
                        <Link to='' className="btn btn-outline-primary">Connect</Link>
                        <hr/>
                        <Link to='/create-brand' className="btn btn-outline-success">Create New Brand Profile</Link>                        
                    </div>
               </div>
            </div>
        );
    }    
};

export default ConnectBrand;

