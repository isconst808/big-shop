import React from 'react';

import './our-showcase-filter.scss'

const OurShowcaseFilter = () => {
	return (
		<div className='our-showcase-filter'>
			<ul className='our-showcase-filter__list'>
				<li>
					<a href="/" className="our-showcase-filter__link">Fashion</a>
				</li>
				<li>
					<a href="/" className="our-showcase-filter__link">Furnitures</a>
				</li>
				<li>
					<a href="/" className="our-showcase-filter__link">Watches</a>
				</li>
				<li>
					<a href="/" className="our-showcase-filter__link">Mobile</a>
				</li>
				<li>
					<a href="/" className="our-showcase-filter__link">Cloth</a>
				</li>
				<li>
					<a href="/" className="our-showcase-filter__link">Toys</a>
				</li>
			</ul>
		</div>
	);
};

export default OurShowcaseFilter;