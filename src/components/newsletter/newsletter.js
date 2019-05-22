import React from 'react';

import './newsletter.scss';
import Title from "../title";
import NewsletterForm from "../newsletter-form";

const Newsletter = () => {
	return (
		<div className="newsletter">
			<div className="container">

				<div className="row">
					<div className="col">
						<div className="newsletter__title-block">
							<Title title={'Newsletter'} classMode={"newsletter__title"}/>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col">
						<NewsletterForm />
					</div>
				</div>

			</div>
		</div>
	);
};

export default Newsletter;