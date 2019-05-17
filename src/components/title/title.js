import React from 'react';
import PropTypes from 'prop-types';

import './title.scss'

const Title = ({title, classMode}) => {

	function getBEMClass () {
		let className = '';
		let arr = classMode.split(' ');
		arr.map((word) => {
			return className += ` title_${word}`
		});
		return className;
	}

	const className = (classMode) ? getBEMClass() : '';

	return (
		<h1 className={`title${className}`}>{title}</h1>
	);
};

Title.propTypes = {
	title: PropTypes.string,
	className: PropTypes.string
};

Title.defaultProps = {
	title: 'Title'
};

export default Title;