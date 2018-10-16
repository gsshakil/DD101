import React from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {toggleCollapsedNav} from 'actions/index';

import Header from 'components/Header/index';
import MenuBar from 'components/MenuBar/index';
import Sidebar from 'containers/SideNav/index';
import PeopleList from 'components/People/index';
import BrandList from 'components/Brands/index';
import ProjectList from 'components/Projects/index';
import ProductList from 'components/Products/index';
import JobList from 'components/Jobs/index';
import AcademyLanding from 'components/Academy/index';
import AppList from 'components/Apps/index';
import Footer from 'components/Footer/index';
import PeopleWizard from 'components/PeopleWizard/index';
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
                            <Route path={`${match.url}brands`} component={BrandList}/>
                            <Route path={`${match.url}projects`} component={ProjectList}/>
                            <Route path={`${match.url}products`} component={ProductList}/>
                            <Route path={`${match.url}jobs`} component={JobList}/>
                            <Route path={`${match.url}academy`} component={AcademyLanding}/>
                            <Route path={`${match.url}apps`} component={AppList}/>
                            <Route path={`${match.url}people-wizard`} component={PeopleWizard}/>
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