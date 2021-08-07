import { Component } from "react";
import moment from "moment";
import { Route, Switch } from "react-router-dom";
import BtnGoBack from "../components/_share/BtnGoBack/BtnGoBack";
import TransactionForm from "../components/TransactionForm/TransactionForm";
import CategoriesTransactions from "../components/CategoriesTransactions/CategoriesTransactions";
// import { costsCat, incomesCat } from "../../assets/categoriesList.json";

class TransactionPage extends Component {
  state = {
    date: moment().format("YYYY-MM-DD"),
    time: moment().format("hh:mm"),
    category:
      this.props.match.params.transType === "costs" ? "Еда" : "Зарплата",
    sum: "",
    currency: "UAH",
    comment: "",
    isCatList: false,
  };

  componentDidMount() {
    const { getTransactionsCat, match } = this.props;
    const { transType } = match.params;
    getTransactionsCat(transType);
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleUpdateCat = (category) => {
    this.setState({ category });
    this.handleGoBack();
  };

  handleOpenCatList = () => {
    // this.setState((prev) => ({ isCatList: !prev.isCatList }));
    const {
      history: { push, location },
      match,
    } = this.props;

    push({
      pathname: match.url + "/cat-list",
      state: {
        from: location,
      },
    });
  };

  handleGoBack = () => {
    const { push, location } = this.props.history;
    push(location.state?.from || "/");
  };

  render() {
    const { match, incomesCat, costsCat, handleAddTransaction } = this.props;
    const { transType } = match.params;
    const { isCatList, ...dataForm } = this.state;
    return (
      <Switch>
        <Route
          path="/transaction/:transType"
          exact
          render={() => (
            <div>
              <BtnGoBack title="GoBack" />
              <h1>{transType === "costs" ? "Расходы" : "Доходы"}</h1>
              <TransactionForm
                transType={transType}
                dataForm={dataForm}
                handleGoBack={this.handleGoBack}
                handleOpenCatList={this.handleOpenCatList}
                handleChange={this.handleChange}
                handleAddTransaction={handleAddTransaction}
              />
            </div>
          )}
        />
        <Route
          path="/transaction/:transType/cat-list"
          render={() => (
            <CategoriesTransactions
              catList={transType === "costs" ? costsCat : incomesCat}
              handleUpdateCat={this.handleUpdateCat}
            />
          )}
        />
      </Switch>
    );
  }
}

export default TransactionPage;

// {!this.state.isCatList ? (
// <div>
//   <Button title="GoBack" cbOnClick={this.handleGoBack} />
//   <h1>{transType === "costs" ? "Расходы" : "Доходы"}</h1>
//   <TransactionForm
//     transType={transType}
//     dataForm={dataForm}
//     // handleCloseTransactionForm={handleCloseTransactionForm}
//     handleToggleCatList={this.handleToggleCatList}
//     handleChange={this.handleChange}
//     handleAddTransaction={handleAddTransaction}
//   />
// </div>
// ) : (
// <CategoriesTransactions
//   catList={transType === "costs" ? costsCat : incomesCat}
//   handleToggleCatList={this.handleToggleCatList}
//   handleUpdateCat={this.handleUpdateCat}
// />
// )}
