import { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import MainPage from "../../pages/MainPage";
import TransactionPage from "../../pages/TransactionPage";
import TransactionsHistoryPage from "../../pages/TransactionsHistoryPage";
import AuthPage from "../../pages/AuthPage";
import Nav from "../_nav/Nav/Nav";
import categories from "../../assets/categoriesList.json";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { getTransaction } from "../../redux/transactions/transactionsOperations";
import { getIsAuth, getToken } from "../../redux/auth/authSelectors";
import { getCurUser } from "../../redux/auth/authOperations";

const App = () => {
  const dispatch = useDispatch();

  const isAuth = useSelector(getIsAuth);
  const idToken = useSelector(getToken);

  useEffect(() => {
    isAuth && dispatch(getTransaction("costs"));
    isAuth && dispatch(getTransaction("incomes"));
  }, [isAuth]);

  useEffect(() => {
    idToken && !isAuth && dispatch(getCurUser());
  }, [idToken]);

  return (
    <>
      <Nav isAuth={isAuth} />
      {isAuth ? (
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/transaction/:transType" component={TransactionPage} />
          <Route
            path="/history/:transType"
            component={TransactionsHistoryPage}
          />
          <Redirect to="/" />
        </Switch>
      ) : (
        <Switch>
          <Route path="/auth/:authType" component={AuthPage} />
          <Redirect to="/auth/login" />
        </Switch>
      )}
    </>
  );
};

export default App;
