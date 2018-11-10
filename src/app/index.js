import React from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {toggleCollapsedNav} from 'actions/index';

import Header from 'components/Header/index';
import MenuBar from 'components/MenuBar/index';
import Sidebar from 'containers/SideNav/index';
import MyConnections from 'components/Common/Myconnections';
import TopicsFollowing from 'components/Common/TopicsFollowing';
import PeopleList from 'components/People/index';
import PeopleDetails from 'components/People/PeopleDetails';
import BrandList from 'components/Brands/index';
import BrandDetails from 'components/Brands/BrandDetails';
import ConnectBrand from 'components/Brands/ConnectBrand';
import ProjectList from 'components/Projects/index';
import ProductList from 'components/Products/index';
import JobList from 'components/Jobs/index';
import JobDetails from 'components/Jobs/JobDetails';
import AcademyLanding from 'components/Academy/index';
import CourseDetails from 'components/Academy/CourseDetails';
import LPDetails from 'components/Academy/LPDetails';
import TestDetails from 'components/Academy/TestDetails';
import AppList from 'components/Apps/index';
import Footer from 'components/Footer/index';
import PeopleWizard from 'components/PeopleWizard/index';
import ProjectWizard from 'components/Projects/ProjectWizard';
import ProductWizard from 'components/Products/ProductWizard';
import BrandWizard from 'components/Brands/BrandWizard';
import ShopWizard from 'components/Products/ShopWizard';
import AppWizard from 'components/Apps/AppWizard';
import JobWizard from 'components/Jobs/JobWizard';
import CourseWizard from 'components/Academy/CourseWizard';
import TestWizard from 'components/Academy/TestWizard';
import InstructorWizard from 'components/Academy/InstructorWizard';
import AccountSettings from 'components/AccountSettings/index';
import NewsFeed from 'components/NewsFeed/index';
import ChatBox from 'components/ChatBox/index';
import Login from 'components/Auth/Login';
import Signup from 'components/Auth/Signup';

import Dashboard from 'components/Admin/Dashboard';
import Users from 'components/Admin/Users';

import LandingPage from './routes/LandingPage/index';
import {isIOS, isMobile} from 'react-device-detect';

import {COLLAPSED_DRAWER, FIXED_DRAWER} from 'constants/ActionTypes';


class App extends React.Component {
    onToggleCollapsedNav = (e) => {
        const val = !this.props.navCollapsed;
        this.props.toggleCollapsedNav(val);
    };


    render() {
        const {match, drawerType} = this.props;
        const drawerStyle = drawerType.includes(FIXED_DRAWER) ? 'fixed-drawer' : drawerType.includes(COLLAPSED_DRAWER) ? 'collapsible-drawer' : 'mini-drawer';
        //set default height and overflow for iOS mobile Safari 10+ support.
        if (isIOS && isMobile) {
            $('#body').addClass('ios-mobile-view-height')
        }
        else if ($('#body').hasClass('ios-mobile-view-height')) {
            $('#body').removeClass('ios-mobile-view-height')
        }
        return (
            <div className={`app-container ${drawerStyle}`}>
                <Sidebar onToggleCollapsedNav={this.onToggleCollapsedNav.bind(this)}/>
                <div className="app-main-container">
                    <div className="app-header">
                        <Header drawerType={drawerType} onToggleCollapsedNav={this.onToggleCollapsedNav}/>
                    </div>
                    <div className="side-menu-bar">
                        <MenuBar/>
                    </div>
                    <main className="app-main-content-wrapper">
                        <div className="app-main-content">
                            <Route path={`${match.url}home`} component={LandingPage}/>
                            <Route path={`${match.url}people`} component={PeopleList}/>
                            <Route path={`${match.url}people-details`} component={PeopleDetails}/>
                            <Route path={`${match.url}people-wizard`} component={PeopleWizard}/>                            
                            <Route path={`${match.url}brands`} component={BrandList}/>
                            <Route path={`${match.url}brand-details`} component={BrandDetails}/>
                            <Route path={`${match.url}connect-brand`} component={ConnectBrand}/>
                            <Route path={`${match.url}projects`} component={ProjectList}/>
                            <Route path={`${match.url}create-project`} component={ProjectWizard}/>
                            <Route path={`${match.url}products`} component={ProductList}/>
                            <Route path={`${match.url}create-product`} component={ProductWizard}/>                            
                            <Route path={`${match.url}create-brand`} component={BrandWizard}/>                            
                            <Route path={`${match.url}create-shop`} component={ShopWizard}/>                            
                            <Route path={`${match.url}jobs`} component={JobList}/>
                            <Route path={`${match.url}job-details`} component={JobDetails}/>
                            <Route path={`${match.url}create-Job`} component={JobWizard}/>                                                        
                            <Route path={`${match.url}academy`} component={AcademyLanding}/>
                            <Route path={`${match.url}course-details`} component={CourseDetails}/>
                            <Route path={`${match.url}create-course`} component={CourseWizard}/>                                                                                    
                            <Route path={`${match.url}create-test`} component={TestWizard}/>                                                                                    
                            <Route path={`${match.url}become-instructor`} component={InstructorWizard}/>                                                                                    
                            <Route path={`${match.url}learning-path-details`} component={LPDetails}/>
                            <Route path={`${match.url}test-details`} component={TestDetails}/>
                            <Route path={`${match.url}apps`} component={AppList}/>
                            <Route path={`${match.url}create-app`} component={AppWizard}/>                            
                            <Route path={`${match.url}my-connections`} component={MyConnections}/>
                            <Route path={`${match.url}topics-following`} component={TopicsFollowing}/>
                            <Route path={`${match.url}account-settings`} component={AccountSettings}/>
                            <Route path={`${match.url}news-feed`} component={NewsFeed}/>
                            <Route path={`${match.url}chatbox`} component={ChatBox}/>
                            <Route path={`${match.url}login`} component={Login}/>
                            <Route path={`${match.url}signup`} component={Signup}/>
   
                            <Route path={`${match.url}admin/dashboard`} component={Dashboard}/>
                            <Route path={`${match.url}admin/users`} component={Users}/>
                        </div>
                        <Footer/>
                    </main>
                </div>
            </div>
        );
    }
}


const mapStateToProps = ({settings}) => {
    const {navCollapsed, drawerType} = settings;
    return {navCollapsed, drawerType}
};
export default connect(mapStateToProps, {toggleCollapsedNav})(App);