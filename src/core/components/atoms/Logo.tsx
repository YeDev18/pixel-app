import React from 'react';
import logo from '../../../app/img/logo.png';

const Logo = () => {
	return (
		<img
			src={logo}
			alt="Pixel Innov Logo"
			className="h-8 sm:h-10 object-contain"
		/>
	);
};

export default Logo;
