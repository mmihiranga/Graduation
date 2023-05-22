import { combineReducers } from 'redux';

// import appReducer from './AppReducer';
// import authReducer from './AuthReducer';
import AdminReducer from './AdminReducer'
import CartReducer from './CartReducer'

// Redux: Root Reducer
const rootReducer = combineReducers({
  AdminReducer,
  CartReducer,
});

export default rootReducer;
