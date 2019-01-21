import * as ApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user,
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors,
});

export const login = user => dispatch => {
  return ApiUtil.login(user).then(user => {
    return dispatch(receiveCurrentUser(user));
  }), err => (
    dispatch(receiveErrors(err.responseJSON))
  );
};

export const signup = user => dispatch => {
  return ApiUtil.signup(user).then(user => {
    return dispatch(receiveCurrentUser(user));
  }), err => (dispatch(receiveErrors(err.responseJSON)));
};

export const logout = user => dispatch => {
  return ApiUtil.logout(user).then(user => {
    return dispatch(logoutCurrentUser(user));
  }), err => (dispatch(receiveErrors(err.responseJSON)));
};