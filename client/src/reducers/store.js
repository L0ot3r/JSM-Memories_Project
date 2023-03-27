import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import postsReducer from './postsReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({ 
  postsReducer,
  authReducer,
});

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

export default store;
