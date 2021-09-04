import { combineReducers, createReducer } from "@reduxjs/toolkit";
import {
  addCostsSuccess,
  addIncomesSuccess,
  getCostsSuccess,
  getIncomesSuccess,
} from "./transactionsActions";
import { logOutAction } from "../auth/authActions";

const costsReducer = createReducer([], {
  [addCostsSuccess]: (state, action) => [...state, action.payload],
  [getCostsSuccess]: (_, { payload }) => payload,
  [logOutAction]: () => [],
  //   [editCostsSuccess]: (state, { payload }) =>
  //     state.map((transaction) =>
  //       transaction.id === payload.id ? payload : transaction
  //     ),
});

const incomesReducer = createReducer([], {
  [addIncomesSuccess]: (state, action) => [...state, action.payload],
  [getIncomesSuccess]: (_, { payload }) => payload,
  [logOutAction]: () => [],
});

const transactions = combineReducers({
  costs: costsReducer,
  incomes: incomesReducer,
});

export default transactions;
