import React from 'react';

const Card = ({ info }) => {
	return (
		<div>
			<img alt="robots" src="https://robohash.org/Nukinuki?set=set4" />
			<h2>{info.name}</h2>
			<p>{info.email}</p>
			<p>{info.address}</p>
		</div>
		// 	<div>
		// 	<img alt="robots" src="https://robohash.org/Nuki?set=set4" />
		// 	<h2>Jane Doe</h2>
		// 	<p>robo@robots.org</p>
		// </div>
	);
};

export default Card;
