import { createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import applyMiddleware from 'redux-thunk';

//WES Här ska jag importera datan!!!!!!!!!!!
// // import comments from './ data/comments


//WEES Tror inte jag ska ha den här.
// const defaultState = {
//     posts,
//     comments
// };

const initialState = {}; //Ska denna vara här???? 

const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware));

export const history = syncHistoryWithStore(browserHistory, store);


export default store;
