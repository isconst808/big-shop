import React from 'react';

import './header.scss'
import Logo from "../logo";
import BtnGroup from "../btn-group";

const Header = () => {
	return (
		<header className={'header'}>
			<div className="container">
				<div className="row justify-content-between">
					<div className="col">
						<Logo classProps={'header__logo'}/>
					</div>
					<div className="col align-self-end">
						<BtnGroup classMode={'header__btn-group'}/>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;