import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Notes from './components/Notes';

ReactDOM.render(<Notes />, document.getElementById('root'));
serviceWorker.unregister();
