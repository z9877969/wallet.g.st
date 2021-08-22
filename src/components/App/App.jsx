import { Component } from "react";
import { Route, Switch } from "react-router-dom";
import MainPage from "../../pages/MainPage";
import TransactionPage from "../../pages/TransactionPage";
import TransactionsHistoryPage from "../../pages/TransactionsHistoryPage";
import categories from "../../assets/categoriesList.json";
import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTransaction } from "../../redux/transactions/transactionsOperations";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTransaction("costs"));
    dispatch(getTransaction("incomes"));
  }, [dispatch]);

  return (
    <>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/transaction/:transType" component={TransactionPage} />
        <Route path="/history/:transType" component={TransactionsHistoryPage} />
      </Switch>
    </>
  );
};

export default App;
