import React from 'react';
import Tilt from 'react-tilt';
import './logo.css';

import logo_file from './logo-pill.png';

const Logo = () => {
	return (
		<div>
			<Tilt className="Tilt" options={{ max: 45 }} style={{ height: 75, width: 75 }}>
				<div className="Tilt-inner">
					<img style={{ paddingTop: '15px' }} alt="logo.png" src={logo_file} />
					<h3>HangTok</h3>
				</div>
			</Tilt>
			<h4>Have you daily dose</h4>
		</div>
	);
};

export default Logo;
