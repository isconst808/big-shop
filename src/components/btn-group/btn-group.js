import React from 'react';

import './btn-group.scss'

const BtnGroup = () => {
	return (
		<div className="btn-group">
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

export default BtnGroup;