import { combineReducers } from 'redux';

import appReducer from './AppReducer';
import authReducer from './AuthReducer';

// Redux: Root Reducer
const rootReducer = combineReducers({
  appReducer,
  authReducer,
});

export default rootReducer;
