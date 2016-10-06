import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import reducers from './reducers';
import routes from './routes';

// Middleware
import promise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(
	// Ensures actions will flow through promise middleware before reaching reducers
	promise
)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  	{/* Implementing React Router */}
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('.container'));
