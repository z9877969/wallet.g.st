import { combineReducers, createReducer } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {
  userRegisterSuccess,
  userLoginSuccess,
  getCurUserSuccess,
  logOutAction,
} from "./authActions";

const iS = {
  user: {
    email: "",
    localId: "",
    idToken: null,
    refreshToken: null,
  },
  isAuth: false,
};

const userReducer = createReducer(iS.user, {
  [userRegisterSuccess]: (_, { payload }) => payload,
  [userLoginSuccess]: (_, { payload }) => payload,
  [getCurUserSuccess]: (state, { payload }) => ({ ...state, ...payload }),
  [logOutAction]: () => iS.user,
});

const isAuthReducer = createReducer(iS.isAuth, {
  [userRegisterSuccess]: () => true,
  [userLoginSuccess]: () => true,
  [getCurUserSuccess]: () => true,
  [logOutAction]: () => iS.isAuth,
});

const authPersistConfig = {
  key: "tokens",
  storage,
  whitelist: ["idToken", "refreshToken"],
};

export default combineReducers({
  user: persistReducer(authPersistConfig, userReducer),
  isAuth: isAuthReducer,
});
