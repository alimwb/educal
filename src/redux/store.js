import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import logger from 'redux-logger';
 
import rootReducer from './reducers/rootReducer';


const persistConfig = {
	key: 'root',
	storage,
  }

  const persistedReducer = persistReducer(persistConfig, rootReducer)
  const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
  );

export default store;