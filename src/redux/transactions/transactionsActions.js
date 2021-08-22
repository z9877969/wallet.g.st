import { createAction } from "@reduxjs/toolkit";

export const addCostsRequest = createAction("transactions/addCostsRequest");
export const addCostsSuccess = createAction("transactions/addCostsSuccess");
export const addCostsError = createAction("transactions/addCostsError");

export const addIncomesRequest = createAction("transactions/addIncomesRequest");
export const addIncomesSuccess = createAction("transactions/addIncomesSuccess");
export const addIncomesError = createAction("transactions/addIncomesError");

export const getCostsRequest = createAction("transactions/getCostsRequest");
export const getCostsSuccess = createAction("transactions/getCostsSuccess");
export const getCostsError = createAction("transactions/getCostsError");

export const getIncomesRequest = createAction("transactions/getIncomesRequest");
export const getIncomesSuccess = createAction("transactions/getIncomesSuccess");
export const getIncomesError = createAction("transactions/getIncomesError");
