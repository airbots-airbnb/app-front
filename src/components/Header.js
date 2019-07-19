import React from 'react';
import Logo from '../images/logo-airbots.png';
import Navbar from '../components/Navbar';

function Header() {
    return (

        <header id="fh5co-header-section" className="sticky-banner stuck">
            <div className="container">
                <div className="nav-header">
                    <a href="#" className="js-fh5co-nav-toggle fh5co-nav-toggle dark"><i></i></a>                   
                        
                        <div style={{backgroundImage:`url(${Logo})`}} className="img-logo"></div>                      
                    
                    <Navbar />
                    
                </div>
            </div>
        </header>
    )
}

export default Header;