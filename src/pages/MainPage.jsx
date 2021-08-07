import MainInfo from "../components/MainInfo/MainInfo";
import Button from "../components/_share/Button/Button";
import Section from "../components/_share/Section/Section";
import mainInfoData from "../assets/mainInfoData.json";
import { useHistory } from "react-router-dom";

const { mainInfoCosts, mainInfoIncomes, mainInfoBalance } = mainInfoData;

const MainPage = ({ handleOpenTransactionForm }) => {
  const { location, push } = useHistory();

  const openCostsHistory = () =>
    push({
      pathname: "/history/costs",
      state: {
        from: location,
      },
    });

  const openIncomesHistory = () =>
    push({
      pathname: "/history/incomes",
      state: {
        from: location,
      },
    });

  return (
    <>
      <Section title="Журнал расходов" />

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
      <Section>
        <Button title="Все расходы" cbOnClick={openCostsHistory} />
        <Button title="Все доходы" cbOnClick={openIncomesHistory} />
      </Section>
    </>
  );
};

export default MainPage;
