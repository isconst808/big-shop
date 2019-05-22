import React from 'react';
import PropTypes from 'prop-types';

import './title.scss'

import { verifyСlassProps } from "../../utils";

const Title = ({title, classMode}) => {



	return (
		<h1 className={`title ${verifyСlassProps(classMode)}`}>{title}</h1>
	);
};

Title.propTypes = {
	title: PropTypes.string,
	classMode: PropTypes.string
};

Title.defaultProps = {
	title: 'Title'
};

export default Title;