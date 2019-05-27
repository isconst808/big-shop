import React from 'react';

import './trendy-arrivals.scss'
import Title from "../title";
import ProductList from "../product-list";

import { bags } from '../our-showcase-data'

const TrendyArrivals = () => {
	return (
		<section className={'trendy-arrivals'}>
			<div className="container">
				<Title title={'Trendy Arrivals'} classMode={'trendy-arrivals__title'}/>
				<ProductList data={bags}/>
			</div>
		</section>
	);
};

export default TrendyArrivals;