import React from 'react';
import MasonryInfiniteScroller from 'react-masonry-infinite';

import PeopleFilter from '../Common/PeopleFilter';
import ProjectCard from './ProjectCard';

import avatar from '../../../public/avatar1.png';
import projectImage1 from '../../../public/project1.gif';
import projectImage2 from '../../../public/project2.jpg';

class ProjectList extends React.Component {

    render(){   
        let sizes = [{ columns: 4, gutter: 10 }, 
            { mq: '360px', columns: 1, gutter: 0 }, 
            { mq: '768px', columns: 3, gutter: 10 }, 
            { mq: '1024px', columns: 4, gutter: 10 }
        ]     

        return (
            <div className="project-list">
                <div className="top-banner">
                    <div className="content">
                        <h1>Discover Creative Works</h1>
                        <p className="m-b-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates unde alias incidunt deleniti fugiat iure quod perferendis officia labore corporis, quasi a accusamus soluta laudantium ipsa necessitatibus tenetur ducimus?</p>            
                        <button className="btn btn-outline-light btn-lg">Upload Your Works</button>                    
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
                                <MasonryInfiniteScroller className = "masonry" sizes={sizes}>
                                    <ProjectCard projectImage={projectImage1} projectTitle="lorem ipsam dollor dan can firea ovita lijoyt munn to....." byAvatar={avatar} byUserName="Jhon Doe" category="categry" dateTime="August 20, 2019 12:39 PM" commentCount="2555"></ProjectCard>
                                    <ProjectCard projectImage={projectImage2} projectTitle="lorem ipsam dollor dan can firea ovita lijoyt munn to....." byAvatar={avatar} byUserName="Jhon Doe" category="categry" dateTime="August 20, 2019 12:39 PM" commentCount="2555"></ProjectCard>
                                    <ProjectCard projectImage={projectImage1} projectTitle="lorem ipsam dollor dan can firea ovita lijoyt munn to....." byAvatar={avatar} byUserName="Jhon Doe" category="categry" dateTime="August 20, 2019 12:39 PM" commentCount="2555"></ProjectCard>
                                    <ProjectCard projectImage={projectImage2} projectTitle="lorem ipsam dollor dan can firea ovita lijoyt munn to....." byAvatar={avatar} byUserName="Jhon Doe" category="categry" dateTime="August 20, 2019 12:39 PM" commentCount="2555"></ProjectCard>
                                    <ProjectCard projectImage={projectImage1} projectTitle="lorem ipsam dollor dan can firea ovita lijoyt munn to....." byAvatar={avatar} byUserName="Jhon Doe" category="categry" dateTime="August 20, 2019 12:39 PM" commentCount="2555"></ProjectCard>
                                    <ProjectCard projectImage={projectImage2} projectTitle="lorem ipsam dollor dan can firea ovita lijoyt munn to....." byAvatar={avatar} byUserName="Jhon Doe" category="categry" dateTime="August 20, 2019 12:39 PM" commentCount="2555"></ProjectCard>
                                    <ProjectCard projectImage={projectImage1} projectTitle="lorem ipsam dollor dan can firea ovita lijoyt munn to....." byAvatar={avatar} byUserName="Jhon Doe" category="categry" dateTime="August 20, 2019 12:39 PM" commentCount="2555"></ProjectCard>
                                    <ProjectCard projectImage={projectImage2} projectTitle="lorem ipsam dollor dan can firea ovita lijoyt munn to....." byAvatar={avatar} byUserName="Jhon Doe" category="categry" dateTime="August 20, 2019 12:39 PM" commentCount="2555"></ProjectCard>
                                    <ProjectCard projectImage={projectImage1} projectTitle="lorem ipsam dollor dan can firea ovita lijoyt munn to....." byAvatar={avatar} byUserName="Jhon Doe" category="categry" dateTime="August 20, 2019 12:39 PM" commentCount="2555"></ProjectCard>
                                    <ProjectCard projectImage={projectImage2} projectTitle="lorem ipsam dollor dan can firea ovita lijoyt munn to....." byAvatar={avatar} byUserName="Jhon Doe" category="categry" dateTime="August 20, 2019 12:39 PM" commentCount="2555"></ProjectCard>
                                    <ProjectCard projectImage={projectImage1} projectTitle="lorem ipsam dollor dan can firea ovita lijoyt munn to....." byAvatar={avatar} byUserName="Jhon Doe" category="categry" dateTime="August 20, 2019 12:39 PM" commentCount="2555"></ProjectCard>
                                    <ProjectCard projectImage={projectImage2} projectTitle="lorem ipsam dollor dan can firea ovita lijoyt munn to....." byAvatar={avatar} byUserName="Jhon Doe" category="categry" dateTime="August 20, 2019 12:39 PM" commentCount="2555"></ProjectCard>
                                    <ProjectCard projectImage={projectImage1} projectTitle="lorem ipsam dollor dan can firea ovita lijoyt munn to....." byAvatar={avatar} byUserName="Jhon Doe" category="categry" dateTime="August 20, 2019 12:39 PM" commentCount="2555"></ProjectCard>
                                    <ProjectCard projectImage={projectImage2} projectTitle="lorem ipsam dollor dan can firea ovita lijoyt munn to....." byAvatar={avatar} byUserName="Jhon Doe" category="categry" dateTime="August 20, 2019 12:39 PM" commentCount="2555"></ProjectCard>      
                                </MasonryInfiniteScroller>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default ProjectList;

