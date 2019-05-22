import React from 'react';

import ProductListItem from "../product-list-item";

import './product-list.scss'



const ProductList = ({data}) => {


	// Временная проверка \\

	let bagsList = null;

	if(typeof data !== "object") {
		bagsList = <h3>{ data }</h3>
	} else {
		bagsList = data.map((item) => {
			return (
				<div className='col-lg-4 col-md-6 col-8' key={item.id}>
					<ProductListItem {...item}/>
				</div>
			);
		});
	}

	return (
		<div className='product-list'>
			<div className="row justify-content-center">
				{ bagsList }
			</div>
		</div>
	);
};

export default ProductList;
