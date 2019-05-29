import React from 'react';
import PropTypes from 'prop-types';

import './logo.scss'

import { verifyСlassProps } from '../../utils';

const Logo = ({classProps}) => {

	return (
		<a href={'/'} className={`logo ${verifyСlassProps(classProps)}`}>Big Shop</a>
	);
};

Logo.propTypes = {
	classProps: PropTypes.string
};

export default Logo;