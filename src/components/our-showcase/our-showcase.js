import React from 'react';
import { Route } from 'react-router-dom';

import './our-showcase.scss'

import Title from "../title";
import OurShowcaseFilter from "../our-showcase-tabs";
import ProductList from "../product-list";
import { watches, mobile, fashion, furnitures, toys, cloth } from '../our-showcase-data';
import ProductBlock from "../product-block";


const OurShowcase = () => {

	return (
		<ProductBlock classProps={`our-showcase`}>
			<div className="container">
				<Title title="Our Showcase" classMode="our-showcase__title"/>
				<OurShowcaseFilter/>
				<Route path={"/home/fashion"} render={() => <ProductList data={fashion}/>}/>
				<Route path={"/home/furnitures"} render={() => <ProductList data={furnitures}/>}/>
				<Route path={"/home"} exact render={() => <ProductList data={watches}/>}/>
				<Route path={"/home/mobile"} render={() => <ProductList data={mobile}/>}/>
				<Route path={"/home/cloth"} render={() => <ProductList data={cloth}/>}/>
				<Route path={"/home/toys"} render={() => <ProductList data={toys}/>}/>
			</div>
		</ProductBlock>
	);
};

export default OurShowcase;