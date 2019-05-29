import React from 'react';

import ProductListItem from "../product-list-item";

import './product-list.scss'



const ProductList = ({data}) => {

		const bagsList = data.map((item) => {

			const {id, ...itemProps} = item;

			return (
				<div className='col-lg-4 col-md-6 col-8' key={id}>
					<ProductListItem {...itemProps}/>
				</div>
			);
		});

	return (
		<div className='product-list'>
			<div className="row justify-content-center">
				{ bagsList }
			</div>
		</div>
	);
};

export default ProductList;
