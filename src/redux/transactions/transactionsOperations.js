import axios from "axios";
import {
  addCostsRequest,
  addCostsSuccess,
  addCostsError,
  addIncomesRequest,
  addIncomesSuccess,
  addIncomesError,
  getIncomesRequest,
  getCostsRequest,
  getIncomesSuccess,
  getCostsSuccess,
  getIncomesError,
  getCostsError,
} from "./transactionsActions";

axios.defaults.baseURL = "http://localhost:4040";

export const addTransaction =
  ({ transType, transaction }) =>
  (dispatch) => {
    transType === "incomes"
      ? dispatch(addIncomesRequest())
      : dispatch(addCostsRequest());

    axios
      .post(transType, transaction)
      .then(({ data }) =>
        transType === "incomes"
          ? dispatch(addIncomesSuccess(data))
          : dispatch(addCostsSuccess(data))
      )
      .catch((err) =>
        transType === "incomes"
          ? dispatch(addIncomesError(err.message))
          : dispatch(addCostsError(err.message))
      );
  };

export const getTransaction = (transType) => (dispatch) => {
  transType === "incomes"
    ? dispatch(getIncomesRequest())
    : dispatch(getCostsRequest());

  axios
    .get(transType)
    .then(({ data }) =>
      transType === "incomes"
        ? dispatch(getIncomesSuccess(data))
        : dispatch(getCostsSuccess(data))
    )
    .catch((err) =>
      transType === "incomes"
        ? dispatch(getIncomesError(err.message))
        : dispatch(getCostsError(err.message))
    );
};
