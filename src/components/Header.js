import React from 'react';
import Logo from '../images/logo-airbots.png';
import Navbar from './Navbar';

function Header() {
    return (

		<header id="fh5co-header-section" className="sticky-banner">
			<div className="container">
				<div className="nav-header">
					<a href="#" className="js-fh5co-nav-toggle fh5co-nav-toggle dark"><i></i></a>
					<h1 id="fh5co-logo"><a href="index.html"><i className="icon-airplane"></i>Travel</a></h1>
					<Navbar />
				</div>
			</div>
		</header>
    )
}

export default Header;