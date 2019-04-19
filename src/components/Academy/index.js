import React from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Typography from '@material-ui/core/Typography';

import PeopleFilter from '../Common/PeopleFilter';
import LearningPathCard from './LearningPathCard';
import CourseCard from './CourseCard';
import TestCard from './TestCard';

function TabContainer(props) {
    return (
      <Typography component="div" style={{ padding: 8 * 3 }}>
        {props.children}
      </Typography>
    );
  }
  
  TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
  };
  
  const styles = theme => ({
    root: {
      flexGrow: 1,
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
  });

class AcademyLanding extends React.Component {
    
    state = {
        valueSeacondaryTabsAcademy: 0,
    };

    handleChangeAcadmey = (event, valueSeacondaryTabsAcademy) => {
        this.setState({ valueSeacondaryTabsAcademy });
    };

    render(){

        const { value, valueSecondaryTabsNetwork, valueSeacondaryTabsJobs, valueSeacondaryTabsAcademy } = this.state;

        return (
            <div className="academy-landing">
                <div className="top-banner">
                    <div className="content">
                        <h1>Discover Courses, Learning Paths and Preparation Tests</h1>
                        <p className="m-b-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates unde alias incidunt deleniti fugiat iure quod perferendis officia labore corporis, quasi a accusamus soluta laudantium ipsa necessitatibus tenetur ducimus?</p>            
                        <button className="btn btn-outline-light btn-lg">Become an Instructor</button>                    
                    </div>
                </div>
                <AppBar position="static" color="default">
                    <Tabs
                        value={valueSeacondaryTabsAcademy}
                        onChange={this.handleChangeAcadmey}
                        indicatorColor="primary"
                        textColor="primary"
                        scrollable
                        scrollButtons="auto"
                    >
                        <Tab label="Learning Paths" />
                        <Tab label="Courses" />
                        <Tab label="Tests" />
                    </Tabs>
                </AppBar>
                {valueSeacondaryTabsAcademy === 0 && <TabContainer>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="filter-wrapper p-r">
                                <PeopleFilter></PeopleFilter>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="row">
                                <div className="col-md-4 m-b-sm"><LearningPathCard></LearningPathCard></div>
                                <div className="col-md-4 m-b-sm"><LearningPathCard></LearningPathCard></div>
                                <div className="col-md-4 m-b-sm"><LearningPathCard></LearningPathCard></div>
                                <div className="col-md-4 m-b-sm"><LearningPathCard></LearningPathCard></div>
                                <div className="col-md-4 m-b-sm"><LearningPathCard></LearningPathCard></div>
                                <div className="col-md-4 m-b-sm"><LearningPathCard></LearningPathCard></div>
                            </div>
                        </div>
                    </div>
                </TabContainer>}
                {valueSeacondaryTabsAcademy === 1 && <TabContainer>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="filter-wrapper p-r">
                                <PeopleFilter></PeopleFilter>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="row">
                                <div className="col-md-4 m-b-sm"><CourseCard></CourseCard></div>
                                <div className="col-md-4 m-b-sm"><CourseCard></CourseCard></div>
                                <div className="col-md-4 m-b-sm"><CourseCard></CourseCard></div>
                                <div className="col-md-4 m-b-sm"><CourseCard></CourseCard></div>                               
                                <div className="col-md-4 m-b-sm"><CourseCard></CourseCard></div>                               
                                <div className="col-md-4 m-b-sm"><CourseCard></CourseCard></div>                               
                                <div className="col-md-4 m-b-sm"><CourseCard></CourseCard></div>                               
                                <div className="col-md-4 m-b-sm"><CourseCard></CourseCard></div>                               
                            </div>
                        </div>
                    </div>
                </TabContainer>}
                {valueSeacondaryTabsAcademy === 2 && <TabContainer>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="filter-wrapper p-r">
                                <PeopleFilter></PeopleFilter>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="row">
                                <div className="col-md-4 m-b-sm"><TestCard></TestCard></div>
                                <div className="col-md-4 m-b-sm"><TestCard></TestCard></div>
                                <div className="col-md-4 m-b-sm"><TestCard></TestCard></div>
                                <div className="col-md-4 m-b-sm"><TestCard></TestCard></div>
                                <div className="col-md-4 m-b-sm"><TestCard></TestCard></div>
                                <div className="col-md-4 m-b-sm"><TestCard></TestCard></div>
                                <div className="col-md-4 m-b-sm"><TestCard></TestCard></div>
                            </div>
                        </div>
                    </div>
                </TabContainer>}
            </div>
        )
    }
};

AcademyLanding.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AcademyLanding);

