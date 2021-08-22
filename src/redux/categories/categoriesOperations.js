import axios from "axios";
import {
  getCostsCatRequest,
  getCostsCatSuccess,
  getCostsCatError,
  getIncomesCatRequest,
  getIncomesCatSuccess,
  getIncomesCatError,
  addIncomesCatRequest,
  addCostsCatRequest,
  addIncomesCatSuccess,
  addCostsCatSuccess,
  addIncomesCatError,
  addCostsCatError,
  setIsDefaultIncomes,
  setIsDefaultCosts,
  removeIncomesCatRequest,
  removeCostsCatRequest,
  removeIncomesCatSuccess,
  removeCostsCatSuccess,
  removeIncomesCatError,
  removeCostsCatError,
} from "./categoriesActions";

axios.defaults.baseURL = "http://localhost:4040";

export const getCategories = (transType) => (dispatch) => {
  transType === "incomes"
    ? dispatch(getIncomesCatRequest())
    : dispatch(getCostsCatRequest());

  axios
    .get(transType + "Cat")
    .then(({ data }) => {
      if (data.length) {
        transType === "incomes"
          ? dispatch(getIncomesCatSuccess(data))
          : dispatch(getCostsCatSuccess(data));
      } else {
        transType === "incomes"
          ? dispatch(setIsDefaultIncomes())
          : dispatch(setIsDefaultCosts());
      }
    })
    .catch((err) =>
      transType === "incomes"
        ? dispatch(getIncomesCatError(err.message))
        : dispatch(getCostsCatError(err.message))
    );
};

export const addCategory =
  ({ transType, category }) =>
  (dispatch) => {
    transType === "incomes"
      ? dispatch(addIncomesCatRequest())
      : dispatch(addCostsCatRequest());

    axios
      .post(transType + "Cat", category)
      .then(({ data }) =>
        transType === "incomes"
          ? dispatch(addIncomesCatSuccess(data))
          : dispatch(addCostsCatSuccess(data))
      )
      .catch((err) =>
        transType === "incomes"
          ? dispatch(addIncomesCatError(err.message))
          : dispatch(addCostsCatError(err.message))
      );
  };

export const removeCategory =
  ({ transType, id }) =>
  (dispatch) => {
    transType === "incomes"
      ? dispatch(removeIncomesCatRequest())
      : dispatch(removeCostsCatRequest());

    axios
      .delete(transType + "Cat" + "/" + id)
      .then(() => {
        transType === "incomes"
          ? dispatch(removeIncomesCatSuccess(id))
          : dispatch(removeCostsCatSuccess(id));
      })    
      .catch((err) =>
        transType === "incomes"
          ? dispatch(removeIncomesCatError(err.message))
          : dispatch(removeCostsCatError(err.message))
      );
  };
