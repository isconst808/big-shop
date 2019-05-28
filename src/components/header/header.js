import React from 'react';

import './header.scss'
import Logo from "../logo";
import BtnGroup from "../btn-group";

const Header = () => {
	return (
		<header className={'header'}>
			<div className="container header__container">
				<div className="row">
					<div className="col-12 col-md-4">
						<Logo classProps={'header__logo'}/>
					</div>
					<div className="col-12 col-md-8">
						<BtnGroup classMode={'header__btn-group'}/>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;