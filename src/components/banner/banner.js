import React from 'react';

import './banner.scss';

import Button from "../button";

const Banner = () => {
	return (
		<Button classMode={'banner__btn'}>Details <i className="fas fa-long-arrow-alt-right"></i></Button>
	);
};

export default Banner;