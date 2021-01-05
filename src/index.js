import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from './reducers/rootReducer';
import { Main } from './components/main';
import './vendors/bootstrap.css';
import './vendors/index.scss';
import thunk from 'redux-thunk'

const devToolsCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancer = process.env.NODE_ENV !== 'production' && devToolsCompose ? devToolsCompose : compose;
const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
