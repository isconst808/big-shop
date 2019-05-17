import React from 'react';
import Banner from "../banner";
import Newsletter from "../newsletter";


const HomePage = () => {
	return (
		<div className='container'>
			<Newsletter />
			<Banner />
		</div>
	);
};

export default HomePage;