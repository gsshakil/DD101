import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import {Dropdown, DropdownMenu, DropdownToggle} from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import {COLLAPSED_DRAWER, FIXED_DRAWER} from 'constants/ActionTypes';
import SearchBox from 'components/SearchBox';
import ProfileMenu from '../ProfileMenu/index';
import MailNotification from '../MailNotification/index';
import SwitchAccount from '../SwitchAccount/index';
import Cart from '../Cart/index';
import AppNotification from '../AppNotification/index';
import CardHeader from 'components/dashboard/Common/CardHeader/index';
import logo2 from '../../../public/logo2.png';

class Header extends React.Component {

    onAppNotificationSelect = () => {
        this.setState({
            appNotification: !this.state.appNotification
        })
    };
    onSwitchAccountSelect = () => {
        this.setState({
            switchAccount: !this.state.switchAccount
        })
    };
    onCartSelect = () => {
        this.setState({
            cart: !this.state.cart
        })
    };
    onMailNotificationSelect = () => {
        this.setState({
            mailNotification: !this.state.mailNotification
        })
    };

    onSearchBoxSelect = () => {
        this.setState({
            searchBox: !this.state.searchBox
        })
    };
    handleRequestClose = () => {
        this.setState({switchAccount:false, cart:false, mailNotification: false, appNotification: false, searchBox: false});
    };

    constructor() {
        super();
        

        this.state = {
            searchBox: false,
            searchText: '',
            switchAccount: false,
            cart: false,
            mailNotification: false,
            appNotification: false,
        }
    }

    updateSearchText(evt) {
        this.setState({
            searchText: evt.target.value,
        });
    }

    render() {
        let profileMenuClassName;                    
        const onToggleProfileMenu = () => {
            console.log("Profile Menu Working....");
            profileMenuClassName = this.state.profileMenuOpen ? 'profile-menu open' : 'profile-menu'; 
        }
        const {onToggleCollapsedNav, drawerType} = this.props;        
        const drawerStyle = drawerType.includes(FIXED_DRAWER) ? "d-block d-xl-none" : drawerType.includes(COLLAPSED_DRAWER) ? "d-block" : "d-none";

        return (
            <AppBar className="app-main-header">
                <Toolbar className="app-toolbar" disableGutters={false}>
                    <IconButton className={`jr-menu-icon ${drawerStyle}`} aria-label="Menu"
                                onClick={onToggleCollapsedNav}>
                        <span className="menu-icon"/>
                    </IconButton>

                    <a className="app-logo" href="#/">
                        <img src={logo2} alt="deepden" title="deepden"/>
                    </a>


                    <SearchBox styleName="d-none d-sm-block" placeholder=""
                               onChange={this.updateSearchText.bind(this)}
                               value={this.state.searchText}/>
                    
                    <ul className="header-menu">
                        <li><Link to="/create-job">Post a Job</Link></li>
                        <li><Link to="/create-shop">Create a Shop</Link></li>
                        <li><Link to="/create-brand">Promote Business</Link></li>
                        <li><Link to="/become-instructor">Become an Instructor</Link></li>
                    </ul>

                    <ul className="header-notifications list-inline ml-auto">
                        <li className="d-inline-block d-sm-none list-inline-item">
                            <Dropdown
                                className="quick-menu nav-searchbox"
                                isOpen={this.state.searchBox}
                                toggle={this.onSearchBoxSelect.bind(this)}>

                                <DropdownToggle
                                    className="d-inline-block"
                                    tag="span"
                                    data-toggle="dropdown">
                                    <IconButton className="icon-btn size-30">
                                        <i className="zmdi zmdi-search zmdi-hc-fw"/>
                                    </IconButton>
                                </DropdownToggle>

                                <DropdownMenu right className="p-0">
                                    <SearchBox styleName="search-dropdown" placeholder=""
                                               onChange={this.updateSearchText.bind(this)}
                                               value={this.state.searchText}/>
                                </DropdownMenu>
                            </Dropdown>
                        </li>
                        <li className="list-inline-item">
                            <Link to="/news-feed"><IconButton className="icon-btn size-30" aria-label="Menu">
                                <i className="zmdi zmdi-home icon-profile-menu infinite wobble"/>
                                <span className="menu-icon"/>
                            </IconButton></Link>
                            <ProfileMenu></ProfileMenu>
                        </li>
                        <li className="list-inline-item switch-account">
                            <Dropdown
                                className="quick-menu"
                                isOpen={this.state.switchAccount}
                                toggle={this.onSwitchAccountSelect.bind(this)}>

                                <DropdownToggle
                                    className="d-inline-block"
                                    tag="span"
                                    data-toggle="dropdown">
                                    <IconButton className="icon-btn size-30">
                                        <i className="zmdi zmdi-account-box-mail infinite wobble"/>
                                    </IconButton>
                                </DropdownToggle>

                                <DropdownMenu right>
                                    <CardHeader styleName="align-items-center" heading="SwitchAccount"/>
                                    <SwitchAccount/>
                                </DropdownMenu>
                            </Dropdown>
                        </li>
                        <li className="list-inline-item cart">
                            <Dropdown
                                className="quick-menu"
                                isOpen={this.state.cart}
                                toggle={this.onCartSelect.bind(this)}>

                                <DropdownToggle
                                    className="d-inline-block"
                                    tag="span"
                                    data-toggle="dropdown">
                                    <IconButton className="icon-btn size-30">
                                        <i className="zmdi zmdi-shopping-cart icon-alert infinite wobble"/>
                                    </IconButton>
                                </DropdownToggle>

                                <DropdownMenu right>
                                    <CardHeader styleName="align-items-center" heading="Cart"/>
                                    <Cart/>
                                </DropdownMenu>
                            </Dropdown>
                        </li>
                        <li className="list-inline-item app-tour">
                            <Dropdown
                                className="quick-menu"
                                isOpen={this.state.appNotification}
                                toggle={this.onAppNotificationSelect.bind(this)}>

                                <DropdownToggle
                                    className="d-inline-block"
                                    tag="span"
                                    data-toggle="dropdown">
                                    <IconButton className="icon-btn size-30">
                                        <i className="zmdi zmdi-notifications-active icon-alert animated infinite wobble"/>
                                    </IconButton>
                                </DropdownToggle>

                                <DropdownMenu right>
                                    <CardHeader styleName="align-items-center" heading="Notifications"/>
                                    <AppNotification/>
                                </DropdownMenu>
                            </Dropdown>
                        </li>
                        <li className="list-inline-item mail-tour">
                            <Dropdown
                                className="quick-menu"
                                isOpen={this.state.mailNotification}
                                toggle={this.onMailNotificationSelect.bind(this)}
                            >
                                <DropdownToggle
                                    className="d-inline-block"
                                    tag="span"
                                    data-toggle="dropdown">

                                    <IconButton className="icon-btn size-30">
                                        <i className="zmdi zmdi-comment-alt-text icon-alert zmdi-hc-fw"/>
                                    </IconButton>
                                </DropdownToggle>


                                <DropdownMenu right>
                                    <CardHeader styleName="align-items-center" heading="Messages"/>
                                    <MailNotification/>
                                </DropdownMenu>

                            </Dropdown>
                        </li>

                        <li className="list-inline-item btn-profile-menu">
                            <IconButton className="icon-btn size-30" aria-label="Menu"
                                onClick={onToggleProfileMenu}
                                >
                                <i className="zmdi zmdi-account-circle icon-profile-menu infinite wobble"/>
                                <span className="menu-icon"/>
                            </IconButton>
                        </li>

                    </ul>
                </Toolbar>
            </AppBar>
        );
    }

}


export default Header;
