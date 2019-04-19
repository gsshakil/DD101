import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import PeopleFilter from '../Common/PeopleFilter';
import ProductCard from './ProductCard';

const ProductList = () => {
    return (
        <div className="project-list">
            <div className="top-banner">
                <div className="content">
                    <h1>Shop Creative Products</h1>
                    <p className="m-b-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates unde alias incidunt deleniti fugiat iure quod perferendis officia labore corporis, quasi a accusamus soluta laudantium ipsa necessitatibus tenetur ducimus?</p>            
                    <Link to='create-shop' className="btn btn-outline-light btn-lg">Create Your Shop</Link>                    
                </div>
            </div>
            <div className="list-wrapper">
                <div className="row">
                    <div className="col-md-3 p-r">
                        <div className="filter-wrapper">
                            <PeopleFilter></PeopleFilter>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="people-card-wrapper">
                            <div className="row m-b-sm">
                                <div className="col-md-4">
                                    <ProductCard></ProductCard>                                                            
                                </div>
                                <div className="col-md-4">
                                    <ProductCard></ProductCard>                                                            
                                </div>
                                <div className="col-md-4">
                                    <ProductCard></ProductCard>                                                            
                                </div>
                            </div>
                            <div className="row m-b-sm">
                                <div className="col-md-4">
                                    <ProductCard></ProductCard>                                                            
                                </div>
                                <div className="col-md-4">
                                    <ProductCard></ProductCard>                                                            
                                </div>
                                <div className="col-md-4">
                                    <ProductCard></ProductCard>                                                            
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProductList;

