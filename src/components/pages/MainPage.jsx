import MainInfo from "../MainInfo/MainInfo";
import Button from "../_share/Button/Button";
import mainInfoData from "../../assets/mainInfoData.json";

const { mainInfoCosts, mainInfoIncomes, mainInfoBalance } = mainInfoData;

const MainPage = ({ handleOpenTransactionForm }) => {
  return (
    <>
      <h1>Журнал расходов</h1>
      <MainInfo
        handleOpenTransactionForm={handleOpenTransactionForm}
        data={mainInfoCosts}
        title="Расходы"
        transType="costs"
      />
      <MainInfo
        handleOpenTransactionForm={handleOpenTransactionForm}
        data={mainInfoIncomes}
        title="Доходы"
        transType="incomes"
      />
      <MainInfo data={mainInfoBalance} title="Баланс" transType="balance" />

      <Button title="Все расходы" />
      <Button title="Все доходы" />
    </>
  );
};

export default MainPage;
