import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Robo from './modules/robo';
import data from './modules/data';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
	<div>
		<Robo info={data} />
		<App />
	</div>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
serviceWorker.register();
