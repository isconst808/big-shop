import React, {Component} from 'react';
// import PropTypes from 'prop-types';

import ProductListItem from "../product-list-item";

import './product-list.scss'



export default class ProductList extends Component {

	state = {
	  bags: [
			{
				id: 0,
				title: 'Black Genuine Leather Bags',
				price: '23.20',
				img: 'https://media.discordapp.net/attachments/575413390592180235/575576749161840670/bag_1.png',
				like: '20',
				msg: '10'
			},
			{
				id: 1,
				title: 'Fashion Red Leather Bags',
				price: '20.16',
				img: 'https://media.discordapp.net/attachments/575413390592180235/575576750944288769/bag_2.png',
				like: '10',
				msg: '20'
			},
			{
				id: 2,
				title: 'Fashion Genuine Leather Bags',
				price: '30.14',
				img: 'https://media.discordapp.net/attachments/575413390592180235/575576753641226240/bag_3.png',
				like: '10',
				msg: '20'
			},
			{
				id: 3,
				title: 'Simply Leather Bags',
				price: '15.20',
				img: 'https://media.discordapp.net/attachments/575413390592180235/575576755969196063/bag_4.png',
				like: '10',
				msg: '20'
			},
			{
				id: 4,
				title: 'New Fashion Leather Bags',
				price: '25.20',
				img: 'https://media.discordapp.net/attachments/575413390592180235/575576758787506177/bag_5.png',
				like: '253',
				msg: '120'
			},
			{
				id: 5,
				title: 'Single Hand Models Bags',
				price: '17.6',
				img: 'https://media.discordapp.net/attachments/575413390592180235/575576761052692490/bag_6.png',
				like: '10',
				msg: '20'
			}
		]
	};

	render() {

		const { bags } = this.state;
		const bagsList = bags.map((item) => {
			return (
				<div className='col-lg-4 col-md-6 col-8' key={item.id}>
					<ProductListItem {...item}/>
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
	}
}