import { Component } from "react";
import { Route, Switch } from "react-router-dom";
import MainPage from "../../pages/MainPage";
import TransactionPage from "../../pages/TransactionPage";
import TransactionsHistoryPage from "../../pages/TransactionsHistoryPage";
import { setToLS, getFromLS } from "../../utils/helpers";
import categories from "../../assets/categoriesList.json";
import "./App.css";

class App extends Component {
  state = {
    costs: [],
    incomes: [],
    costsCat: [],
    incomesCat: [],
  };

  componentDidMount() {
    this.getInitialTransactions();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.costs !== this.state.costs) {
      setToLS("costs", this.state.costs);
    }
    if (prevState.incomes !== this.state.incomes) {
      setToLS("incomes", this.state.incomes);
    }
  }

  getInitialTransactions = () => {
    const incomes = getFromLS("incomes");
    const costs = getFromLS("costs");
    this.setState({
      incomes: incomes ? incomes : [],
      costs: costs ? costs : [],
    });
  };

  getTransactionsCat = (transType) => {
    const catType = transType + "Cat";
    if (this.state[catType]?.length === 0) {
      const incomesCat = getFromLS(catType);
      const data = incomesCat ? incomesCat : categories[catType];
      this.setState({ [catType]: data });
      !incomesCat && setToLS(catType, data);
    }
  };

  // handleOpenTransactionForm = (transType) => {
  //   this.setState({ transType });
  // };

  // handleCloseTransactionForm = () => {
  //   this.setState({ transType: "" });
  // };

  handleAddTransaction = ({ transType, transaction }) => {
    this.setState((prev) => ({
      [transType]: [...prev[transType], transaction],
    }));
  };

  render() {
    const { incomesCat, costsCat, costs, incomes } = this.state;
    return (
      <>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route
            path="/transaction/:transType"
            render={(routerProps) => (
              <TransactionPage
                {...routerProps}
                // transType={this.state.transType}
                costsCat={costsCat}
                incomesCat={incomesCat}
                // handleCloseTransactionForm={this.handleCloseTransactionForm}
                handleAddTransaction={this.handleAddTransaction}
                getTransactionsCat={this.getTransactionsCat}
              />
            )}
          />
          <Route path="/history/:transType">
            <TransactionsHistoryPage costs={costs} incomes={incomes} />
          </Route>
        </Switch>
      </>
    );
  }
}

export default App;
