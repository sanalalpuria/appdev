import * as Actions from '../Actions';

const AuthReducers = (state = { user: null }, action) => {
  const { type, payload } = action;
  console.log('Payload -> ', payload);
  switch (type) {
    case Actions.LOGIN:
      return {
        user: payload,
      };
    case Actions.LOGOUT:
      return {
        user: null,
      };
    default:
      return state;
  }
};

export default AuthReducers;