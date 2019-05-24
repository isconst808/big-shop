import React from 'react';
import PropTypes from 'prop-types';

import './btn-group.scss'
import { verifyСlassProps } from "../../utils";

const BtnGroup = ({classMode}) => {
	return (
		<div className={`btn-group ${verifyСlassProps(classMode)}`}>
			<button className="btn-group__search">
				<i className="fas fa-search icon"></i>
				Search
			</button>
			<button className="btn-group__collection">
				Collection
				<i className="fas fa-chevron-down icon"></i>
			</button>
		</div>
	);
};

BtnGroup.propTypes = {
	classMode: PropTypes.string
};

export default BtnGroup;