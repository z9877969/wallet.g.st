import { Component } from "react";
import moment from "moment";
import Button from "../_share/Button/Button";
import TransactionForm from "../TransactionForm/TransactionForm";
import CategoriesTransactions from "../CategoriesTransactions/CategoriesTransactions";
// import { costsCat, incomesCat } from "../../assets/categoriesList.json";

class TransactionPage extends Component {
  state = {
    date: moment().format("YYYY-MM-DD"),
    time: moment().format("hh:mm"),
    category: this.props.transType === "costs" ? "Еда" : "Зарплата",
    sum: "",
    currency: "UAH",
    comment: "",
    isCatList: false,
  };

  componentDidMount() {
    const { getTransactionsCat, transType } = this.props;
    getTransactionsCat(transType);
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleUpdateCat = (category) => {
    this.setState({ category });
    this.handleToggleCatList();
  };

  handleToggleCatList = () => {
    this.setState((prev) => ({ isCatList: !prev.isCatList }));
  };

  render() {
    const {
      transType,
      incomesCat,
      costsCat,
      handleCloseTransactionForm,
      handleAddTransaction,
    } = this.props;
    const { isCatList, ...dataForm } = this.state;
    return (
      <>
        {!this.state.isCatList ? (
          <div>
            <Button title="GoBack" cbOnClick={handleCloseTransactionForm} />
            <h1>{transType === "costs" ? "Расходы" : "Доходы"}</h1>
            <TransactionForm
              transType={transType}
              dataForm={dataForm}
              handleCloseTransactionForm={handleCloseTransactionForm}
              handleToggleCatList={this.handleToggleCatList}
              handleChange={this.handleChange}
              handleAddTransaction={handleAddTransaction}
            />
          </div>
        ) : (
          <CategoriesTransactions
            catList={transType === "costs" ? costsCat : incomesCat}
            handleToggleCatList={this.handleToggleCatList}
            handleUpdateCat={this.handleUpdateCat}
          />
        )}
      </>
    );
  }
}

export default TransactionPage;
