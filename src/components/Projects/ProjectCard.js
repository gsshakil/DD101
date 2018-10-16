import React from 'react';;

const ProjectCard = (props) =>  {
    return(
        <div className="project-card">
            <div className="content">
                <div className="avatar">
                    <img src={props.projectImage} alt=""/>
                </div>
                <div className="card-content">
                    <div className="inside-content">
                        <div className="centered-content">
                            <h3>{props.projectTitle}</h3>
                            <div className="by">
                                <img src={props.byAvatar} alt=""/>
                                <h4>{props.byUserName}</h4>
                            </div>
                            <ul className="categories">
                                <li><a href="">{props.category}</a></li>
                                <li><a href="">{props.category}</a></li>
                                <li><a href="">{props.category}</a></li>
                            </ul>
                            <div className="date-time">
                                <i className="zmdi zmdi-time infinite wobble"></i>{props.dateTime}
                            </div>
                        </div>                                
                    </div>
                </div>
            </div>
            <ul className="project-card-footer">
                <li><a href=""><i className="zmdi zmdi-favorite infinite wobble"></i></a></li>
                <li><a href=""><i className="zmdi zmdi-comments infinite wobble"></i> {props.commentCount}</a></li>
                <li><a href=""><i className="zmdi zmdi-eye infinite wobble"></i> {props.viewCount}</a></li>
            </ul>
        </div>
    );
};

export default ProjectCard;

