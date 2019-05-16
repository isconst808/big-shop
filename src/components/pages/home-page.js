import React from 'react';
import Title from '../title';

const HomePage = () => {
	return (
		<div className='container'>
			<Title title="Trendy Arrivals"/>
			<Title title="Our Brands" classMode='left'/>
			<Title title="Our Showcase"/>
			<Title title="Newsletter" classMode='white'/>
			<Title title="Big Shop" classMode='little'/>
		</div>
	);
};

export default HomePage;