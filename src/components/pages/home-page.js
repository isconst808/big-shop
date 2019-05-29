import React from 'react';
import Banner from "../banner";
import TrendyArrivals from "../trendy-arrivals";
import OurBrands from "../our-brands";
import OurShowcase from "../our-showcase";
import Newsletter from "../newsletter";
import Footer from "../footer";

import './home-page.scss';


const HomePage = () => {
	return (
		<section className={'home-page'}>
			<Banner/>
			<TrendyArrivals />
			<OurBrands/>
			<OurShowcase/>
			<Newsletter/>
			<Footer/>
		</section>
	);
};

export default HomePage;