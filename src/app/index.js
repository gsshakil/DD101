import React from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {toggleCollapsedNav} from 'actions/index';

import Header from 'components/Header/index';
import MenuBar from 'components/MenuBar/index';
import Sidebar from 'containers/SideNav/index';
import Footer from 'components/Footer';
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