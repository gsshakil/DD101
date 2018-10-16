import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import product1 from '../../../public/product1.png';
import product2 from '../../../public/product2.png';
import product3 from '../../../public/product2.png';
import ProductCard from './ProductCard';

class ProductDetails extends React.Component{
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
            <div className="product-page-area">
                <div className="container">
                    <div className="row">
                            <div className="zoom-warpper">
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
                            <div className="p-zoom-content">
                                <div className="p-zoom-head">
                                    <h2>consequences</h2>
                                    <p className="availability in-stock">Availability: <span>In stock</span></p>	
                                    <div className="price-box">
                                        <p className="special-price s-one">
                                            <span className="price">$800.00</span>
                                        </p> 										
                                    </div>	
                                    <div className="p-ratings">
                                        <ul>
                                            <li><i className="fa fa-star-o"></i></li>
                                            <li><i className="fa fa-star-o"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star-half-o"></i></li>
                                            <li><i className="fa fa-star-o"></i></li>
                                        </ul>
                                    </div>										
                                </div>
                                <div className="short-description">
                                    <p>
                                    Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean eleifend laoreet congue. Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. className aptent taciti.</p>
                                </div>	
                                <div className="p-product-cart">
                                    <div className="oty">
                                        <span>oty:</span>
                                        <input type="text" className="input-text qty"/>
                                    </div>
                                    <ul>
                                        <li><a href="#"><i className="zmdi zmdi-shopping-cart"></i></a></li>
                                        <li><a href="#"><i className="zmdi zmdi-favorite"></i></a></li>
                                    </ul>
                                </div>	
                            </div>
                        </div>
                        <div className="reviwer-area">
                            <Nav tabs>
                                <NavItem>
                                    <NavLink
                                    className={classnames({ active: this.state.activeTab === '1' })}
                                    onClick={() => { this.toggle('1'); }}
                                    >
                                    Product Description
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
                                    Produc Tags
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <TabContent activeTab={this.state.activeTab}>
                                <TabPane tabId="1">
                                    <p>Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean eleifend laoreet congue. Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. className aptent taciti.</p>                                
                                </TabPane>
                                <TabPane tabId="2">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="reviwer-info">
                                                <p><a href="#">bootexpert</a><b>Review by</b>bootexpert</p>
                                            </div>
                                            <div className="p-ratings">
                                                <span>Quality</span>
                                                <ul>
                                                    <li><i className="fa fa-star-o"></i></li>
                                                    <li><i className="fa fa-star-o"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star-half-o"></i></li>
                                                    <li><i className="fa fa-star-o"></i></li>
                                                </ul>
                                            </div>	
                                            <div className="p-ratings">
                                                <span>price</span>
                                                <ul className="re-price">
                                                    <li><i className="fa fa-star-o"></i></li>
                                                    <li><i className="fa fa-star-o"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star-half-o"></i></li>
                                                    <li><i className="fa fa-star-o"></i></li>
                                                </ul>
                                            </div>	
                                            <div className="p-ratings">
                                                <span>value</span>
                                                <ul className="re-price">
                                                    <li><i className="fa fa-star-o"></i></li>
                                                    <li><i className="fa fa-star-o"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star-half-o"></i></li>
                                                    <li><i className="fa fa-star-o"></i></li>
                                                </ul>
                                            </div>												
                                        </div>
                                        <div className="col-md-6">
                                            <div className="rev-table">
                                                <h3>You're reviewing: <span>consequences</span></h3>
                                                <h4>How do you rate this product? <em className="required">*</em></h4>
                                                <table id="product-review-table" className="data-table">
                                                    <thead>
                                                        <tr className="first last">
                                                            <th>&nbsp;</th>
                                                            <th><span className="nobr">1 star</span></th>
                                                            <th><span className="nobr">2 stars</span></th>
                                                            <th><span className="nobr">3 stars</span></th>
                                                            <th><span className="nobr">4 stars</span></th>
                                                            <th><span className="nobr">5 stars</span></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr className="first odd">
                                                            <th>Price</th>
                                                            <td className="value"><input type="radio" className="radio" /></td>
                                                            <td className="value"><input type="radio" className="radio" /></td>
                                                            <td className="value"><input type="radio" className="radio" /></td>
                                                            <td className="value"><input type="radio" className="radio" /></td>
                                                            <td className="value last"><input type="radio" className="radio" id="Price_5" name="ratings[3]"/></td>
                                                        </tr>
                                                        <tr className="even">
                                                            <th>Value</th>
                                                            <td className="value"><input type="radio" className="radio" /></td>
                                                            <td className="value"><input type="radio" className="radio" /></td>
                                                            <td className="value"><input type="radio" className="radio" /></td>
                                                            <td className="value"><input type="radio" className="radio" /></td>
                                                            <td className="value last"><input type="radio" className="radio" id="Value_5" name="ratings[2]"/></td>
                                                        </tr>
                                                        <tr className="last odd">
                                                            <th>Quality</th>
                                                            <td className="value"><input type="radio" className="radio" /></td>
                                                            <td className="value"><input type="radio" className="radio" /></td>
                                                            <td className="value"><input type="radio" className="radio" /></td>
                                                            <td className="value"><input type="radio" className="radio" /></td>
                                                            <td className="value last"><input type="radio" className="radio" id="Quality_5" name="ratings[1]"/></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <div className="re-comments">
                                                    <ul>
                                                        <li><span>Nickname<span>*</span></span>
                                                            <input type="text"/>
                                                        </li>
                                                        <li><span>Summary of Your Review<span>*</span></span>
                                                            <input type="text"/>
                                                        </li>
                                                        <li><span>Review<span>*</span></span>
                                                            <textarea></textarea>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="buttons-set">
                                                    <button className="button" type="submit"><span>Submit Review</span></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPane>
                                <TabPane tabId="3">
                                    <div className="product-tags-items">
                                        <h3>Other people marked this product with these tags:</h3>
                                        <p><a href="#" className="p-tages">feshion</a>(03)</p>
                                        <div className="tages-form">
                                            <form action="#">
                                                <label>Add Your Tags:</label>
                                                <input type="text"/>
                                                <button className="button" type="submit"><span>add tags</span></button>
                                            </form>
                                        </div>
                                        <p className="note">Use spaces to separate tags. Use single quotes (') for phrases.</p>
                                    </div>
                                </TabPane>
                            </TabContent>
                        </div>
                        <div class="single-page-rel-p">
							<div class="section-title section-title-2">
								<h2>Hot Deals</h2>							
							</div>												
                        </div>
                    </div>				
                </div>
        );
    }    
};

export default ProductDetails;

