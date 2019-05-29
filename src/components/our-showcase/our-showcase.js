import React, { Component } from 'react';

import './our-showcase.scss'

import InstaService from '../../services/instaservice';

import Title from "../title";
import OurShowcaseFilter from "../our-showcase-filter";
import ProductList from "../product-list";

import ProductBlock from "../product-block";

export default class OurShowcase extends Component {

	InstaService = new InstaService();

	state = {
	  watches: [],
		error: false
	};

	componentDidMount() {
		this.updateWatches();
	}

	updateWatches() {
		this.InstaService.getAllWatches()
			.then(this.onWatchesLoaded)
			.catch(this.onError)
	}

	onWatchesLoaded = (watches) => {
		this.setState({
			watches,
			error: false
		})
	};

	onError = (err) => {
		this.setState({
			error: true
		})
	};

	render() {
		return (
			<ProductBlock classProps={`our-showcase`}>
				<div className="container">
					<Title title="Our Showcase" classMode="our-showcase__title"/>
					<OurShowcaseFilter/>
					<ProductList data={this.state.watches}/>
				</div>
			</ProductBlock>
		);
	}
}