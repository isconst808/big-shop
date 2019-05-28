import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { verifyСlassProps } from '../../utils';

import './product-block.scss'

export default class ProductBlock extends Component {
	render() {

		const { classProps } = this.props;

		return (
			<section className={`product-block ${verifyСlassProps(classProps)}`}>
				{this.props.children}
			</section>
		);
	}
}

ProductBlock.propTypes = {
	classProps: PropTypes.string
};