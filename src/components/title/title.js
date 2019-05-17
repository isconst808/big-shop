import React from 'react';
import PropTypes from 'prop-types';

import './title.scss'

const Title = ({title, classMode}) => {

	function getBEMClass () {
		let clazzName = '';
		let arr = classMode.split(' ');
		arr.map((word) => {
			return clazzName += ` title_${word}`
		});
		return clazzName;
	}

	const className = (classMode) ? getBEMClass() : '';

	return (
		<h1 className={`title${className}`}>{title}</h1>
	);
};

Title.prototype = {
	title: PropTypes.string,
	className: PropTypes.string
};

Title.defaultProps = {
	title: 'Title'
};

export default Title;