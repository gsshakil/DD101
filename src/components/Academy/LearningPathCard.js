import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import avatar1 from '../../../public/avatar1.png';

const LearningPathCard = () => {
    return(
        <div className="learning-path-card">
            <div className="lpc-image">
                <img src={avatar1} alt=""/>
            </div>
            <div className="content">
                <Link to="/learning-path-details"><h3>Learning Path Title</h3></Link>
                <h5>Categury</h5>
                <h5>6 Courses, 7 Tests</h5>
                <hr/>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis iusto accusantium consectetur voluptas suscipit quibusdam expedita nemo, ut, eius consequatur fugit necessitatibus distinctio laborum. Nostrum doloribus sed ab delectus eos?</p>
                <hr/>
                <h5>Price</h5>
                <button className="btn btn-outline-info">Join</button>
            </div>
        </div>
    );
}

export default LearningPathCard;