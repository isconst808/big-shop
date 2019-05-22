import React from 'react';
import { Link } from 'react-router-dom';

import './our-showcase-tabs.scss'

const OurShowcaseTabs = () => {
	return (
		<div className='our-showcase-filter'>
			<ul className='our-showcase-filter__list'>
				<li>
					<Link to="/home/fashion" className="our-showcase-filter__link">Fashion</Link>
				</li>
				<li>
					<Link to="/home/furnitures" className="our-showcase-filter__link">Furnitures</Link>
				</li>
				<li>
					<Link to="/home" className="our-showcase-filter__link">Watches</Link>
				</li>
				<li>
					<Link to="/home/mobile" className="our-showcase-filter__link">Mobile</Link>
				</li>
				<li>
					<Link to="/home/cloth" className="our-showcase-filter__link">Cloth</Link>
				</li>
				<li>
					<Link to="/home/toys" className="our-showcase-filter__link">Toys</Link>
				</li>
			</ul>
		</div>
	);
};

export default OurShowcaseTabs;