import { createStore, applyMiddleware, combineReducers } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import user from './userReducer';
import plan from './planReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
    user,
    plan
});

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(promiseMiddleware)));