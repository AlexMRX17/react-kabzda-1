import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import State from './redux/State';

ReactDOM.render(
<App />,
  document.getElementById('root')
)
;
serviceWorker.unregister();
