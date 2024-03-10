import { configureStore } from '@reduxjs/toolkit';
//import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducer';

/*
const composedEnhancer = composeWithDevTools(
  // Add whatever middleware you actually want to use here
  applyMiddleware()
  // other store enhancers if any
)*/

const store = configureStore({ reducer: rootReducer })
export default store;