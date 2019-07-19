import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav id="fh5co-menu-wrap" role="navigation">
            <ul className="sf-menu" id="fh5co-primary-menu">
                <li className="active"><a href="index.html">Home</a></li>
                <li>
                    <a href="vacation.html" className="fh5co-sub-ddown">Vacations</a>
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
                <li><a href="car.html">Car</a></li>
                <li><a href="blog.html">Blog</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;