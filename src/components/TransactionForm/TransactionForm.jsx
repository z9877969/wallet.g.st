import { Component } from "react";
import moment from 'moment';
import LabelInput from "../LabelInput/LabelInput";
import Button from "../_share/Button/Button";

// const TransactionForm = () => {
//     return (
//         <form>
//             <h1>TransactionForm</h1>
//             <Button type="submit" title="OK"/>
//             <LabelInput title="День" type="date" name="date" value=""/>
//             <LabelInput title="Время" type="time" name="time" value=""/>
//             <LabelInput title="Категория" type="category" name="category" value=""/>
//             <LabelInput title="Сумма" type="sum" name="sum" value="" placeholder="Введите сумму"/>
//             <LabelInput title="Валюта" type="currency" name="currency" value=""/>
//             <LabelInput title="Комментарий" type="comment" name="comment" value="" placeholder="Комментарий"/>
//         </form>
//     );
// }

class TransactionForm extends Component {

    state = {
       date: moment().format("YYYY-MM-DD"),
       time: moment().format("hh:mm"),
       category: this.props.transType === "costs" ? "Еда" : "Зарплата",
       sum: "",
       currency: "UAH",
       comment: "" 
    }

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {transType, handleCloseTransactionForm} = this.props;
        const dataFromLS = localStorage.getItem(transType);
        const transactions = dataFromLS === null ? [] : JSON.parse(dataFromLS);
        localStorage.setItem(transType, JSON.stringify([...transactions, this.state]));
        handleCloseTransactionForm();
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>TransactionForm</h1>
                <Button type="submit" title="OK"/>
                <LabelInput title="День" type="date" name="date" value={this.state.date} cbOnChange={this.handleChange}/>
                <LabelInput title="Время" type="time" name="time" value={this.state.time} cbOnChange={this.handleChange}/>
                <LabelInput title="Категория" type="button" name="category" value={this.state.category} cbOnChange={this.handleChange}/>
                <LabelInput title="Сумма" name="sum" value={this.state.sum} placeholder="Введите сумму" cbOnChange={this.handleChange}/>
                <LabelInput title="Валюта" type="button" name="currency" value={this.state.currency} cbOnChange={this.handleChange}/>
                <LabelInput title="Комментарий" name="comment" value={this.state.comment} placeholder="Комментарий" cbOnChange={this.handleChange}/>
            </form>
        );
    }
}
 
export default TransactionForm;