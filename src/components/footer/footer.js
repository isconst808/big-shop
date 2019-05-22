import React from 'react';

import './footer.scss'
import Logo from "../logo";
import FooterRubric from "../footer-rubric";
import FooterSocial from "../footer-social";


const Footer = () => {
	return (
		<footer className='footer'>

			<header className="container footer__top-block">
				<Logo classProps={"footer__logo"}/>
				<FooterRubric />
				<FooterSocial />
			</header>

			<footer className="footer__copy">
				<div className="container">
					<span>&copy; Copyright 2017. Big Shop by Victor Themes </span>
				</div>
			</footer>

		</footer>
	);
};

export default Footer;