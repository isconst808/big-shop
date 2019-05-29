import React, {Component} from 'react';

import './trendy-arrivals.scss'
import Title from "../title";
import ProductList from "../product-list";

import ProductBlock from "../product-block";
import InstaService from "../../services/instaservice";



export default class TrendyArrivals extends Component {

	InstaService = new InstaService();

	state = {
		bags: [],
		error: false
	};

	componentDidMount() {
		this.updateBags();
	}

	updateBags() {
		this.InstaService.getAllBags()
			.then(this.onBagsLoaded)
			.catch(this.onError)
	}

	onBagsLoaded = (bags) => {
		this.setState({
			bags,
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
			<ProductBlock classProps={'trendy-arrivals'}>
				<div className="container">
					<Title title={'Trendy Arrivals'} classMode={'trendy-arrivals__title'}/>
					<ProductList data={this.state.bags}/>
				</div>
			</ProductBlock>
		);
	}
}