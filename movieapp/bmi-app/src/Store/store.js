
import {
    legacy_createStore,
    combineReducers,
    compose,
    applyMiddleware,
  } from 'redux';
  import thunk from 'redux-thunk';
import { AppReducer } from '../Reducer/appReducer';
import { AuthReducer } from '../Reducer/loginReducer';
  
  
  const rootReducer = combineReducers({  app:AppReducer,auth:AuthReducer });
  
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
  export const store = legacy_createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
  