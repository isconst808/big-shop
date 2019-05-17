import React from 'react';
// import PropTypes from 'prop-types';

import './product-list-item.scss'

const ProductListItem = ({title, img, price, like, msg}) => {
 console.log(price);

	return (
		<div className='product-list-item'>
			<header className='product-list-item__header'>
				<div className="row">
					<div className="col">
						<button className="product-list-item__like">
							<i className="far fa-heart icon"></i>
							<span>{ like }</span>
						</button>
					</div>
					<div className="col">
						<button className="product-list-item__msg">
							<i className="far fa-comments icon"></i>
							<span>{ msg }</span>
						</button>
					</div>
				</div>
			</header>
			<div className="product-list-item__info">
				<div className="product-list-item__block-img">
					<img className='product-list-item__img' src={ img } alt={ title }/>
				</div>
				<footer className="product-list-item__footer">
					<h4 className="product-list-item__title">{ title }</h4>
					<p className="product-list-item__price">&#36; {price}</p>
				</footer>
			</div>
			<button className='product-list-item__btn'>Add to Cart</button>
		</div>
	);
};

export default ProductListItem;