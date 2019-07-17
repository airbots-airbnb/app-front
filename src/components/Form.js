import React, { Fragment } from 'react';
import image from '../images/cover_bg_3.jpg';

function Form(){
    return(
        <Fragment>
            <div className="fh5co-hero">
                <div className="fh5co-overlay"></div>
                <div className="fh5co-cover" data-stellar-background-ratio="0.5" style={{backgroundImage:`url(${image})`}} >
                    <div className="desc">
                        <div className="container">
                        <div className="row">
                            <div className="col-sm-5 col-md-5">
                                <div className="tabulation animate-box">
                                    <ul className="nav nav-tabs" role="tablist">
                                    <li role="presentation" className="active">
                                    <a href="#flights" aria-controls="flights" role="tab" data-toggle="tab">Flights</a>
                                    </li>
                                    <li role="presentation">
                                    <a href="#hotels" aria-controls="hotels" role="tab" data-toggle="tab">Hotels</a>
                                    </li>
                                    <li role="presentation">
                                    <a href="#packages" aria-controls="packages" role="tab" data-toggle="tab">Packages</a>
                                    </li>
                                    </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>                     
        </Fragment>
    )
}

export default Form;