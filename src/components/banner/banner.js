import React from 'react';

import './banner.scss';
import Button from "../button";
import Header from "../header";


const Banner = () => {
	return (
		<div className={'banner'}>
			<img src="https://media.discordapp.net/attachments/575413390592180235/575576765922017290/girl.png" alt="Girl in red dress" className={'banner__img'}/>
			<div className="container banner__container">
				<Header />
				<div className="row banner__row">
					<div className="col-xl-6">
						<h1 className={"banner__title"}>Summer <span>Collection</span></h1>
						<span className={'banner__discount'}>25% <span>off</span></span>
						<Button classMode={'banner__btn'}>Details<i className="fas fa-long-arrow-alt-right banner__btn-icon"></i></Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;