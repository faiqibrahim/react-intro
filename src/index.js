import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';


import timeStore from './store/clock/clock-reducer';

export const store = createStore(timeStore, applyMiddleware(thunk));

// HOC - Higher Order Components
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root'));
