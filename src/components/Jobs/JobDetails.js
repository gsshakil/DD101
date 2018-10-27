import React from 'react';;
import avatar1 from '../../../public/avatar1.png';

class JobDetails extends React.Component  {
    render (){        
        return(
            <div className="job-details">
                <h3>Job Title</h3>
                <h5>Job Type</h5>
                <h5>Job Location</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, natus totam aliquid veniam odio sapiente soluta illo sequi, debitis culpa reiciendis blanditiis optio quae repellendus dolores dolor ducimus ipsa harum.</p>
                <h5>Job Qualification</h5>
                <h5>Required Skills</h5>
                <h5>Sallary/Budget</h5>
            </div>
        );
    }    
};

export default JobDetails;

