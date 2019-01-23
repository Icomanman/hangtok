import React, { Component } from 'react';
import './App.css';

// Component Parts:
import Particles from 'react-particles-js';
import Nav from './parts/nav/nav.js';
import Logo from './parts/logo/logo.js';

const particles_options = {
	particles: {
		number: {
			value: 250,
			density: {
				enable: true,
				value_area: 400
			}
		}
	},
	interactivity: {
		detect_on: 'canvas',
		events: {
			onhover: {
				enable: true,
				mode: 'repulse'
			}
		}
	}
};

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="particles">
					<Particles params={particles_options} />
				</div>
				<Nav />
				<Logo />
			</div>
		);
	}
}

export default App;
