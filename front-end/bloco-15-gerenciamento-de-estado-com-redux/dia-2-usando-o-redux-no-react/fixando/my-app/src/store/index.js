import { legacy_createStore as createStore, combineReducers } from "redux";
import rootReducer from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools());

export default store;