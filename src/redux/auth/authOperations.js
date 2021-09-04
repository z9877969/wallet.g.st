import {
  userRegisterApi,
  userLoginApi,
  getCurUserApi,
} from "../../utils/firebaseApi";
import {
  userRegisterRequest,
  userRegisterSuccess,
  userRegisterError,
  userLoginRequest,
  userLoginSuccess,
  userLoginError,
  getCurUserRequest,
  getCurUserSuccess,
  getCurUserError,
} from "./authActions";

export const userRegister = (userData) => (dispatch) => {
  dispatch(userRegisterRequest());

  userRegisterApi(userData)
    .then((data) => dispatch(userRegisterSuccess(data)))
    .catch((err) => dispatch(userRegisterError(err.message)));
};

export const userLogin = (userData) => (dispatch) => {
  dispatch(userLoginRequest());

  userLoginApi(userData)
    .then((data) => dispatch(userLoginSuccess(data)))
    .catch((err) => dispatch(userLoginError(err.message)));
};

export const getCurUser = () => (dispatch, getState) => {
  dispatch(getCurUserRequest());

  const {
    auth: {
      user: { idToken },
    },
  } = getState();

  getCurUserApi(idToken)
    .then((data) => dispatch(getCurUserSuccess(data)))
    .catch((err) => dispatch(getCurUserError(err.message)));
};
