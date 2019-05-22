import React, {Component} from 'react';

import './footer-social.scss'

export default class  extends Component {

	state = {
		social: [
			{
				link: '/',
				icon: 'fa-facebook-f'
			},
			{
				link: '/',
				icon: 'fa-google-plus-g'
			},
			{
				link: '/',
				icon: 'fa-instagram'
			},
			{
				link: '/',
				icon: 'fa-twitter'
			}
		]
	};

	render() {

		const { social } = this.state;

		const socialLink = social.map(({link, icon}, id) => {
			return (
				<a key={id} href={`${link}`} className="footer-social__link">
					<i className={`fab ${icon} footer-social__icon`}></i>
				</a>
			);
		});

		return (
			<div className={'footer-social'}>
				<div className="footer-social__links">
					{ socialLink }
				</div>
			</div>
		);
	}
}