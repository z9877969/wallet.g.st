import { createAction } from "@reduxjs/toolkit";

export const addCostsCatRequest = createAction("categories/addCostsCatRequest");
export const addCostsCatSuccess = createAction("categories/addCostsCatSuccess");
export const addCostsCatError = createAction("categories/addCostsCatError");

export const addIncomesCatRequest = createAction(
  "categories/addIncomesCatRequest"
);
export const addIncomesCatSuccess = createAction(
  "categories/addIncomesCatSuccess"
);
export const addIncomesCatError = createAction("categories/addIncomesCatError");

export const getCostsCatRequest = createAction("categories/getCostsCatRequest");
export const getCostsCatSuccess = createAction("categories/getCostsCatSuccess");
export const getCostsCatError = createAction("categories/getCostsCatError");

export const getIncomesCatRequest = createAction(
  "categories/getIncomesCatRequest"
);
export const getIncomesCatSuccess = createAction(
  "categories/getIncomesCatSuccess"
);
export const getIncomesCatError = createAction("categories/getIncomesCatError");

export const removeCostsCatRequest = createAction(
  "categories/removeCostsCatRequest"
);
export const removeCostsCatSuccess = createAction(
  "categories/removeCostsCatSuccess"
);
export const removeCostsCatError = createAction(
  "categories/removeCostsCatError"
);

export const removeIncomesCatRequest = createAction(
  "categories/removeIncomesCatRequest"
);
export const removeIncomesCatSuccess = createAction(
  "categories/removeIncomesCatSuccess"
);
export const removeIncomesCatError = createAction(
  "categories/removeIncomesCatError"
);

export const setIsDefaultIncomes = createAction(
  "categories/setIsDefaultIncomes"
);
export const setIsDefaultCosts = createAction("categories/setIsDefaultCosts");

export const unsetIsDefaultIncomes = createAction(
  "categories/unsetIsDefaultIncomes"
);
export const unsetIsDefaultCosts = createAction(
  "categories/unsetIsDefaultCosts"
);
