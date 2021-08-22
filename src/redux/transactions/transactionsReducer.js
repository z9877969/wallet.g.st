import { combineReducers, createReducer } from "@reduxjs/toolkit";
import {
  addCostsSuccess,
  addIncomesSuccess,
  getCostsSuccess,
  getIncomesSuccess,
} from "./transactionsActions";

const costsReducer = createReducer([], {
  [addCostsSuccess]: (state, action) => [...state, action.payload],
  [getCostsSuccess]: (_, { payload }) => payload,
  //   [editCostsSuccess]: (state, { payload }) =>
  //     state.map((transaction) =>
  //       transaction.id === payload.id ? payload : transaction
  //     ),
});

const incomesReducer = createReducer([], {
  [addIncomesSuccess]: (state, action) => [...state, action.payload],
  [getIncomesSuccess]: (_, { payload }) => payload,
});

const transactions = combineReducers({
  costs: costsReducer,
  incomes: incomesReducer,
});

export default transactions;
