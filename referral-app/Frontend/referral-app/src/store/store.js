
import {
    legacy_createStore,
    combineReducers,
    compose,
    applyMiddleware,
  } from 'redux';
  import thunk from 'redux-thunk';
import { AuthReducer } from '../reducer/loginReducer';

  
  
  const rootReducer = combineReducers({  auth:AuthReducer });
  
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
  export const store = legacy_createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );