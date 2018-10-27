import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import avatar1 from '../../../public/avatar1.png';

const TestCard = () => {
    return(
        <div className="test-card">
            <div className="test-image">
                <img src={avatar1} alt=""/>
            </div>
            <div className="content">
                <Link to="/test-details"><h3>Test Title</h3></Link>
                <h5>Categury</h5>
                <hr/>
                <hr/>
                <h5>Price</h5>
                <button className="btn btn-outline-info">Taje Test</button>
            </div>
        </div>
    );
}

export default TestCard;