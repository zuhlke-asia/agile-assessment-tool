import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import registerServiceWorker from './registerServiceWorker';
import './styles/lib/zuehlke.min.css';
import './styles/index.scss';
import {pollyFillUrlSearchParamForEdge} from "./api";

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
pollyFillUrlSearchParamForEdge(window);
