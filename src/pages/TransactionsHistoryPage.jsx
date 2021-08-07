import { Link, useParams, useRouteMatch } from "react-router-dom";
import Section from "../components/_share/Section/Section";
import BtnGoBack from "../components/_share/BtnGoBack/BtnGoBack";
import Button from "../components/_share/Button/Button";
import LabelInput from "../components/_share/LabelInput/LabelInput";

const options = [
  {
    value: "day",
    title: "День",
  },
  {
    value: "week",
    title: "Неделя",
  },
  {
    value: "month",
    title: "Месяц",
  },
  {
    value: "year",
    title: "Год",
  },
  {
    value: "allTime",
    title: "Все время",
  },
];

const TransactionsHistoryPage = (props) => {
  const { costs, incomes } = props;

  const { transType } = useParams();
  const { url } = useRouteMatch();

  const transactions = transType === "costs" ? costs : incomes;

  const transSum = transactions.reduce((acc, { sum }) => {
    acc += Number(sum);
    return acc;
  }, 0);

  return (
    <Section>
      <BtnGoBack title={"GoBack"} />
      <select name="period">
        {options.map(({ value, title }) => (
          <option value={value}>{title}</option>
        ))}
      </select>
      <div style={{ display: "flex" }}>
        <Button title={"prev"} />
        <LabelInput type="date" title="7 августа 2021" name="date" />
        <Button title={"next"} />
      </div>
      <table>
        <tr>
          <th>Всего:</th>
          <th>{transSum}</th>
        </tr>
        {transactions.length &&
          transactions.map((transaction) => (
            <tr>
              <td>{transaction.category}</td>
              <td>
                <span>{transaction.sum}</span>
                <Link to={{ pathname: url + "/details" }}>{"==>>"}</Link>
              </td>
            </tr>
          ))}
      </table>
    </Section>
  );
};

export default TransactionsHistoryPage;
