import React, { Fragment } from 'react';
import Footer from "../footer";
import Newsletter from "../newsletter";
import OurBrands from "../our-brands";


const HomePage = () => {
	return (
		<Fragment>
			<OurBrands />
			<Newsletter />
			<Footer />
		</Fragment>
	);
};

export default HomePage;