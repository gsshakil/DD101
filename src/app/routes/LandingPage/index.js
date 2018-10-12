import React from 'react';
import ContainerHeader from 'components/ContainerHeader/index';
import projectShowcase from '../../../../public/projectShowcase.png';


class LandingPage extends React.Component {

    render() {
        return (
            <div className="app-wrapper">
                <div className="section section-1">
                    <div className="content">
                        <h1 className="heading">Welcome to Deepden</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus laborum quasi corporis neque similique sapiente molestias mollitia? Atque perspiciatis numquam iste, eos omnis quidem beatae pariatur tempore ipsum ex mollitia.</p>
                    </div>
                </div>
                <div className="section section-2">
                    <div className="row">
                        <div className="col-md-4 ccp">
                        <div className="centered-content">
                            <h1>Organize and Showcase Your Creative Projects Like Never Before</h1>    
                        </div>
                        </div>
                        <div className="col-md-8 ccp">
                        <div className="centered-content">
                            <img src={projectShowcase} alt="Project Showcase"/>                        
                        </div>
                        </div>
                    </div>
                </div>
                <div className="section section-3">
                    <div className="row">
                        <div className="col-md-8">
                            <img src={projectShowcase} alt="Project Showcase"/>                        
                        </div>
                        <div className="col-md-4">
                            <h1>Meet Creative Professionals</h1>
                        </div>
                    </div>
                </div>
                <div className="section section-4">
                    <div className="row">
                        <div className="col-md-4">
                            <h1>Connect with the Creative Industry</h1>
                        </div>
                        <div className="col-md-8">
                            <img src={projectShowcase} alt="Project Showcase"/>                                                
                        </div>
                    </div>
                </div>
                <div className="section section-5">
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <h1>Explore and Shop from Creative Marketplace</h1>
                            <h3 className="m-b-md">Trending Products</h3>
                            <div className="row m-b-sm">
                                <div className="col-md-3">
                                    <img src={projectShowcase} alt="Project Showcase"/>                                                                            
                                </div>
                                <div className="col-md-3">
                                    <img src={projectShowcase} alt="Project Showcase"/>                                                                            
                                </div>
                                <div className="col-md-3">
                                    <img src={projectShowcase} alt="Project Showcase"/>                                                                            
                                </div>
                                <div className="col-md-3">
                                    <img src={projectShowcase} alt="Project Showcase"/>                                                                            
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3">
                                    <img src={projectShowcase} alt="Project Showcase"/>                                                                            
                                </div>
                                <div className="col-md-3">
                                    <img src={projectShowcase} alt="Project Showcase"/>                                                                            
                                </div>
                                <div className="col-md-3">
                                    <img src={projectShowcase} alt="Project Showcase"/>                                                                            
                                </div>
                                <div className="col-md-3">
                                    <img src={projectShowcase} alt="Project Showcase"/>                                                                            
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section section-6">
                    <h1>Meet Potential Clients and Get Hired</h1>
                    <h3 className="m-b-md">TRENDING JOBS</h3>
                    <div className="row">
                        <div className="job-card m-b-xs"></div>
                        <div className="job-card m-b-xs"></div>
                        <div className="job-card m-b-xs"></div>
                        <div className="job-card m-b-xs"></div>
                        <div className="job-card m-b-xs"></div>
                    </div>
                </div>
                <div className="section section-7">
                    <h1>Havn't Done Any Works Yet?</h1>
                    <h1>Relax!</h1>
                    <h3>Deepden's Academy will Guide You Step by Step to Reach Your Dream Destination</h3>
                    <h3>See Some of Our Learning Paths</h3>
                    <div className="row m-b-sm">
                        <div className="col-md-4 learning-path-card c1"></div>
                        <div className="col-md-4 learning-path-card c2"></div>
                        <div className="col-md-4 learning-path-card c3"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 learning-path-card c4"></div>
                        <div className="col-md-4 learning-path-card c5"></div>
                        <div className="col-md-4 learning-path-card c6"></div>
                    </div>
                    
                </div>
                <div className="section section-8">
                    <h1>....and there are lots of tools made by people like you to boost your professional carrier</h1>
                    <h2 className="m-b-sm">Discover APPS</h2>
                    <div className="row m-b-sm">
                        <div className="col-md-4 apps-card"></div>
                        <div className="col-md-4 apps-card"></div>
                        <div className="col-md-4 apps-card"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 apps-card"></div>
                        <div className="col-md-4 apps-card"></div>
                        <div className="col-md-4 apps-card"></div>
                    </div>
                </div>
                <div className="section section-9">
                    <h1>Build Your Brand New Identity</h1>
                </div>
            </div>
        );
    }
}

export default LandingPage;