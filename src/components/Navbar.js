import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(){
    return(          
        <nav id="fh5co-menu-wrap" role="navigation">
            <ul className="sf-menu sf-js-enabled sf-arrows" id="fh5co-primary-menu" >
               <li><Link to="/" >Inicio</Link></li>
               <li><Link to="/alojamientos" >Alojamientos</Link> </li>         
               <li><Link to="/alojamientos" >Registrarse</Link> </li>
               <li><Link to="/alojamientos" >Blog</Link> </li>
            </ul>
        </nav>
    )
}

export default Navbar;