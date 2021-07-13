import { Component } from "react";
import MainPage from "../pages/MainPage";
import TransactionPage from "../pages/TransactionPage";
import "./App.css";

class App extends Component {
  state = {
    transType: "",
  };

  handleOpenTransactionForm = (transType) => {
    this.setState({ transType });
  };

  handleCloseTransactionForm = (transType) => {
    this.setState({ transType: "" });
  };

  render() {
    return (
      <>
        {this.state.transType === "" ? (
          <MainPage
            handleOpenTransactionForm={this.handleOpenTransactionForm}
          />
        ) : (
          <TransactionPage
            transType={this.state.transType}
            handleCloseTransactionForm={this.handleCloseTransactionForm}
          />
        )}
      </>
    );
  }
}

export default App;
