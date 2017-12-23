import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Docs from './docs/Docs';
import '../node_modules/highlight.js/styles/atom-one-dark.css'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Docs />,
  document.getElementById('root'));
registerServiceWorker();
