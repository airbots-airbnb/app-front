import React from 'react';
import Logo from '../images/logo-airbots.png';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

function Header() {
	return (

		<header id="fh5co-header-section" className="sticky-banner">
			<div className="container">
				<div className="nav-header">
					<a href="#" className="js-fh5co-nav-toggle fh5co-nav-toggle dark"><i></i></a>
					<h1 id="fh5co-logo">
                    <Link to="/">Home
                         <i className="icon-airplane"></i>AIRBOT</Link> </h1>
					<Navbar />
				</div>
			</div>
		</header>
	)
}

export default Header;