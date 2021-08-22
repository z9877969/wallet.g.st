import { combineReducers, createReducer } from "@reduxjs/toolkit";
import {
  getCostsCatSuccess,
  getIncomesCatSuccess,
  addCostsCatSuccess,
  addIncomesCatSuccess,
  setIsDefaultCosts,
  setIsDefaultIncomes,
  unsetIsDefaultCosts,
  unsetIsDefaultIncomes,
  removeCostsCatSuccess,
  removeIncomesCatSuccess,
} from "./categoriesActions";

const costsCat = createReducer([], {
  [getCostsCatSuccess]: (_, { payload }) => payload,
  [addCostsCatSuccess]: (state, { payload }) => [...state, payload],
  [removeCostsCatSuccess]: (state, { payload }) =>
    state.filter((category) => category.id !== payload),
});

const incomesCat = createReducer([], {
  [getIncomesCatSuccess]: (_, { payload }) => payload,
  [addIncomesCatSuccess]: (state, { payload }) => [...state, payload],
  [removeIncomesCatSuccess]: (state, { payload }) =>
    state.filter((category) => category.id !== payload),
});

const isDefault = createReducer(
  {
    costs: false,
    incomes: false,
  },
  {
    [setIsDefaultCosts]: (state) => ({ ...state, costs: true }),
    [setIsDefaultIncomes]: (state) => ({ ...state, incomes: true }),
    [unsetIsDefaultCosts]: (state) => ({ ...state, costs: false }),
    [unsetIsDefaultIncomes]: (state) => ({ ...state, incomes: false }),
  }
);

const categories = combineReducers({
  costsCat,
  incomesCat,
  isDefault,
});

export default categories;
