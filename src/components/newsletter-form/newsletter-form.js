import React from 'react';

import './newsletter-form.scss';


import Button from "../button";

const NewsletterForm = () => {
	return (
		<form className="newsletter-form">
			<input type="text" className={'newsletter-form__input'} placeholder={'Enter your email address..'}/>
			<Button classMode={'newsletter-form__btn'}>Submit</Button>
		</form>
	);
};

export default NewsletterForm;