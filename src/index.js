import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {combineReducers, createStore} from "redux";
import {modal} from "./store/reducers";
import {cart} from "./store/cartReducer";
import {Provider} from "react-redux";

const store = createStore(combineReducers({modal, cart}));

//store.subscribe(() => console.log('action is ', store.getState()))

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
