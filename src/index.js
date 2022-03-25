import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from "redux";
import {Provider} from "react-redux";


const defaultState = {
    cash: 100,
}


const reducer = (state = defaultState, action) => {

    switch (action.type) {

        case "ADD_CASH":
            return {...state, cash: state.cash + action.payload}

        case "GET_CASH":
            return {...state, cash: state.cash - action.payload}

        default:
            return state
    }
}

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root'));

reportWebVitals();
