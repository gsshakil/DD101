import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import product1 from '../../../public/product1.png';
import product2 from '../../../public/product2.png';
import product3 from '../../../public/product2.png';
import AppCard from './AppCard';

class AppDetails extends React.Component{
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        
        this.state = {
            activeTab: '1'
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    render (){        
        return(
            <div className="app-details">
                <div className="container">
                    <div className="row">                            
                        <Nav tabs>
                            <NavItem>
                                <NavLink
                                className={classnames({ active: this.state.activeTab === '1' })}
                                onClick={() => { this.toggle('1'); }}
                                >
                                Overview
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                className={classnames({ active: this.state.activeTab === '2' })}
                                onClick={() => { this.toggle('2'); }}
                                >
                                Reviews
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                className={classnames({ active: this.state.activeTab === '3' })}
                                onClick={() => { this.toggle('3'); }}
                                >
                                Support
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                className={classnames({ active: this.state.activeTab === '4' })}
                                onClick={() => { this.toggle('4'); }}
                                >
                                Related
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <TabContent activeTab={this.state.activeTab}>
                            <TabPane tabId="1">
                                App Image Slider
                                <div className="row">
                                    <div className="col-md-8">
                                        <h3>Overview</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas inventore atque sint dolor sed quaerat excepturi quibusdam similique libero exercitationem, eaque quos corporis explicabo iusto, eligendi quae asperiores culpa officiis.</p>
                                    </div>
                                    <div className="col-md-4">
                                        <h3>Additional Information</h3>
                                    </div>
                                </div>
                            </TabPane>
                            <TabPane tabId="2">
                                <p>Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean eleifend laoreet congue. Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. className aptent taciti.</p>                                                                
                            </TabPane>
                            <TabPane tabId="3">
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit obcaecati, sequi dolorem, doloribus quis eligendi soluta quam earum possimus et at vitae perspiciatis eum, similique iste aliquid magnam neque itaque!</p>
                            </TabPane>
                            <TabPane tabId="4">
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit obcaecati, sequi dolorem, doloribus quis eligendi soluta quam earum possimus et at vitae perspiciatis eum, similique iste aliquid magnam neque itaque!</p>
                            </TabPane>
                        </TabContent>
                    </div>				
                </div>
            </div>
        );
    }    
};

export default AppDetails;

