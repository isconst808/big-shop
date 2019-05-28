import React from 'react';

import './trendy-arrivals.scss'
import Title from "../title";
import ProductList from "../product-list";

import { bags } from '../our-showcase-data'
import ProductBlock from "../product-block";

const TrendyArrivals = () => {
	return (
		<ProductBlock classProps={'trendy-arrivals'}>
			<div className="container">
				<Title title={'Trendy Arrivals'} classMode={'trendy-arrivals__title'}/>
				<ProductList data={bags}/>
			</div>
		</ProductBlock>
	);
};

export default TrendyArrivals;