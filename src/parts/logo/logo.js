import React from 'react';
import Tilt from 'react-tilt';
import './logo.css';

import logo_file from './logo-pill.png';

const Logo = () => {
	return (
		<div className="ma4 mt0">
			<Tilt className="Tilt br2 shadow-2" options={{ max: 45 }} style={{ height: 120, width: 120 }}>
				<div className="Tilt-inner pa3">
					<img alt="logo.png" src={logo_file} />
				</div>
				<h3>HangTok</h3>
			</Tilt>
			<h4>Have you daily dose</h4>
		</div>
	);
};

// not yet pushed: 22 Jan 2019

export default Logo;
