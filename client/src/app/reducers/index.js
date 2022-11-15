import { combineReducers } from 'redux';

import authReducer from './AuthReducer';
import postReducer from './PostReducer';
// char reducer

export const reducers = combineReducers({ authReducer, postReducer })