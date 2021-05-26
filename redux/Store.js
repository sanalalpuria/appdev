import { createStore, combineReducers } from 'redux';
import AuthReducer from './Reducers/AuthReducers';
import CartReducers from './Reducers/CartReducers';

const AppReducers = combineReducers({
  AuthReducer,
  CartReducers,
});

const rootReducer = (state, action) => {
  return AppReducers(state, action);
};

const store = createStore(rootReducer);
export default store;
