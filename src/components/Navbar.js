import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav id="fh5co-menu-wrap" role="navigation">
            <ul className="sf-menu" id="fh5co-primary-menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/alojamientos">Alojamientos</Link></li>
                {/* <li ><a href="index.html">Inicio</a></li>
                <li><a href="flight.html"></a></li>
                <li><a href="hotel.html">Blog</a></li>
                <li><a href="car.html">Iniciar sesión</a></li> */}
            </ul>
        </nav>
    )
}

export default Navbar;