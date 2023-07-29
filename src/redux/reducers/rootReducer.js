import {combineReducers} from 'redux';
import newsReducer from './newsReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  newsDetails: newsReducer,
  authData: authReducer
})

export default rootReducer;