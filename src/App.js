import React, { Component } from 'react';
import './App.css';

// Component Parts:
import Nav from './parts/nav/nav.js';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Nav />
			</div>
		);
	}
}

export default App;
