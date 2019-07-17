import React from 'react';
import Logo from '../images/logo-airbots.png';

function Header() {
    return (

        <header id="fh5co-header-section" className="sticky-banner stuck">
            <div className="container">
                <div className="nav-header">
                    <a href="#" className="js-fh5co-nav-toggle fh5co-nav-toggle dark"><i></i></a>
                    <h1 id="fh5co-logo"><a href="index.html"><i className="icon-airplane"></i>Travel</a></h1>

                    <nav id="fh5co-menu-wrap" role="navigation">
                        <ul className="sf-menu sf-js-enabled sf-arrows" id="fh5co-primary-menu" >
                            <li><a href="index.html">Home</a></li>
                            <li className="">
                                <a href="vacation.html" className="fh5co-sub-ddown sf-with-ul">Vacations</a>
                                <ul className="fh5co-sub-menu">
                                    <li><a href="#">Family</a></li>
                                    <li><a href="#">CSS3 &amp; HTML5</a></li>
                                    <li><a href="#">Angular JS</a></li>
                                    <li><a href="#">Node JS</a></li>
                                    <li><a href="#">Django &amp; Python</a></li>
                                </ul>
                            </li>
                            <li><a href="flight.html">Flights</a></li>
                            <li><a href="hotel.html">Hotel</a></li>
                            <li className="active"><a href="car.html">Car</a></li>
                            <li><a href="blog.html">Blog</a></li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;