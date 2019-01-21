import React, { Component } from 'react';
import './App.css';

// Component Parts:
import Nav from './parts/nav/nav.js';
import Logo from './parts/logo/logo.js';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Nav />
				<Logo />
			</div>
		);
	}
}

export default App;
