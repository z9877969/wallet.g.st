import { useState } from "react";
import moment from "moment";
import { Route, Switch } from "react-router-dom";
import BtnGoBack from "../components/_share/BtnGoBack/BtnGoBack";
import TransactionForm from "../components/TransactionForm/TransactionForm";
import CategoriesTransactions from "../components/CategoriesTransactions/CategoriesTransactions";
import Section from "../components/_share/Section/Section";
import { useDispatch, useSelector } from "react-redux";
import { addTransaction } from "../redux/transactions/transactionsOperations";
import { useEffect } from "react";
import {
  addCategories,
  addCategory,
  getCategories,
} from "../redux/categories/categoriesOperations";
import {
  costsCat as defaultCostsCats,
  incomesCat as defaultIncomesCats,
} from "../assets/categoriesList.json";
import {
  unsetIsDefaultCosts,
  unsetIsDefaultIncomes,
} from "../redux/categories/categoriesActions";

const TransactionPage = ({ match, history }) => {
  const dispatch = useDispatch();

  const { costs: isDefaultCosts, incomes: isDefaultIncomes } = useSelector(
    (state) => state.categories.isDefault
  );
  const categories = useSelector((state) => state.categories);

  const { transType } = match.params;
  const { push, location } = history;

  const [data, setData] = useState(moment().format("YYYY-MM-DD"));
  const [time, setTime] = useState(moment().format("hh:mm"));
  const [category, setCategory] = useState(
    transType === "costs" ? "Еда" : "Зарплата"
  );
  const [sum, setSum] = useState("");
  const [currency, setCurrency] = useState("UAH");
  const [comment, setComment] = useState("");

  const dataForm = { data, time, category, sum, currency, comment };

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "data":
        return setData(value);
      case "time":
        return setTime(value);
      case "sum":
        return setSum(value);
      case "comment":
        return setComment(value);
      default:
        return;
    }
  };

  const handleUpdateCat = (category) => {
    setCategory(category);
    handleGoBack();
  };

  const handleAddTransaction = () => {
    dispatch(addTransaction({ transType, transaction: dataForm }));
  };

  const handleOpenCatList = () => {
    push({
      pathname: match.url + "/cat-list",
      state: {
        from: location,
      },
    });
  };

  const handleGoBack = () => {
    push(location.state?.from || "/");
  };

  useEffect(() => {
    !categories[transType + "Cat"].length && dispatch(getCategories(transType));
  }, [dispatch]);

  useEffect(() => {
    isDefaultIncomes &&
      defaultIncomesCats.forEach((category) =>
        dispatch(addCategory({ transType, category }))
      );

    isDefaultCosts &&
      defaultCostsCats.forEach((category) =>
        dispatch(addCategory({ transType, category }))
      );
    return () => {
      isDefaultIncomes && dispatch(unsetIsDefaultIncomes());
      isDefaultCosts && dispatch(unsetIsDefaultCosts());
    };
  }, [isDefaultCosts, isDefaultIncomes]);

  return (
    <Section>
      <Switch>
        <Route
          path="/transaction/:transType"
          exact
          render={() => (
            <div>
              <BtnGoBack title="GoBack" />
              <h1>{transType === "costs" ? "Расходы" : "Доходы"}</h1>
              <TransactionForm
                dataForm={dataForm}
                handleGoBack={handleGoBack}
                handleOpenCatList={handleOpenCatList}
                handleChange={handleChange}
                handleAddTransaction={handleAddTransaction}
              />
            </div>
          )}
        />
        <Route
          path="/transaction/:transType/cat-list"
          render={() => (
            <CategoriesTransactions
              catList={categories[transType + "Cat"]}
              handleUpdateCat={handleUpdateCat}
              transType={transType}
            />
          )}
        />
      </Switch>
    </Section>
  );
};

export default TransactionPage;
