import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ProductDetails from './ProductDetails';
import product1 from '../../../public/product1.png';
import product2 from '../../../public/product2.png';
import product3 from '../../../public/product2.png';

class ProductCard extends React.Component  {

    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }
    
    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render (){   
        return(
            <div className="product-card">
                <div className="single-product">
                    <div className="product-img">
                        <span className="hot-sale">-13%</span>
                        <a href="">
                            <img className="primary-img" alt="" src={product1}/>
                        </a>
                        <div className="product-cart product-cart-res">
                            <ul>
                                <li><a><i className="zmdi zmdi-shopping-cart infinite wobble"></i></a></li>
                                <li><a onClick={this.toggle}><i className="zmdi zmdi-eye infinite wobble"></i></a></li>
                            </ul>
                        </div>
                        <div className="ratings">
                            <ul>
                                <li><i className="zmdi zmdi-star infinite wobble"></i></li>
                                <li><i className="zmdi zmdi-star infinite wobble"></i></li>
                                <li><i className="zmdi zmdi-star infinite wobble"></i></li>
                                <li><i className="zmdi zmdi-star infinite wobble"></i></li>
                                <li><i className="zmdi zmdi-star infinite wobble"></i></li>
                            </ul>
                        </div>
                    </div>	
                    <div className="tab-desc">
                        <h2 className="product-name"><a title="" href="#">geistu boy est</a></h2>
                        <div className="price-box">
                            <p className="old-price">
                                <span className="price">$690.00</span>
                            </p>
                            <p className="special-price s-one">
                                <span className="price">$800.00</span>
                            </p> 										
                        </div>
                    </div>											
                </div>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                    <ModalBody>
                        <ProductDetails></ProductDetails>
                    </ModalBody>
                </Modal>
            </div>
        );
    }    
};

export default ProductCard;

