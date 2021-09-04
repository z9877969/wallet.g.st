import axios from "axios";

const API_KEY = "AIzaSyDc8MYd3sZcwYx1_D9_7ur7YeFN5WxBZ5Y";
const endPoint = {
  REGISTER: "/accounts:signUp",
  LOGIN: "/accounts:signInWithPassword",
  CUR_USER: "/accounts:lookup",
};
axios.defaults.baseURL = "https://identitytoolkit.googleapis.com/v1";
axios.defaults.params = {
  key: API_KEY,
};

export const userRegisterApi = (userData) => {
  return axios
    .post(endPoint.REGISTER, { ...userData, returnSecureToken: true })
    .then(({ data: { idToken, localId, refreshToken, email } }) => ({
      idToken,
      localId,
      refreshToken,
      email,
    }))
    .catch((err) => {
      throw err;
    });
};
export const userLoginApi = (userData) => {
  return axios
    .post(endPoint.LOGIN, { ...userData, returnSecureToken: true })
    .then(({ data: { idToken, localId, refreshToken, email } }) => ({
      idToken,
      localId,
      refreshToken,
      email,
    }))
    .catch((err) => {
      throw err;
    });
};

export const getCurUserApi = (idToken) => {
  return axios
    .post(endPoint.CUR_USER, { idToken: idToken })
    .then(({ data }) => {
      const { email, localId } = data.users[0];
      return { email, localId };
    })
    .catch((err) => {
      throw err;
    });
};
