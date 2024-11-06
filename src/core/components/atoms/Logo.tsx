import React from 'react';
import logo from '../../../app/img/logo.png';
import Image from 'next/image';

const Logo = () => {
	return (
		<Image
			src={logo}
			alt="Pixel Innov Logo"
			className="h-12 sm:h-12 object-contain "
		/>
	);
};

export default Logo;
