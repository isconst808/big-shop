import React from 'react';
import PropTypes from 'prop-types';

import './button.scss'

const Button = (props) => {

	const { classMode} = props;

	return (
		<button className={`btn ${classMode}`}>
			{ props.children }
		</button>
	);
};

Button.propTypes = {
	classMode: PropTypes.string
};

export default Button;