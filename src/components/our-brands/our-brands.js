import React from 'react';

import './our-brands.scss'
import Title from "../title";

const OurBrands = () => {
	return (
		<div className={'our-brands'}>
			<div className="container">
				<div className="row align-items-center">
					<div className="col">
						<Title title={'Our Brands'} classMode={'our-brands__title'}/>
						<h3 className={'our-brands__desc'}>Small Shoes 2017 new Arrivals  mini
							Messenger <span>Classic Shoes</span></h3>
						<p className={'our-brands__text'}>In porttitor elit ac mi placerat hendrerit. Morbi accumsan, erat in ullamcorper consectetur, nisi erat efficitur eros, sagittis tristique odio turpis vitae dui. Vestibulum gravida est ut erat pretium, non pretium diam feugiat. Integer egestas suscipit lorem ac fermentum. Integer at mauris vitae justo sagittis dapibus. Pellentesque sit amet nisl vitae orci vehicula faucibus. Fusce et lat, feugiat est.</p>
					</div>
					<div className="col">
						<div className="our-brands__img-block">
							<img src="https://media.discordapp.net/attachments/575413390592180235/575576766370938900/phone.png" alt=""/>
							<div className="our-brands__circle-block">
								<div className="our-brands__circle"></div>
							</div>
						</div>

					</div>
				</div>
			</div>
			
		</div>
	);
};

export default OurBrands;