import { configureStore } from "@reduxjs/toolkit";
import transactions from "./transactions/transactionsReducer";
import categories from "./categories/categoriesReducer";

const store = configureStore({
  reducer: {
    qwe: (state = [], action) => state,
    transactions,
    categories,
  },
});

export default store;
