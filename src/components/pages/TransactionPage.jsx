import Button from "../_share/Button/Button";
import TransactionForm from '../TransactionForm/TransactionForm';

const TransactionPage = (props) => {

    const {transType, handleCloseTransactionForm} = props;

    // const handleGoBack = () => 

    return (
        <div>
            <Button title="GoBack" cbOnClick={handleCloseTransactionForm}/>
            <h1>{transType === "costs" ? "Расходы" : "Доходы"}</h1>
            <TransactionForm transType={transType} handleCloseTransactionForm={handleCloseTransactionForm}/>


        </div>
    );
}
 
export default TransactionPage;