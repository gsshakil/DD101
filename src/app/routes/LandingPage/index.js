import React from 'react';
import ContainerHeader from 'components/ContainerHeader/index';
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
        var introStyle = {
            backgroundImage: 'url(' + intro + ')',
        };
        var outroStyle = {
            backgroundImage: 'url(' + endsec + ')',
        };
        return (
            <div className="app-wrapper">
                <div className="section section-1" style={introStyle}>
                    <div className="content">
                        <h1 className="heading">Platform for the Creative Professionals and Organizations</h1>
                        <p className="m-b-sm">A canvas to showcase creative works, products to global audience and meeting potential clients and customers. Deepden intends to create a thriving ecosystem for the global creative industry to develop skill, carrier, entrepreneurship, business and network.</p>
                        
                        <button className="btn btn-outline-info btn-lg">Learn More</button>                    
                    </div>
                </div>
                <div className="section section-2">
                    <div className="row">
                        <div className="col-md-4 ccp">
                        <div className="centered-content">
                            <h1 className="m-b-sm">Organize and Showcase Your Creative Projects Like Never Before</h1> 
                            <button className="btn btn-outline-info btn-lg">Upload Works</button>                                                                       
                        </div>
                        </div>
                        <div className="col-md-8 ccp">
                            {/* <div className="centered-content">
                                <img src={projectShowcase} alt="Project Showcase"/>                        
                            </div> */}
                            <div className="trending-projects">
                                {/* <h3 className="m-b-md subtitle">FEATURED PROJECTS</h3>                             */}
                                <div className="row m-b-xs">
                                    <div className="col-md-3 project-card-mini"></div>
                                    <div className="col-md-3 project-card-mini"></div>
                                    <div className="col-md-3 project-card-mini"></div>
                                    <div className="col-md-3 project-card-mini"></div>
                                </div>
                                <div className="row">
                                    <div className="col-md-3 project-card-mini"></div>
                                    <div className="col-md-3 project-card-mini"></div>
                                    <div className="col-md-3 project-card-mini"></div>
                                    <div className="col-md-3 project-card-mini"></div>
                                </div>
                            </div>
                        </div>
                    </div>
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
                            <div className="row m-b-sm">
                                <div className="col-md-3">
                                    <img src={product1} alt="Product"/>
                                </div>
                                <div className="col-md-3">
                                    <img src={product2} alt="Product"/>                                                                            
                                </div>
                                <div className="col-md-3">
                                    <img src={product3} alt="Product"/>                                                                            
                                </div>
                                <div className="col-md-3">
                                    <img src={product4} alt="Product"/>                                                                            
                                </div>
                            </div>
                            <div className="row m-b-md">
                                <div className="col-md-3 p-b-sm">
                                    <img src={product5} alt="Product"/>                                                                            
                                </div>
                                <div className="col-md-3 p-b-sm">
                                    <img src={product6} alt="Product"/>                                                                            
                                </div>
                                <div className="col-md-3 p-b-sm">
                                    <img src={product7} alt="Product"/>                                                                            
                                </div>
                                <div className="col-md-3 p-b-sm">
                                    <img src={product8} alt="Product"/>                                                                            
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