import React from 'react';
import YouTube from 'react-youtube';
import MasonryInfiniteScroller from 'react-masonry-infinite';

import ContainerHeader from 'components/ContainerHeader/index';
import ProjectCard from '../../../components/projects/ProjectCard';

import ProductCard from '../../../components/Products/ProductCard';


import avatar from '../../../../public/avatar1.png';
import projectImage1 from '../../../../public/project1.gif';
import projectImage2 from '../../../../public/project2.jpg';


import intro from '../../../../public/intro.png';
import projectShowcase from '../../../../public/projectShowcase.png';
import creativePeople from '../../../../public/creativePeople.png';
import creativeIndustry from '../../../../public/creativeIndustry.png';
import product1 from '../../../../public/product1.png';
import product2 from '../../../../public/product2.png';
import product3 from '../../../../public/product3.png';
import product4 from '../../../../public/product4.png';
import product5 from '../../../../public/product5.png';
import product6 from '../../../../public/product6.png';
import product7 from '../../../../public/product7.png';
import product8 from '../../../../public/product8.png';
import endsec from '../../../../public/endsec.png';


class LandingPage extends React.Component {

    render() {

        let sizes = [{ columns: 4, gutter: 10 }, 
            { mq: '360px', columns: 1, gutter: 0 }, 
            { mq: '768px', columns: 3, gutter: 10 }, 
            { mq: '1024px', columns: 4, gutter: 10 }
        ]

        const opts = {
            height: '390',
            width: '640',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 0
            }
        };

        var introStyle = {
            backgroundImage: 'url(' + intro + ')',
        };
        var introStyle2 = {
            textAlign: 'left',
            marginTop: '100px'
        };
        var introStyle3 = {
            display: 'table-cell',
            verticalAlign: 'middle',
        };
        var outroStyle = {
            backgroundImage: 'url(' + endsec + ')',
        };
        return (
            <div className="app-wrapper">
                <div className="section section-1" style={introStyle}>
                    <div className="centered-content" style={introStyle3}>
                        <div className="row">
                            <div className="col-md-6" style={introStyle2}>
                                <div className="content">
                                    <h1 className="heading">Platform for the Creative Professionals and Organizations</h1>
                                    <p className="m-b-sm">A canvas to showcase creative works, products to global audience and meeting potential clients and customers. Deepden intends to create a thriving ecosystem for the global creative industry to develop skill, carrier, entrepreneurship, business and network.</p>
                                    
                                    <button className="btn btn-outline-info btn-lg">Learn More</button>                    
                                </div>                        
                            </div>
                            <div className="col-md-6">
                                <div className="auth-wrapper">
                                    <form>
                                        <div className="form-group">
                                            <a class="btn btn-block btn-social btn-facebook">
                                                <span class="zmdi zmdi-facebook"></span> Sign in with Facebook
                                            </a>
                                        </div>
                                        <div className="form-group">
                                            <a class="btn btn-block btn-social btn-google">
                                                <span class="zmdi zmdi-google"></span> Sign in with Google
                                            </a>
                                        </div>
                                        <div className="form-group">
                                            <label for="exampleInputEmail1">Email address</label>
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                        </div>
                                        <div className="form-group">
                                            <label for="password">Password</label>
                                            <input type="password" className="form-control" id="password" placeholder="Password" />
                                        </div>
                                        <div className="form-group">
                                            <label for="confirmPassword">Confirm Password</label>
                                            <input type="password" className="form-control" id="confirmPassword" placeholder="Password" />
                                        </div>
                                        <button type="submit" className="btn btn-primary btn-block">Join</button>
                                    </form>
                                </div>                    
                            </div>
                        </div>    
                    </div>
                </div>
                <div className="section section-2">
                    <div className="heading-style-1">
                        <h1 className="m-b-sm">Organize and Showcase Your Creative Projects</h1> 
                    </div>
                    <div className="trending-projects">
                        <h3 className="m-b-md subtitle">FEATURED PROJECTS</h3>                            
                        <MasonryInfiniteScroller className = "masonry" sizes={sizes}>
                            <ProjectCard projectImage={projectImage1} projectTitle="lorem ipsam dollor dan can firea ovita lijoyt munn to....." byAvatar={avatar} byUserName="Jhon Doe" category="categry" dateTime="August 20, 2019 12:39 PM" commentCount="255"></ProjectCard>
                            <ProjectCard projectImage={projectImage2} projectTitle="lorem ipsam dollor dan can firea ovita lijoyt munn to....." byAvatar={avatar} byUserName="Jhon Doe" category="categry" dateTime="August 20, 2019 12:39 PM" commentCount="255"></ProjectCard>
                            <ProjectCard projectImage={projectImage1} projectTitle="lorem ipsam dollor dan can firea ovita lijoyt munn to....." byAvatar={avatar} byUserName="Jhon Doe" category="categry" dateTime="August 20, 2019 12:39 PM" commentCount="255"></ProjectCard>
                            <ProjectCard projectImage={projectImage2} projectTitle="lorem ipsam dollor dan can firea ovita lijoyt munn to....." byAvatar={avatar} byUserName="Jhon Doe" category="categry" dateTime="August 20, 2019 12:39 PM" commentCount="255"></ProjectCard>
                            <ProjectCard projectImage={projectImage2} projectTitle="lorem ipsam dollor dan can firea ovita lijoyt munn to....." byAvatar={avatar} byUserName="Jhon Doe" category="categry" dateTime="August 20, 2019 12:39 PM" commentCount="255"></ProjectCard>                                    
                            <ProjectCard projectImage={projectImage2} projectTitle="lorem ipsam dollor dan can firea ovita lijoyt munn to....." byAvatar={avatar} byUserName="Jhon Doe" category="categry" dateTime="August 20, 2019 12:39 PM" commentCount="255"></ProjectCard>
                            <ProjectCard projectImage={projectImage1} projectTitle="lorem ipsam dollor dan can firea ovita lijoyt munn to....." byAvatar={avatar} byUserName="Jhon Doe" category="categry" dateTime="August 20, 2019 12:39 PM" commentCount="255"></ProjectCard>
                            <ProjectCard projectImage={projectImage1} projectTitle="lorem ipsam dollor dan can firea ovita lijoyt munn to....." byAvatar={avatar} byUserName="Jhon Doe" category="categry" dateTime="August 20, 2019 12:39 PM" commentCount="255"></ProjectCard>
                        </MasonryInfiniteScroller>
                    </div>
                    <button className="btn btn-outline-info btn-lg">View All</button>                                                                       
                </div>
                <div className="section section-3">
                    <div className="row">
                        <div className="col-md-8">
                            <img src={creativePeople} alt="Project Showcase"/>                        
                        </div>
                        <div className="col-md-4">
                            <h1 className="m-b-sm">Meet Creative Professionals</h1>
                            <button className="btn btn-outline-light btn-lg">Browse People</button>                    
                            
                        </div>
                    </div>
                </div>
                <div className="section section-4">
                    <div className="row">
                        <div className="col-md-4">
                            <h1 className="m-b-sm">Connect with the Creative Industry</h1>
                            <button className="btn btn-outline-info btn-lg">Browse Brands</button>                                                
                        </div>
                        <div className="col-md-8">
                            <img src={creativeIndustry} alt="Project Showcase"/>                                                
                        </div>
                    </div>
                </div>
                <div className="section section-5">
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <h1>Shop from Creative Marketplace</h1>
                            <h3 className="m-b-md subtitle">TRENDING PRODUCTS</h3>
                            <div className="prduct-wrapper">
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
                            <button className="btn btn-outline-light btn-lg">View All Products</button>                                                
                        </div>
                    </div>
                </div>
                <div className="section section-6">
                    <h1>Meet Potential Clients and Get Hired</h1>
                    <h3 className="m-b-md subtitle">TRENDING JOBS</h3>
                    <div className="row m-b-sm">
                        <div className="col-md-3 job-card"></div>
                        <div className="col-md-3 job-card"></div>
                        <div className="col-md-3 job-card"></div>
                        <div className="col-md-3 job-card"></div>
                    </div>
                    <div className="row m-b-md">
                        <div className="col-md-3 job-card"></div>
                        <div className="col-md-3 job-card"></div>
                        <div className="col-md-3 job-card"></div>
                        <div className="col-md-3 job-card"></div>
                    </div>
                    <button className="btn btn-outline-light btn-lg">View All Jobs</button>                                                                    
                </div>
                <div className="section section-7">
                    <h1>HAVN'T DONE ANY WORKS YET? RELAX!</h1>
                    <h2 className="m-b-md">Deepden's Academy will Guide You Step by Step to Reach Your Dream Destination</h2>
                    <h3 className="m-b-sm subtitle">SEE SOME OF THE LEARNING PATHS</h3>
                    <div className="row m-b-sm">
                        <div className="col-md-4 learning-path-card c1"></div>
                        <div className="col-md-4 learning-path-card c2"></div>
                        <div className="col-md-4 learning-path-card c3"></div>
                    </div>
                    <div className="row m-b-md">
                        <div className="col-md-4 learning-path-card c4"></div>
                        <div className="col-md-4 learning-path-card c5"></div>
                        <div className="col-md-4 learning-path-card c6"></div>
                    </div>
                    <button className="btn btn-outline-info btn-lg">See All Learning Paths, Courses and Preperation Tests</button>                                                                    
                </div>
                <div className="section section-8">
                    <h1 className="m-b-md">....and there are lots of tools made by people like you to boost your professional carrier</h1>
                    <h2 className="m-b-sm">TRENDING ADD-ONS</h2>
                    <div className="row m-b-sm">
                        <div className="col-md-4 apps-card"></div>
                        <div className="col-md-4 apps-card"></div>
                        <div className="col-md-4 apps-card"></div>
                    </div>
                    <div className="row m-b-md">
                        <div className="col-md-4 apps-card"></div>
                        <div className="col-md-4 apps-card"></div>
                        <div className="col-md-4 apps-card"></div>
                    </div>
                    <button className="btn btn-outline-info btn-lg">View All Add-ons</button>                                                                    
                </div>
                <div className="section section-9" style={outroStyle}>
                    <h1 className="m-b-sm">Build Your Brand New Identity</h1>
                    <button className="btn btn-outline-secondary btn-lg">Join Now</button>                                        
                </div>
            </div>
        );
    }
}

export default LandingPage;