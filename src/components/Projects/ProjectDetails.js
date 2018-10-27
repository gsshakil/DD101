import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import product1 from '../../../public/product1.png';
import product2 from '../../../public/product2.png';
import product3 from '../../../public/product2.png';

class ProjectDetails extends React.Component{
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
            <div className="product-page-area project-details">
                <div className="container">
                    <div className="row">
                        <div className="gallary-warpper">
                            <div id="img-1" className="zoomWrapper single-zoom">
                                <a href="#">
                                    <div className="zoomWrapper">
                                        <img id="zoom1" src={product1} data-zoom-image={product1} alt=""/>
                                    </div>
                                </a>
                            </div>								
                            <div className="single-zoom-thumb">
                                <div className="bx-wrapper">
                                    <div className="bx-viewport" aria-live="polite">
                                        <ul className="zoom-slider" id="gallery_01">
                                            <li aria-hidden="false">
                                                <a href="#" className="elevatezoom-gallery active" data-image={product1} data-zoom-image="img/product/big/1.jpg"> 
                                                    <img src={product1} alt=""/> 
                                                </a> 
                                            </li>
                                            <li aria-hidden="false">
                                                <a href="#" className="elevatezoom-gallery" data-image={product1} data-zoom-image="img/product/big/2.jpg"> 
                                                    <img src={product1} alt=""/> 
                                                </a> 
                                            </li>
                                            <li aria-hidden="false">
                                                <a href="#" className="elevatezoom-gallery" data-image={product1} data-zoom-image="img/product/big/3.jpg"> 
                                                    <img src={product1} alt=""/> 
                                                </a> 
                                            </li>
                                            <li aria-hidden="true">
                                                <a href="#" className="elevatezoom-gallery" data-image={product1}data-zoom-image="img/product/big/6.jpg"> 
                                                    <img src={product1} alt=""/> 
                                                </a> 
                                            </li>
                                            <li aria-hidden="true">
                                                <a href="#" className="elevatezoom-gallery" data-image={product1} data-zoom-image="img/product/big/7.jpg"> 
                                                    <img src={product1} alt=""/> 
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="bx-controls bx-has-controls-direction">
                                        <div className="bx-controls-direction">
                                            <a className="bx-prev disabled" href=""><i className="fa fa-chevron-left"></i></a>
                                            <a className="bx-next" href=""><i className="fa fa-chevron-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>									
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-md-8">
                            <div className="project-description">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, explicabo voluptate autem quisquam quia exercitationem ratione, fugiat nulla reiciendis atque unde excepturi architecto accusantium pariatur fuga sit. Praesentium, ab modi?</p>
                            </div>
                            <hr/>
                            <div className="comments">
                                <h2>54 Responses</h2>
                                <hr/>
                                <div className="comment-item-primary">
                                    <div className="row">
                                        <div className="col-md-2 text-center">
                                            <div className="comment-avatar">
                                                <img src={product3} alt=""/>
                                            </div>
                                        </div>
                                        <div className="col-md-10">
                                            <div className="comment-content">
                                                <h3><a href="">User name</a></h3>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima accusamus esse, delectus alias deleniti dolorum quia laboriosam nostrum dolor nam asperiores sequi error tempora temporibus eveniet maiores mollitia vel? Harum.</p>
                                                <p>on Oc 23, 2019 11:21 AM</p>
                                                <div className="like-reply pull-right">
                                                    <ul>
                                                        <li>Like</li>
                                                        <li>Reply</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <ul className="right-widgets">
                                <li>Share</li>
                                <li>Tag</li>
                                <li>Viewed</li>
                                <li>Liked</li>
                                <li>Favorited</li>
                            </ul>
                            <div className="more-by-user">
                                <h3>More by User</h3>
                                <ul>
                                    <li><img src={product3} alt=""/></li>
                                    <li><img src={product3} alt=""/></li>
                                    <li><img src={product3} alt=""/></li>
                                    <li><img src={product3} alt=""/></li>
                                </ul>
                            </div>
                            <div className="related-projects">
                                <h3>Related Projects</h3>
                                <ul>
                                    <li><img src={product3} alt=""/></li>
                                    <li><img src={product3} alt=""/></li>
                                    <li><img src={product3} alt=""/></li>
                                    <li><img src={product3} alt=""/></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>				
            </div>
        );
    }    
};

export default ProjectDetails;

