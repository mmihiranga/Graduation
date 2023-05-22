import { combineReducers } from 'redux';

import PackageReducer from './PackageReducer'
import CartReducer from './CartReducer'

// Redux: Root Reducer
const rootReducer = combineReducers({
  PackageReducer,
  CartReducer,
});

export default rootReducer;
