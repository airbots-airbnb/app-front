import React, { Fragment } from 'react';
import image from '../images/place-1.jpg';
function Content(){

    return(
        <Fragment>
            <div id="fh5co-tours" className="fh5co-section-gray">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 text-center heading-section animate-box">
                            <h3>Hot Tours</h3>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 col-sm-6 fh5co-tours animate-box" data-animate-effect="fadeIn">
                                <div href="#">
                                    <img src={image} className="img-responsive"/>
                                    <div className="desc">
                                        <span></span>
                                        <h3>New York</h3>
                                        <span>3 nights + Flight 5*Hotel</span>
                                        <span className="price">$1,000</span>
                                        <a className="btn btn-primary btn-outline" href="#">Book Now <i className="icon-arrow-right22"></i></a>
                                    </div>
                                </div>
                            </div>
                        <div className="col-md-4 col-sm-6 fh5co-tours animate-box" data-animate-effect="fadeIn">
                            <div href="#">
                                <img src={image} className="img-responsive"/>
                                <div className="desc">
                                    <span></span>
                                    <h3>Philippines</h3>
                                    <span>4 nights + Flight 5*Hotel</span>
                                    <span className="price">$1,000</span>
                                    <a className="btn btn-primary btn-outline" href="#">Book Now <i className="icon-arrow-right22"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 fh5co-tours animate-box" data-animate-effect="fadeIn">
                            <div href="#">
                            
                                <img src={image} className="img-responsive"/>
                                <div className="desc">
                                    <span></span>
                                    <h3>Hongkong</h3>
                                    <span>2 nights + Flight 4*Hotel</span>
                                    <span className="price">$1,000</span>
                                    <a className="btn btn-primary btn-outline" href="#">Book Now <i className="icon-arrow-right22"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 text-center animate-box">
                            <p><a className="btn btn-primary btn-outline btn-lg" href="#">See All Offers <i className="icon-arrow-right22"></i></a></p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Content;