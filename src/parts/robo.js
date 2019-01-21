import React from 'react';
import info from './data.js';

const Card = () => {
	const { name, email, address } = info;
	return (
		<div>
			<h2>{name}</h2>
			<p>{email}</p>
			<p> &copy; 2019 {address}</p>
		</div>
	);
};

export default Card;
