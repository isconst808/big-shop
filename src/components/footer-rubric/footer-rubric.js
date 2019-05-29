import React, {Component} from 'react';

import './footer-rubric.scss'

export default class FooterRubric extends Component {

	state = {
	  linkValue: ["Man", "Woman", "Kids", "Bags", "Watches", "Toys"]
	};

	render() {

		const { linkValue } = this.state;
		const links = linkValue.map((item, id) => {
			return (
				<a href={"/"} key={id} className={'footer-rubric__link'}>{item}</a>
			);
		});

		return (
			<div className={'footer-rubric'}>
				{ links }
			</div>
		);
	}
}



