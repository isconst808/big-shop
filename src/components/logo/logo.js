import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './logo.scss'

import { verifyСlassProps } from '../../utils';

const Logo = ({classProps}) => {

	return (
		<Link to={'/'} className={`logo ${verifyСlassProps(classProps)}`}>Big Shop</Link>
	);
};

Logo.propTypes = {
	classProps: PropTypes.string
};

export default Logo;