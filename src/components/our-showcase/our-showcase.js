import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import './our-showcase.scss'

import Title from "../title";
import OurShowcaseTabs from "../our-showcase-tabs";
import ProductList from "../product-list";
import { watches, mobile, fashion, furniture } from '../our-showcase-data';


const OurShowcase = () => {

	return (
		<div className='our-showcase'>
			<div className="container">
				<Title title="Our Showcase" classMode="our-showcase__title"/>
				<OurShowcaseTabs/>
				<Route path={"/home/fashion"} render={() => <ProductList data={fashion}/>}/>
				<Route path={"/home/furniture"} render={() => <ProductList data={furniture}/>}/>
				<Route path={"/home"} exact render={() => <ProductList data={watches}/>}/>
				<Route path={"/home/mobile"} render={() => <ProductList data={mobile}/>}/>
			</div>
		</div>
	);
};

export default OurShowcase;