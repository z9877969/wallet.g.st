import { Component } from "react";
import LabelInput from "../_share/LabelInput/LabelInput";
import Button from "../_share/Button/Button";

class TransactionForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const { transType, dataForm, handleGoBack, handleAddTransaction } =
      this.props;
    handleAddTransaction({ transType, transaction: dataForm });
    handleGoBack();
  };

  render() {
    const { dataForm, handleOpenCatList, handleChange } = this.props;
    const { date, time, category, sum, currency, comment } = dataForm;
    return (
      <form onSubmit={this.handleSubmit}>
        <Button type="submit" title="OK" />
        <LabelInput
          title="День"
          type="date"
          name="date"
          value={date}
          cbOnChange={handleChange}
        />
        <LabelInput
          title="Время"
          type="time"
          name="time"
          value={time}
          cbOnChange={handleChange}
        />
        <LabelInput
          title="Категория"
          type="button"
          name="category"
          value={category}
          cbOnClick={handleOpenCatList}
        />
        <LabelInput
          title="Сумма"
          name="sum"
          value={sum}
          placeholder="Введите сумму"
          cbOnChange={handleChange}
        />
        <LabelInput
          title="Валюта"
          type="button"
          name="currency"
          value={currency}
          cbOnChange={handleChange}
        />
        <LabelInput
          title="Комментарий"
          name="comment"
          value={comment}
          placeholder="Комментарий"
          cbOnChange={handleChange}
        />
      </form>
    );
  }
}

export default TransactionForm;
